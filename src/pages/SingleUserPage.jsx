import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

export default function SingleUserPage() {

    const [data, setData] = useState(0);
    const [loading, setLoading] = useState(0);
    const [err, setErr] = useState(0);

    async function getData(id) {
        try {
            let res = await fetch(`https://reqres.in/api/users/${id}`);
            return res.json();
        } catch (error) {
            console.log(error)
        }
    }

    const params = useParams();
    console.log(params)

        const style1 = {
            border: '1px solid black',
            margin: '25px'
        }

        async function fetchAndUpdateData() {
            try {
                setLoading(true);
                let data = await getData(params.user_id)
                let actualData = data
                setData(actualData)
                setLoading(false)
            } catch (error) {
                setLoading(false)
                setErr(true);
            }
        }

        console.log(data);

        useEffect(()=> {
            fetchAndUpdateData();
        },[])

    return (
        loading ? <p>Loading...</p> : err ? <p>Something went wrong</p>:
        <>
            <div style={style1}>
                <img src={data?.data?.avatar} alt="" />
                <h3>{`Name: ${data?.data?.first_name} ${data?.data?.last_name}`}</h3>
                <h4>{`Email: ${data?.data?.email}`}</h4>
                <hr />
                <p>{data?.support?.url}</p>
                <p>{data?.support?.text}</p>
            </div>
        </>
    )
}