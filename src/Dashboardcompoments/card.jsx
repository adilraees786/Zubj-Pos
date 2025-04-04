
import React from "react";

const Card = ({ image, title, value, color }) => (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-4 ">
        <div className="w-full">
            <p className="text-xl font-semibold">{value}</p>
            <p className="text-gray-600 ">{title}</p>

        </div>
    
        <div className="  w-[120px] h-[50px] ml-10 mb-10 rounded-full"  style={{ backgroundColor: color }}>
            <img src={image} alt={title} className="h-full w-full object-cover rounded-full " />
        </div>
    </div>
);

export default Card;

