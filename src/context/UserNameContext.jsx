import { createContext, useState } from "react";

export const UserNameContext = createContext(null);

export const UserNameProvider = ({ children }) => {

    const [userName, setUserName] = useState('');

    const seveUserName = (newUserName) => setUserName(newUserName);

    const removeUserName = () => setUserName('');
   
return (
    <UserNameContext.Provider value={{ userName, seveUserName, removeUserName }}>
        {children}
    </UserNameContext.Provider>
  )
}

