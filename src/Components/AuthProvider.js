import { createContext, useState } from "react";

const AuthContext = createContext({})

export const AuthProvider = ({children})=>{
 const [auth,setAuth] = useState({
  username: '', 
  isLoggedIn: false,
 })


const login = ({username}) => {
    //  login logic
    setAuth({
      username: username,
      isLoggedIn: true,
    });
  };

  const logout = () => {
    // logout logic
    setAuth({
      username: "",
      isLoggedIn: false,
    });
  };


 return(
   <AuthContext.Provider value={{auth, login, logout}}>
    {children}
   </AuthContext.Provider>
 )
}

export default  AuthContext;