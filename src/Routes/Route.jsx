import React, { lazy } from 'react'






const Login = lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import("../../src/Auth/Login")), 1300)
    });
});
const Dashboard = lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import("../../src/Screens/Dashboard/Index")), 1300)
    });
});
const Sidebar = lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import("../../src/Sidebar/Sidebar")), 1300)
    });
});
const Sales = lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import("../../src/Screens/Sales/Index")), 1300)
    });
});

 export const routelist=[

 
    {
        path: '/dashboard',
        element: <Dashboard />
    },
    {
        path: '/sidebar',
        element: <Sidebar />
    },
    {
        path: '/sales',
        element: <Sales />
    },
   
]
