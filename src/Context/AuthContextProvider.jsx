import { createContext, useState } from "react";

// 1. create context
export const AuthContext = createContext();

// 2. Provide
export default function AuthContextProvider({children}) {

    const [isAuth, setIsAuth] = useState(true);

    function login() {
        setIsAuth(true);
    }

    function logout() {
        setIsAuth(false);
    }

    return (
        <AuthContext.Provider value={{isAuth, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}