import React from 'react';
import { AiOutlineHeart } from "react-icons/ai";
import { FaShare } from "react-icons/fa";

const Schedule = () => {
    return (
        <div className="flex items-center my-8">
            <button className=' mr-12 px-6 py-2 bg-blue-800 text-white rounded-3xl'>See Class Schedules {'>'}</button>
            <div className="flex text-blue-800 font-bold items-center mr-8">
                <AiOutlineHeart/>
                <p className="ml-1">Save</p>
            </div>
            <div className="flex text-blue-800 font-bold items-center">
                <FaShare stroke='red'/>
                <p className="ml-1">Share</p>
            </div>
        </div>
    );
};

export default Schedule;