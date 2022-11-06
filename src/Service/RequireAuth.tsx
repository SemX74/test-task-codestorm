import { Navigate } from "react-router-dom";
import { useAppSelector } from "../Redux/Hooks";

interface RequireAuthProps {
  children: React.ReactNode;
}

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const token = useAppSelector((state) => state.data.token);
  
  return <>{!token ? <Navigate to="/login" /> : children}</>;
};

export default RequireAuth;
