import { Redirect, Route } from "react-router-dom";
import user from "../../services/user/user";
function ProtectedRoute(props) { 
  console.log("From the protected route ....", {user})

  if (!user.loggedIn)
    return <Redirect to="/login" />

  return <Route {...props}>{props.children}</Route>
 }

 export default ProtectedRoute;