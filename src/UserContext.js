import { createContext, useState } from "react";

let UserContext = createContext();

export const UserProvider = ({ children }) => {
    let [user, setUser] = useState({name : "Ramya", age : 24, position : "Developer"})
    return(
       <UserContext.Provider value={{user, setUser}}>
        {children}
       </UserContext.Provider> 
    )
}
export default UserContext;