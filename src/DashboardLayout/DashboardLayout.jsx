
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../compoments/Header';




const DashboardLayout = ({ children }) => {
    return (
        <div className='w-full flex fixed h-screen'>
            <Sidebar/>
            <div className='w-full  flex-col overflow-y-scroll pb-6'>
                <div className='flex flex-col items-start  '>
                    <div className='w-full  bg-gray-100'>
                        <Header/>
                        <Outlet>
                            {children}
                        </Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;





