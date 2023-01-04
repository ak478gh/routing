import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

async function getData() {
    try {
        let res = await fetch(`https://reqres.in/api/users`);
        return res.json();
    } catch (error) {
        console.log(error);
    }
}

export default function Users() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(false);

    async function fetchAndUpdateData() {
        try {
            setLoading(true);
            let data = await getData()
            let actualData = data.data
            setData(actualData)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setErr(true);
        }
    }

    // console.log(data);

    useEffect(()=> {
        fetchAndUpdateData();
    },[]);

    return (
        loading ? <p>Loading</p> : err ? <p>Something went wrong</p>:
        <>
            <h1>Users</h1>
            {data.map((item)=> {
                return <div key={item.id}>
                    <img src={item.avatar} alt="" />
                    <h3>{item.first_name}</h3>
                    <Link to={`${item.id}`}>more info</Link>
                    </div>
            })}
        </>
    )
}