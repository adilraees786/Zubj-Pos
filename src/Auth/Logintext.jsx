import React from 'react'
import Paragraph from '../ReusableComponents/Paragraph/Index'


const Logintext = () => {
  return (
    <div className='flex flex-col items-center '>
        <Paragraph extraClassName={'!text-2xl !font-bold'}>Login</Paragraph>
        <Paragraph extraClassName="mt-3 text-xl">Please enter your email and password</Paragraph>
        
    </div>
  )
}

export default Logintext