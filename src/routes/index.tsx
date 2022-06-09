import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, NewUser } from "../pages";

export const MainRoutes = () => {
    return(
        <Routes>
            <Route path = "/newUser" element={<NewUser/>}/>
            <Route path = "*" element={<Home/>}/>
        </Routes>
    )
}