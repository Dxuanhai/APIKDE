import React from "react";

interface titleProps {
  title: string;
}

const Title: React.FC<titleProps> = ({ title }) => {

  
  return (
    <div className="h-[150px] text-[#333]">
      <div className="h-[100px] flex justify-center items-center">
        <div className=" w-full h-[10px] md:h-[15px] xl:h[20px] "style={{backgroundImage: `url(/images/dotted.png) ` }} ></div>
        <span className="text-center px-4 font-bold text-[1rem] md:text-[1.4rem] xl:text-[1.65rem] absolute bg-white tracking-wide ">
          {title}
        </span>
      </div>
      <div className="flex justify-center items-start">
        <span className="w-[40px] h-[2px] bg-[#333]"></span>
      </div>
    </div>
  )
};

export default Title;
