import React from 'react'


const Button = ({ children, isLoading, extraClass, ...otherProps }) => {
    return (
        <button disabled={isLoading} className={`transition-all ease-in-out hover:scale-[1.03] rounded-md bg-yellow-300 disabled:bg-gray-400  outline-none  w-full py-3 text-lg font-semibold text-black ${extraClass}`} {...otherProps} >
            {
             
                    
                    children
            }
        </button>
    )
}

export default Button