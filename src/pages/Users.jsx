import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

async function getData(page) {
    try {
        let res = await fetch(`https://reqres.in/api/users?page=${page}`);
        return res.json();
    } catch (error) {
        console.log(error);
    }
}

export default function Users() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams()
    const [page, setPage] = useState(Number(searchParams.get('page')));
    console.log(searchParams.get('page'))
    console.log(searchParams.get('title'))

    const navigate = useNavigate();

    async function fetchAndUpdateData(page) {
        try {
            setLoading(true);
            let data = await getData(page)
            let actualData = data.data
            setData(actualData)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setErr(true);
        }
    }

    useEffect(()=> {
        fetchAndUpdateData(page);
    },[page]);

    useEffect(()=> {
        setSearchParams({page:page})
    },[page])

    function handleChangePage(val) {
        let changeBy = page + val;
        setPage(changeBy);
    }

    return (
        loading ? <p>Loading</p> : err ? <p>Something went wrong</p>:
        <>
            
            <button onClick={()=> navigate('/')}>NAVIGATE TO HOME USING useNavigate Hook</button>
            
            <Link to='/'><button> NAVIGATE TO HOME USING Link Hook</button></Link>
            <h1>Users</h1>
            {data.map((item)=> {
                return <div key={item.id}>
                    <img src={item.avatar} alt="" />
                    <h3>{item.first_name}</h3>
                    <Link to={`${item.id}`}>more info</Link>
                    </div>
            })}
            <button onClick={()=> handleChangePage(-1)} disabled={page===1}>PREV</button>
            <button>{page}</button>
            <button onClick={()=> handleChangePage(1)}>NEXT</button>
        </>
    )
}