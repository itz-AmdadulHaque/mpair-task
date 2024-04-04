import React from "react";
import Image from "next/image";
import { CgMenuLeft } from "react-icons/cg";
const Navbar = () => {
  return (
    <nav className="flex items-center gap-x-[180px]">
      <div className="text-3xl text-blue-950">
        <CgMenuLeft />
      </div>
      <Image
        src="/logo.png"
        width={100}
        height={40}
        alt="logo"
      />
    </nav>
  );
};

export default Navbar;
