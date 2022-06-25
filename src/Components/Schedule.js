import React from 'react';
import { AiOutlineHeart } from "react-icons/ai";
import { FaShare } from "react-icons/fa";

const Schedule = () => {
    return (
        <div>
            <button className='my-8 px-6 py-2 bg-blue-800 text-white rounded-3xl'>See Class Schedules {'>'}</button>
            <div className="flex align-center text-blue-800 font-bold">
                <AiOutlineHeart/>
                <p className="my-[-4]">Save</p>
            </div>
            <div className="flex align-center text-blue-800 font-bold">
                <FaShare className='text-black outline-red-600'/>
                <p className="my-[-4]">Share</p>
            </div>
        </div>
    );
};

export default Schedule;