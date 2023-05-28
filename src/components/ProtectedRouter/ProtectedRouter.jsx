import { useContext } from "react"
import { UserNameContext } from "../../context/UserNameContext";
import { Navigate } from "react-router-dom";


const ProtectedRouter = ({ children }) => {
    const { userName } = useContext(UserNameContext);
  
  if (userName) return <>{children}</>;
  else return <Navigate to="/"/> ;
}

export default ProtectedRouter