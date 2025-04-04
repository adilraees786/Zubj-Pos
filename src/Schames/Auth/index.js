import * as Yup from 'yup';

export const loginSchema = Yup.object({
    email: Yup.string()
        .trim()
        .email('Invalid Email Address')
        .required('Email is required')
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid Email'),
    password: Yup.string().required('Password is required'),
});

