import React from "react";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "../ shared /hooks/Auth";
import { Home, NewUser } from "../pages";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

export const MainRoutes = () => {
  const auth = useAuth();
  return (
    <Routes>
      signup
      <Route path="/" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      {auth.islogged && (
        <>
          <Route path="/home" element={<Home />} />
          <Route path="/newUser" element={<NewUser />} />
        </>
      )}
      <Route path="*" element={<Signin />} />
    </Routes>
  );
};
