import React from 'react';
import { AiOutlineHeart } from "react-icons/ai";

const Schedule = () => {
    return (
        <div className="flex items-center mt-8 mb-2">
            <button className=' mr-12 px-6 py-2 bg-blue-800 text-white rounded-3xl'>See Class Schedules {'>'}</button>
            <div className="flex text-blue-800 items-center mr-8">
                <AiOutlineHeart className='stroke-1'/>
                <p className="ml-1 font-bold">Save</p>
            </div>
            <div className="flex text-blue-800 font-bold items-center">
                <img className="w-4 h-4 mt-1" src="https://i.ibb.co/cX9FFx1/arrow-share-icon-vector-22894538.png" alt="" />
                <p className="ml-1">Share</p>
            </div>
        </div>
    );
};

export default Schedule;