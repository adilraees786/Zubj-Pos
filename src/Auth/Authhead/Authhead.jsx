import React from 'react'
import logo from '../../../src/assets/Images/logo.png'

const Authhead = () => {
    return (
        <div className='p-2 flex  flex-col items-center w-full'>
            <img src={logo} alt="logo" className='w-[90px]  my-6' />
        </div>
    )
}

export default Authhead