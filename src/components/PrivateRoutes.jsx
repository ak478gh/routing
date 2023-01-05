import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

export default function PrivateRoutes({children}) {
    const {isAuth} = useContext(AuthContext);

    if(!isAuth) {
        return <Navigate to='/login'/>
    }

    return children;

}