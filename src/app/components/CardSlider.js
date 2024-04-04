"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import hotelInfo from "@/utils/hotelInfo";
import Image from "next/image";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const CardSlider = ({ headings }) => {
  const typerText = headings.split("");
  const [centerImage, setCenterImag] = useState(1);

  return (
    <div className="mt-8 ml-6">
      <p className="pl-2 mb-2">
        {typerText.map((char, index) => {
          return (
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.2 + index / 10 }}
              key={index}
              className={`inline-block text-xl font-bold ${
                char === " " ? "ml-1" : "0"
              }`}
            >
              {char}
            </motion.span>
          );
        })}
      </p>

      <div className="absolute z-30">
        <Swiper
          slidesPerView={3}
          navigation={{
            nextEl: ".next-button-click",
            prevEl: ".pre-button-click",
            clickable: true,
          }}
          modules={[Navigation]}
          className="mySwiper w-[500px] h-[170]"
        >
          {hotelInfo.map((hotel, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  className={`my-auto rounded-md overflow-hidden relative w-[170px] h-[190px]   ${
                    index === centerImage ? "scale-100" : "scale-90"
                  }`}
                  style={{ transition: ".5s" }}
                >
                  <Image
                    src={hotel.image}
                    alt="hotel image"
                    fill={true}
                    loading = 'eager'
                    className="object-cover"
                  />

                  <div className="absolute bottom-0 text-xs flex overflow-hidden">
                    <div className="text-yellow-300 bg-slate-400 w-[70px] flex items-center justify-center">
                      <div>
                        <p>%{hotel.discount} </p>
                        <p>Indirim</p>
                      </div>
                    </div>

                    <div className="text-[10px] px-1 text-white backdrop-blur-sm">
                      <h1 className="py-1">{hotel.name}</h1>
                      <p className="text-[7px] leading-none text-slate-300">
                        {hotel.descripteion.substring(0, 30)}...
                      </p>
                      <h1 className="py-1">
                        {hotel.price} ₺{" "}
                        <span className="text-slate-300">/Gecelic</span>
                      </h1>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          <div className=" top-20 absolute z-10 w-full flex justify-between">
            <button
              className="pre-button-click bg-slate-400 text-white p-[2px] rounded-sm"
              onClick={() =>
                setCenterImag((pre) => {
                  return pre > 0 ? pre - 1 : pre;
                })
              }
            >
              <IoIosArrowBack />
            </button>
            <button
              className="next-button-click bg-slate-400 text-white p-[2px] rounded-sm"
              onClick={() =>
                setCenterImag((pre) => {
                  return pre < hotelInfo.length ? pre + 1 : pre;
                })
              }
            >
              <IoIosArrowForward />
            </button>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default CardSlider;
