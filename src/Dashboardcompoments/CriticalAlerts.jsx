import React from 'react'

const CriticalAlerts = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
    <div className="flex items-center text-red-500 gap-2">
      <FaExclamationTriangle className="text-3xl" />
      <p className="font-semibold">Critical Alerts</p>
    </div>
    <p className="mt-2 text-gray-600">Danish Mustard - <span className="text-red-500">Out of Stock</span></p>
    <p className="text-gray-600">Dentonic Powder - <span className="text-red-500">Out of Stock</span></p>
  </div>
  )
}

export default CriticalAlerts