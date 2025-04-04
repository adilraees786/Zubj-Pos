

import React from 'react';

const TopSellingProducts = () => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md w-full h-full">
            <input type="date" className="w-full border border-gray-300 rounded px-2 py-1 mb-3" />
            <table className="w-full text-left">
            {/* TableHead */}
                <thead>
                    <tr className="bg-gray-600 text-white">
                        <th className="py-2 px-2">Product</th>
                        <th className="py-2 px-2">Units Sold</th>
                        <th className="py-2 px-2">Total Sales</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="">
                        <td className="py-2 px-2">Danish Mustard</td>
                        <td className="py-2 px-2">625</td>
                        <td className="py-2 px-2">$500.00</td>
                    </tr>
                    <tr className="">
                        <td className="py-2 px-2">Dentonic Powder</td>
                        <td className="py-2 px-2">545</td>
                        <td className="py-2 px-2">$1200.30</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-2">Basil Seeds 50G</td>
                        <td className="py-2 px-2">428</td>
                        <td className="py-2 px-2">$500.00</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-2">Green Cardamon</td>
                        <td className="py-2 px-2">359</td>
                        <td className="py-2 px-2">$22.00</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-2">Lime Dishwas</td>
                        <td className="py-2 px-2">286</td>
                        <td className="py-2 px-2">$350.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TopSellingProducts;
