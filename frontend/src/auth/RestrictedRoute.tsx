import { Navigate, Outlet } from "react-router-dom";

const RestrictedRoute = (props:any) => {
  // const isAuth  = false

  const token = localStorage.getItem('auth');
 
  return <>{!token ? <Outlet /> : <Navigate to="/" />}</>;

};

export default RestrictedRoute;


