import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = (props: any) => {
  // const auth = null; // determine if authorized, from context or however you're doing it
  const token = localStorage.getItem("auth");
  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
