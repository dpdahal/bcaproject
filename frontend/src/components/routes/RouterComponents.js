import React from "react";
import {Routes, Route} from "react-router-dom";
import HomeComponents from "../frontend/pages/home/HomeComponents";
import AboutComponents from "../frontend/pages/about/AboutComponents";
import PageNotFoundComponents from "../errors/PageNotFoundComponents";
import DashboardComponents from "../backend/pages/dashboard/DashboardComponents";
import LoginComponents from "../auth/LoginComponents";
import RouteMiddlewareComponents from "../middleware/RouteMiddlewareComponents";

function RouterComponents() {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<HomeComponents/>}/>
                <Route path="/about" element={<AboutComponents/>}/>
                <Route path="/login" element={<LoginComponents/>}/>
                <Route element={<RouteMiddlewareComponents/>}>
                    <Route path="/admin" element={<DashboardComponents/>}/>
                </Route>
                <Route path="/*" element={<PageNotFoundComponents/>}/>

            </Routes>
        </React.Fragment>
    )
}

export default RouterComponents;