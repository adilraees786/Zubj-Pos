import React from 'react'

const Paragraph = ({ children, extraClassName, ...otherProps }) => {
    return (
        <p {...otherProps} className={` text-sm m-0 p-0 text-secondaryText font-regular ${extraClassName}`}>
            {children}
        </p>
    )
}

export default Paragraph

