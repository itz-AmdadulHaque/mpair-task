"use client";
import Image from "next/image";
import CardSlider from "./components/CardSlider";
import CheckinForm from "./components/CheckinForm";
import Hotels from "./components/Hotels";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
export default function Home() {
  const backgroundStyle = {
    backgroundImage: 'url("/background.png")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "right top",
  };
  return (
    <section className="bg-slate-300 text-blue-950 h-screen flex justify-center items-center">
      <div
        className="w-4/6 h-4/5 p-8 bg-white rounded-3xl relative overflow-hidden"
        style={backgroundStyle}
      >
        <Navbar />
        <div className="mt-10">
          <Hotels userClass={"ml-10"} />
          <CheckinForm />
        </div>

        <CardSlider headings={"Villa Of Summer Firsaltari"} />

        {/* world rotating */}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 15,
            repeat: Infinity, // Set loop to Infinity for continuous rotation
            ease: "linear",
          }}
          className="absolute z-10  top-28 right-16 border-[1px] border-blue-700 rounded-full"
        >
          <Image src="/world.png" width={300} height={300} alt="world image" />
        </motion.div>

        {/* pop up text */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.2,
            delay: 0.6,
          }}
          className="absolute z-20 top-32 right-56 bg-white px-6 py-1 w-max rounded-md text-xs text-center shadow-lg"
        >
          <p>Discover the</p>
          <p className="font-bold text-blue-600">World</p>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.2,
            delay: 0.8,
          }}
          className="absolute z-20 bottom-28 right-10 bg-white px-6 py-1 w-max rounded-md text-xs text-center shadow-lg"
        >
          <p>Time To</p>
          <p className="font-bold text-blue-600">Vacation</p>
        </motion.div>

        {/* circle arond world */}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 30,
            repeat: Infinity, // Set loop to Infinity for continuous rotation
            ease: "linear",
          }}
          className="z-10 absolute top-[103px] right-[54px] w-[320px] h-[320px] rounded-full"
        >
          <div className="h-full relative">
            <div className="absolute h-full w-full circle-half"></div>
            <div className=" absolute h-full w-full rotate-[155deg] circle-half"></div>
          </div>
        </motion.div>

        {/* floating cloud */}
        <motion.div
          animate={{ x: [0, 10, 0], y: [0, 10, 0], rotate: [0, 10, -5, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity, // Set loop to Infinity for continuous rotation
            ease: "easeInOut",
          }}
          className="absolute top-0 right-[200px] w-max"
        >
          <Image src="/cloud.png" width={180} height={100} alt="world image" />
        </motion.div>

        <motion.div
          animate={{ x: [0, -10, 0], y: [0, 10, 0], rotate: [0, -10, 5, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity, // Set loop to Infinity for continuous rotation
            ease: "easeInOut",
          }}
          className="absolute top-0 right-10 w-max"
        >
          <Image src="/cloud.png" width={180} height={100} alt="world image" />
        </motion.div>
      </div>
    </section>
  );
}
