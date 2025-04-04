import React from 'react'
import { FaUser } from 'react-icons/fa'
import clock from '../../src/assets/Images/clock.png'
import { IoMdMenu } from 'react-icons/io'


const Header = () => {

    return (
        <nav className=" bg-gray-800 px-6 py-4 flex  items-center justify-between  ">
            <div className=' flex items-center justify-between'>
                <IoMdMenu size={30} className=' text-white'/>
            <h1 className=' text-white font-bold cursor-pointer'>Dashboard</h1>
            </div>
            <div className='flex items-center justify-between'>

                <div className=' flex items-center '>
                    <div className=' relative md:w-65'>
                        <div className=' relative md:absolute inset-y-0  flex items-center  pl-2'>
                            <span className=' text-gray-300 font-bold cursor-pointer'>franchise Portal</span>
                        </div>
                    </div>
                </div>

                <div className='text-white flex gap-2 cursor-pointer  '>
                    <img src={clock} alt="" className=' w-6 h- text-amber-300' />
                    <span className='  hover:bg-amber-300'>Clock In/Out</span>
                </div>

                <div className='text-white flex gap-2 cursor-pointer'>
                    <FaUser className="w-6 h-6 ml-2 " />
                    <span className='  hover:bg-amber-300'>Azabel</span>
                </div>
            </div>
        </nav>

    )
}

export default Header

