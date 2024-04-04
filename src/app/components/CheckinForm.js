"use client";

import React, { useRef, useState } from "react";
import { MdOutlineCalendarToday } from "react-icons/md";
import { RiGroupLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { motion } from "framer-motion";

const CheckinForm = () => {
  const [checkinDate, setCheckinDate] = useState("");
  const checkinRef = useRef(null);

  const [checkoutDate, setCheckoutDate] = useState("");
  const checkoutRef = useRef(null);

  const [searchClick, setSearchClick] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0"); // Pad day with leading zero
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Pad month with leading zero
    const year = date.getFullYear().toString().slice(-2); // Get last 2 digits of year
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="flex w-max relative rounded-full border-[1px] border-stone-200 overflow-hidden shadow-xl">
      {/* location */}
      <div
        className="flex items-center border-r-[2px]"
        onClick={() => setSearchClick(true)}
      >
        <div className="p-3 text-xl text-white bg-blue-900 rounded-full">
          <IoLocationOutline />
        </div>
        <p className="text-xs text-slate-400 px-2 pr-8 ">
          Nereye Gidiyorsunuz?
        </p>
      </div>

      {/* input slider */}
      <motion.div
        className="absolute"
        initial={{ x: -400 }}
        animate={{ x: searchClick ? 0 : -400 }}
        transition={{ duration: 1.5 }}
      >
        <div className="text-white relative">
          <div className="absolute top-[12px] left-[15px] text-2xl">
            <IoSearch />
          </div>
        </div>
        <input
          className="bg-blue-950 text-xs w-[210px] h-12 text-slate-400 px-2 pl-12"
          type="text"
          placeholder="Bir sehir ara..."
        />
      </motion.div>
      {/* checkin */}
      <div className="flex flex-col gap-y-[2px] items-center border-r-[1px] w-max px-4">
        <p className="text-[10px] text-slate-400">Check-in</p>
        <div
          className="flex items-center gap-x-2  cursor-pointer text-xs"
          onClick={() => checkinRef.current.showPicker()}
        >
          <MdOutlineCalendarToday />
          {!checkinDate && <p className=" px-1 text-slate-400">../../..</p>}
          {checkinDate && <p className="text-slate-400">{checkinDate}</p>}
        </div>
        <input
          className="hidden"
          type="date"
          ref={checkinRef}
          onChange={(e) => setCheckinDate(formatDate(e.target.value))}
          value={checkinDate}
        />
      </div>
      {/* checkout */}
      <div className="flex flex-col gap-y-[2px] items-center border-r-[1px] w-max px-4">
        <p className="text-[10px] text-slate-400">Check-out</p>
        <div
          className="flex items-center gap-x-2 cursor-pointer text-xs"
          onClick={() => checkoutRef.current.showPicker()}
        >
          {!checkoutDate && <p className="text-slate-400 px-1">../../..</p>}
          {checkoutDate && <p className="text-slate-400">{checkoutDate}</p>}
        </div>
        <input
          className="hidden"
          type="date"
          ref={checkoutRef}
          onChange={(e) => setCheckoutDate(formatDate(e.target.value))}
          value={checkoutDate}
        />
      </div>
      {/*  name */}
      <div className="flex items-center gap-1 px-2 pr-5 text-xs ">
        <RiGroupLine />
        <p className="text-slate-400">Misafir ekliean</p>
      </div>
    </div>
  );
};

export default CheckinForm;
