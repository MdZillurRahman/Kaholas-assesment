import React, { useEffect, useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Text from "./Text";

const Section = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    fetch("./images.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setImages(data)
      });
  }, []);


  return (
    <div className="mx-8">
      <div>
        <p className="text-4xl font-bold">
          Summer Art Camp! 5 days of Artists and Painting Monet,
        </p>
        <p className="text-4xl font-bold">Van Gogh, Matisse, & More</p>
        <p className="text-lg flex justify-items-center items-center text-gray-400 my-4">
          Multi-Day Course
          <AiOutlineQuestionCircle className="ml-3" />
        </p>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <Text></Text>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-red-500 rounded-tl-lg">
            <p>Image-1</p>
          </div>
          <div className="grid gap-2">
            <div className="bg-red-300 rounded-tr-lg">
              <p>Image-2</p>
            </div>
            <div className="bg-red-800">
              <p>Image-3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
