import React from "react";
import {Routes, Route} from "react-router-dom";
import HomeComponents from "../frontend/pages/home/HomeComponents";
import AboutComponents from "../frontend/pages/about/AboutComponents";
import PageNotFoundComponents from "../errors/PageNotFoundComponents";
import DashboardComponents from "../backend/pages/dashboard/DashboardComponents";

function RouterComponents() {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<HomeComponents/>}/>
                <Route path="/about" element={<AboutComponents/>}/>
                <Route path="/admin" element={<DashboardComponents/>}/>


                <Route path="/*" element={<PageNotFoundComponents/>}/>

            </Routes>
        </React.Fragment>
    )
}

export default RouterComponents;