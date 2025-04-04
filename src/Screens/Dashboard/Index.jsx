
import React from 'react'
import Card from '../../Dashboardcompoments/card';
import Totalsales from '../../assets/Images/Totalsales.png'
import Vector from '../../assets/Images/Vector.png'
import Group from '../../assets/Images/Group.png'



const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
        <div className=" flex justify-between mb-5">
        <h1 className=" text-2xl">Sales Overview</h1>
        <input type="date" className="  w-50 bg-white p-2" />
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
     <Card  image={Totalsales} color="#bfe6e1" value="$2050.00" title="Total Sales" />
     <Card  image={Vector} color="#FAB325" title="Last Weekly Sales" value="$12050.00"/>
     <Card image={Group}   color="black" title="Last Monthly Sales" value="$12050.00"/>
     <Card  image={Vector} title="Active Register"  value="25"/>
     <Card />
     <Card />
    

       
        
      </div>
      

    </div>
  
  
);
};

export default Dashboard;
