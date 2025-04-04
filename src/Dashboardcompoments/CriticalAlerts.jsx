import React from 'react'


const CriticalAlerts = () => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md  ">
            <div className="flex items-center justify-between ">

                <p className="font-semibold">Critical Alerts</p>
                <p className=' text-2xl'>04</p>
            </div>
            <div className=" ">
                <div className=' flex justify-between'>
                    <p className=" text-gray-600">Danish Mustard </p>
                    -< p className="text-red-500">Out of Stock</p>
                </div>
                <div className=' flex justify-between'>
                    <p className="text-gray-600">Dentonic Powder </p>
                    - <p className="text-red-500">Out of Stock</p>
                </div>
            </div>
        </div>
    )
}

export default CriticalAlerts
