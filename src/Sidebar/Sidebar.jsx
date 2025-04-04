import React, { useState } from 'react';
import { MdDashboard } from "react-icons/md";
import { FcSalesPerformance } from "react-icons/fc";
import { IoMdMenu } from "react-icons/io";
import { useNavigate } from 'react-router';
import logo from '../../src/assets/Images/logo.png'

const Sidebar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleNavigation = (path) => {
        navigate(`/${path}`);
        setIsOpen(false); // Close sidebar after navigation (for mobile)
    };

    return (
        <>


            {/* Sidebar */}
            <div className={`relative h-full bg-white px-4 py-2 transition-all duration-300 ease-in-out 
                ${isOpen ? 'w-64 left-0 ' : 'w-0 left-[-100%] md:w-64 md:left-0 md:block hidden'} `}>
                {/* Menu Button for Small Screens */}
                <div className="md:hidden relative top-4 left-4 z-50">
                    <IoMdMenu className="text-3xl cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
                </div>
                <div className="my-2 mb-4 flex justify-between items-center">
                    <img src={logo} alt="logo" className="w-[90px] ml-8" />
                </div>

                <ul className="mt-3 text-black font-bold">
                    <li className="mb-2 rounded hover:shadow hover:bg-amber-300 py-2 cursor-pointer bg-amber-200">
                        <div className="px-3" onClick={() => handleNavigation('dashboard')}>
                            <MdDashboard className="inline-block w-6 h-6 mr-2 mt-2" />
                            Dashboard
                        </div>
                    </li>
                    <li className="mb-2 rounded hover:shadow hover:bg-amber-300 py-2 cursor-pointer">
                        <div className="px-3" onClick={() => handleNavigation('sales')}>
                            <FcSalesPerformance className="inline-block w-6 h-6 mr-2 -mt-2" />
                            Sales
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;
