"use client";
import React, { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import Title from "./Title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../app/globals.css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { AiOutlineClose } from "react-icons/ai";
import { TrailerType } from "@/app/lib/type";

const Trailer = () => {
  const TrailerData: TrailerType[] = [
    {
      id: 1,
      name: "fujiwaka",
      idVideo: "mUTWsuVqh8A",
      urlImage: "/images/fujiwaka.jpg",
      title:
        '"Fate/Grand Order You’ve Lost Ritsuka Fujimaru" Episode 1 "...On the Reason for Sudden Drowsiness"',
    },
    {
      id: 2,
      name: "fujiwaka",
      idVideo: "RlEYG0lxyrM",
      urlImage: "/images/kenshin.jpg",
      title: "Rurouni Kenshin | MAIN TRAILER",
    },
    {
      id: 3,
      name: "Fate/strange Fake",
      idVideo: "NeDXVO0dLHc",
      urlImage: "/images/fsf.jpg",
      title: "Fate/strange Fake - TV ANIME SERIES CONFIRMED",
    },
    {
      id: 4,
      name: "aobuta",
      idVideo: "LZ09Alg3GcM",
      urlImage: "/images/aobuta.jpg",
      title:
        "Rascal Does Not Dream of a Sister Venturing Out | U.S. PREMIERE AT ANIME EXPO",
    },
    {
      id: 5,
      name: "Demon Slayer",
      idVideo: "rq1tllAUS1I",
      urlImage: "/images/dsky.jpg",
      title:
        "Demon Slayer: Kimetsu no Yaiba Hashira Training Arc | Anime Adaptation Official Trailer",
    },
  ];

  const breakpoints1 = {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
      navigation: false,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 20,
      navigation: false,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 25,
      navigation: true,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 30,
      navigation: true,
    },
  };
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoPlay, setVideoPlay] = useState("");

  const handlePlay = (idVideo: string) => {
    setVideoPlay(idVideo);
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };
  return (
    <div className="py-4">
      <Title title="TRAILERS" />
      <div className="relative ">
        <Swiper
          breakpoints={breakpoints1}
          spaceBetween={20}
          autoplay={{ delay: 6500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={4}
          className={`mySwiper h-[270px] sm:h-[300px] lg:h-[340px] ${
            isPlaying
              ? "invisible h-[260px] sm:h-[330px] md:h-[460px] lg:h-[450px]  xl:h-[560px]"
              : ""
          }`}
        >
          {TrailerData.map((item) => (
            <SwiperSlide key={item.id} className={`  flex flex-col gap-y-3 `}>
              <div
                className="h-[50%] w-full bg-no-repeat bg-center bg-cover cursor-pointer relative group "
                style={{ backgroundImage: `url(${item.urlImage})` }}
                onClick={() => handlePlay(item.idVideo)}
              >
                <span
                  style={{ backgroundImage: `url(/images/grid.png)` }}
                  className="absolute z-10 left-0 top-0 w-full h-full bg-repeat bg-opacity-20 bg-[rgba(0,0,0,0.2)] flex justify-center items-center
                  "
                >
                  <div
                    style={{ backgroundImage: `url(/images/play.png)` }}
                    className="bg-no-repeat bg-center bg-cover w-[50px]  h-[50px] xl:opacity-0 group-hover:opacity-100 transition-opacity "
                  ></div>
                </span>
              </div>

              <div className={`h-[50%] flex  w-full gap-y-2 `}>
                <span className=" text-sm lg:text-lg font-bold text-[#444444]">
                  {item.title}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {isPlaying && (
          <>
            <AiOutlineClose
              size={48}
              className="absolute cursor-pointer right-0 -top-14"
              onClick={handlePause}
            />
            <VideoPlayer videoId={videoPlay} />
          </>
        )}
      </div>
    </div>
  );
};

export default Trailer;
