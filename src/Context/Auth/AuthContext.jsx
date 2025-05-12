/* eslint-disable react/prop-types */
import { createContext, useState } from "react";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [isAuth, setIsAuth] = useState(true);
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;