import React from 'react'
import { Outlet } from "react-router-dom";
import Authhead from '../Auth/Authhead/Authhead';
import Footer from '../Footer/Footer'


const AuthLayout = ({ children }) => {


    return (
        <>
            <div className="w-full  authBackground">
                <Authhead />
                <div style={{ height: "calc(100vh - 50px)" }} className='w-full flex flex-col justify-center items-center overflow-y-auto'>
                    <Outlet>
                        {children}
                    </Outlet>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default AuthLayout