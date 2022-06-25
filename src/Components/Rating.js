import React from "react";
import { AiFillStar } from "react-icons/ai";

const Rating = () => {
  return (
    <div>
      <div className="flex justify-content-center align-center my-4">
        <div className="flex text-2xl text-orange-300">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <div className="ml-4">
          <p className="text-sm text-gray-500">
            467 total reviews for this teacher
          </p>
        </div>
      </div>
      <div className="flex justify-content-center align-center my-4">
        <div className="flex text-2xl text-orange-300">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <div className="ml-4">
          <p className="text-sm text-gray-500">
            5 reviews for this class
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rating;
