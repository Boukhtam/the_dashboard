import { Redirect, Route } from "react-router-dom";

function ProtectedRoute(props) { 
  var isLoggedin = false

  if (!isLoggedin)
    return <Redirect to="/login" />

  return <Route {...props}>{props.children}</Route>
 }

 export default ProtectedRoute;