import React, { useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

const InputField = ({
    specialClass,
    control,
    value,
    eyeIconExtraClass,
    lockIcon,
    lableExtraClass,
    extraClass,
    register,
    errorExtraClass,
    min,
    handleBlur,
    placeholder,
    errors,
    lableText,
    type,
    name,
    showAllDates,
    ...otherProps
}) => {
    const [eyeIcon, setEyeIcon] = useState(true);

    // Get the current date and time
    const today = new Date();
    const todayDate = today.toISOString().split("T")[0]; // Current date in YYYY-MM-DD format
    const currentDateTime = today.toISOString().slice(0, 16); // Current datetime in YYYY-MM-DDTHH:mm format



    return (
        <div className="flex flex-col w-full  relative ">
            <label
                className={`text-secondaryText my-3 ${lableExtraClass} font-regular font-semibold`}
            >
                {lableText}
            </label>
            <div className="relative w-full">
                <input
                    value={value}
                    min={
                        showAllDates ? null :
                            type === "datetime-local"
                                ? currentDateTime // For datetime-local, disable past date and time
                                : type === "date"
                                    ? todayDate // For date, disable past dates
                                    : 0 // Default for other types
                    }
                    placeholder={placeholder}
                    onBlur={() => handleBlur(name)}
                    {...register(name)}
                    control={control}
                    {...otherProps}
                    autoComplete={type === "password" ? "new-password" : "off"}
                    className={`px-4 ${extraClass} py-2 pr-10 rounded-md   placeholder:font-normal text-black border border-2 border-gray-400 outline-none w-full mb-1`}
                    type={type === "password" ? eyeIcon ? "password" : type === 'datetime-local' ? "datetime-local" : "text" : type}
                    name={name}
                />
                {type === "password" &&
                    (eyeIcon ? (
                        <FaEyeSlash
                            className={`absolute ${eyeIconExtraClass} bottom-4 right-3 cursor-pointer`}
                            onClick={() => setEyeIcon(!eyeIcon)}
                        />
                    ) : (
                        <FaRegEye
                            className={`absolute ${eyeIconExtraClass} bottom-4 right-3 cursor-pointer`}
                            onClick={() => setEyeIcon(!eyeIcon)}
                        />
                    ))}
            </div>
            {errors?.[name]?.message && (
                <p
                    className={`text-error font-normal text-sm ${errorExtraClass} my-1`}
                    name={name}
                    component="div"
                >
                    {errors?.[name]?.message}
                </p>
            )}
        </div>
    );
};

export default InputField;
