import React from 'react'
import InputField from '../../ReusableComponents/Inputfiled'
import Button from '../../ReusableComponents/Button/Button'
import { loginSchema } from '../../Schames/Auth'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Paragraph from '../../ReusableComponents/Paragraph/Index'
import { useNavigate } from 'react-router'





const Loginform = () => {

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        trigger,
        control,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            name: "",
            password: "",
        },
        mode: "onBlur",
        resolver: yupResolver(loginSchema),
    });



    const handleBlur = async (fieldName) => {
        try {
            await trigger(fieldName);
        } catch (error) {
            console.error(error);
        }
    };


    const onSubmit = async (value) => {
        try {

            window.localStorage.setItem("LoginToken", "2323")
            window.location.reload()
            navigate('/dashboard')
        } catch (error) {
            toast.error("Some error occurred")
        }

    }

    return (
        <div className='flex flex-col my-2 '>
            <div className='mt-4'>
                <InputField
                    control={control}
                    register={register}
                    placeholder={" Enter Your Email"}
                    name={"email"}
                    type={"text"}
                    errors={errors}
                    handleBlur={handleBlur}
                    errorExtraClass={" text-red-500"}
                />
            </div>
            <div className='mt-4'>
                <InputField

                    control={control}
                    register={register}
                    placeholder={"Enter Your Password"}
                    name={"password"}
                    type={"password"}
                    errors={errors}
                    handleBlur={handleBlur}
                    errorExtraClass={" text-red-500"}
                />
            </div>


            <div className='flex items-center gap-2 p-5 justify-between'>
                <div className=' flex flex-row'>
                    <input type="checkbox" className='h-[16px] w-[16px] accent-primaryBg ' />
                    <Paragraph className="">Remeber me</Paragraph>
                </div>

                <a className='text-yellow-300 font-bold' href="">Forgot Password</a>


            </div>
            <Button
                isLoading={isSubmitting}
                onClick={handleSubmit(onSubmit)}
                extraClass="mt-5">Login
            </Button>


        </div>
    )
}

export default Loginform