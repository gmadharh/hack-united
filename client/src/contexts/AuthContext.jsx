import {createContext, useState, useEffect} from "react"

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const handleSignIn = (e, user) => {
        e.preventDefault();
        console.log("Signing In", user);
    }

    const handleSignup = (e, user) => {
        e.preventDefault();
        console.log("Signing Up", user);
    }

    return (
        <AuthContext.Provider value={{handleSignIn, handleSignup}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;