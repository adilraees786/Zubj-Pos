import React from 'react'
import Paragraph from '../ReusableComponents/Paragraph/Index'


const Footer = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
            <div className='w-full text-center p-4  bg-red'>
                <Paragraph extraClassName="text-white" >Copyright @ Zubjpos. All right reserved</Paragraph>
            </div>
        </div>
  )
}

export default Footer