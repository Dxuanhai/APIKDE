"use client";

import React, { useState, useEffect, useCallback } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

interface SlideProps {
  url: string;
}

function Slide() {
  const slides: SlideProps[] = [
    {
      url: "/images/ptJjk2.jpg",
    },
    {
      url: "/images/hero2.jpg",
    },
    {
      url: "/images/spyxfamily.jpg",
    },
    {
      url: "/images/hero13.jpg",
    },
    {
      url: "/images/bluelock.jpg",
    },
    {
      url: "/images/hero15.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevSlide = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, nextSlide]);

  return (
    <div className="max-w-[1400px]  h-[350px] md:h-[460px] xl:h-[760px] w-full m-auto py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 relative"
      >
        <div
          className="
          absolute
          top-3
          right-5
          flex
          gap-x-2
          "
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`w-[15px] h-[15px] md:w-[20px] md:h-[20px] rounded-full border cursor-pointer  ${
                index === currentIndex ? "bg-white" : ""
              }`}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
      </div>
      {/* Left Arrow */}
      <div className="xl:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="xl:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
}

export default Slide;
