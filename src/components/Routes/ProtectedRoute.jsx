import { Navigate, Outlet } from "react-router-dom";
import { useSelector} from "react-redux";

export default function ProtectedRoute() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? <Outlet/> : <Navigate to="/login" replace />;
}
