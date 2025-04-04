
import React from 'react'
import Card from '../../Dashboardcompoments/card';
import Totalsales from '../../assets/Images/Totalsales.png'
import Vector from '../../assets/Images/Vector.png'
import Group from '../../assets/Images/Group.png'
import user from '../../assets/Images/user.png'
import Selling from '../../assets/Images/Selling.png'
import lowstock from '../../assets/Images/lowstock.png'
import CriticalAlerts from '../../Dashboardcompoments/CriticalAlerts';
import CategorySales from '../../Dashboardcompoments/CategorySales';
import TopSellingProducts from '../../Dashboardcompoments/TopSellingProducts';

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className=" flex justify-between mb-5">
        <h1 className=" text-2xl">Sales Overview</h1>
        <input type="date" className="  w-50 bg-white p-2" />
      </div>
      <div className=''>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card image={Totalsales} color="#bfe6e1" value="$2050.00" title="Total Sales" />
          <Card image={Vector} color="#FAB325" title="Last Weekly Sales" value="$12050.00" />
          <Card image={Group} color="black" title="Last Monthly Sales" value="$12050.00" />
          <Card image={user} color="#EA4093" title="Active Register" value="25" />
          <Card image={Selling} color="#2978A7" title="Top Selling Products" value="05" />
          <Card image={lowstock} color="#FAB325" title="Low Stock" value="15" />
          {/* CriticalAlerts */}
          <div className=''>
            <CriticalAlerts />
          </div>
        </div>
      </div>
      <div className=' flex justify-between '>
        <div className=''>
           {/* Sales By Categories */}
        <h2 className="text-lg font-semibold mb-2">Sales By Categories</h2>
        <CategorySales />
        </div>
        <div>
          {/* Top Selling Products */}
        <h2 className="text-lg font-semibold mb-2">Top Selling Products</h2>
        <TopSellingProducts />
        </div>
      </div>

    </div>


  );
};

export default Dashboard;
