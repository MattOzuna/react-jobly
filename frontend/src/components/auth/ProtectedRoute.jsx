import { Route } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useContext } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const ProtectedRoute = () => {
  const { userData } = useContext(UserContext);

  if(!userData) return <Redirect to="/"/>
  return <Route></Route>
};

export default ProtectedRoute;
