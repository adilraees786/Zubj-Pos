import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import MainLoader from "./Mainloader/Index";
import { token } from "./Utlis/Index";

import DashboardLayout from "./DashboardLayout/DashboardLayout";
import { routelist } from "./Routes/Route";
import Privateroute from "./Privateroute/Privateroute";
import Login from "./Auth/Login";
import AuthLayout from "./AuthLayout/AuthLayout";

export default function App() {
  return (
    <>
      <ToastContainer closeOnClick={true} />
      <BrowserRouter>
        <Suspense fallback={<MainLoader />}>
          <Routes>

            <Route path="*" element={token ? (<Navigate to="/dashboard" replace />) :
              (<Navigate to="/login" replace />)}></Route>
            {/* Auth Screen */}
            {
              !token &&
              <Route element={<AuthLayout />}>
                <Route path="/login" element={<Login />} />
              </Route>
            }

            <Route element={<Privateroute />}>
              <Route element={<DashboardLayout />} >
                {routelist.map(({ path, element }) => (
                  <Route key={path} path={path} element={element} />
                ))}

              </Route>
            </Route>

          </Routes>
        </Suspense>
      </BrowserRouter >
    </>
  );
}