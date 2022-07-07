import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, NewUser } from "../pages";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

export const MainRoutes = () => {
    return(
        <Routes>
            <Route path = "/newUser" element={<NewUser/>}/>signup
            <Route path = "/login" element={<Signin />}/>
            <Route path = "/signup" element={<Signup />}/>
            <Route path = "*" element={<Home/>}/>
        </Routes>
    )
}