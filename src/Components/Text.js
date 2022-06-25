import React from "react";
import Rating from "./Rating";
import Schedule from "./Schedule";

const Text = ({ images }) => {
  return (
    <div>
      <p>
        In this 5 day class we will explore artists Monet, Matisse, Van Gogh,
        among others and then recreate paintings using crayon and watercolor.
        Students will have fun learning about the artists & creating their own
        art inspired by their work.
      </p>
      <div className="flex items-center ">
        <img className="w-8 mr-4 my-4" src={images.profile} alt="" />
        <p>Kimberly R Moseler</p>
      </div>
      <Rating></Rating>
      <p className="font-semibold">Completed by 21 learners</p>
      <Schedule></Schedule>
      
    </div>
  );
};

export default Text;
