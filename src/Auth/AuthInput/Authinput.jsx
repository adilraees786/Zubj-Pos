import React, { useState } from 'react'
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const AuthInput = ({ imgExtraClass, disabled = false, control, Icon, eyeIconExtraClass, lockIcon, lableExtraClass, extraClass, register, errorExtraClass, min, handleBlur, placeholder, errors, type, name, ...otherProps }) => {
    const [eyeIcon, setEyeIcon] = useState(true)
    const today = new Date()
    const todayDate = new Date().toISOString().split('T')[0];
    const todayDateTime = today.toISOString().slice(0, 16)

    return (
        <div className='flex flex-col my-4 w-full relative'>
            <div className='relative w-full'>
                <img src={Icon} alt="lockIcon" className={`absolute ${imgExtraClass}  left-6 top-[17px] w-[15px] object-cover`} />
                
                <input disabled={disabled} min={type === "datetime-local" ? todayDateTime : (type === "date" ? todayDate : min)} placeholder={placeholder} onBlur={() => handleBlur(name)} {...register(name)} control={control} {...otherProps} className={`pl-16 pr-10 ${extraClass} py-3   border border-1  ${disabled ? "border-slateGray text-slateGray bg-[#d5d5d5]" : "border-boldGreen text-boldGreen"}  rounded-lg outline-none w-full mb-1`} type={type === "password" ? eyeIcon ? "password" : type === 'datetime-local' ? "datetime-local" : "text" : type} name={name} />
                {type === "password" && (eyeIcon ? <FaEyeSlash className={`absolute ${eyeIconExtraClass} bottom-5 right-3  cursor-pointer`} onClick={() => setEyeIcon(!eyeIcon)} /> : <FaRegEye className={`absolute ${eyeIconExtraClass} bottom-5 right-3  cursor-pointer`} onClick={() => setEyeIcon(!eyeIcon)} />)}
            </div>
            {errors?.[name]?.message && <p className={`text-error text-sm ${errorExtraClass} `} name={name} component="div">{errors?.[name]?.message}</p>}
        </div>
    )
}

export default AuthInput