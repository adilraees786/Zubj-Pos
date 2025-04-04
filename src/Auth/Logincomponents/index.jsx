import React from 'react'
import Logintext from '../Logintext'
import Loginform from '../Form/Loginform'




const LoginComponent = () => {
    return (
        <div className={`w-[350px]`}>
            <Logintext />
            <Loginform/>
          
        </div>
    )
}

export default LoginComponent