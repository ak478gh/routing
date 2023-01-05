import { AuthContext } from "../Context/AuthContextProvider";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

export default function Login() {
    const {isAuth, login} = useContext(AuthContext);

    function handleLogin() {
        login();
    }

    if(isAuth) {
        return <Navigate to='/'/>
    }

    return (
        <>
        <h1>Login Section</h1>
        <button onClick={handleLogin}>Login</button>
        </>
    )

}