import {Navigate, Outlet} from "react-router-dom";

function RouteMiddlewareComponents() {
    const isLogged = localStorage.getItem("token");
    return isLogged ? <Outlet/> : <Navigate to="login"/>;

}

export default RouteMiddlewareComponents;