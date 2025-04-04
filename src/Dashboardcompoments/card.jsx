
import React from "react";

const Card = ({ image, title, value, color }) => (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-4 ">
        <div>
            <p className="text-xl font-semibold">{value}</p>
            <p className="text-gray-600">{title}</p>

        </div>
        
        <div className="h-10  w-10  ml-20 mb-10 rounded-full"  style={{ backgroundColor: color }}>
            <img src={image} alt={title} className="h-full w-full object-cover " />
        </div>
    </div>
);

export default Card;
