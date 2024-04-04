"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hotels = ({userClass = ""}) => {
  return (
    <section className={`relative min-h-10 rounded-t-2xl overflow-hidden ${userClass} `}>
      <motion.div
        initial={{ x: -400 }}
        animate={{ x: 0 }}
        transition= {{ delay: 1.6, duration: 1.5 }}
        className="flex items-end py-2 px-2 pl-[152px] rounded-t-2xl bg-slate-300 w-max"
      >
        <Image src="/hotels.png" width={25} height={40} alt="logo" />
      </motion.div>

      <motion.div
        initial={{ x: -400 }}
        animate={{ x: 0 }}
        transition= {{ delay: 1.2, duration: 1.5 }}
        className="absolute top-0 flex items-end py-2 px-4 pl-[100px] rounded-t-2xl bg-slate-200"
      >
        <Image src="/hotel.png" width={25} height={40} alt="logo" />
      </motion.div>

      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition= {{ delay: 1, duration: 1.5 }}
        className="absolute top-0 flex items-end gap-x-2 p-2 rounded-t-2xl bg-slate-100"
      >
        <Image src="/villa.png" width={25} height={40} alt="logo" />
        <p className="text-xs">Villalar</p>
      </motion.div>
    </section>
  );
};

export default Hotels;
