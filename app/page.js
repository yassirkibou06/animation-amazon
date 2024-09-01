/* eslint-disable @next/next/no-img-element */
"use client"
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { IoOptionsOutline } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import LeftSection from "@/components/LeftSection";
import MidSection from "@/components/MidSection";
import RightSection from "@/components/RightSection";

export default function Home() {
  return (
    <main className="bg-primary h-fit p-6 grid lg:grid-cols-main-lg lg:gap-8 1xl:gap-12 1xl:grid-cols-main-xl overflow-hidden">
      {/**left section */}
      <motion.div>
        {/* input of seacrh bar */}
        <motion.form animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -20 }} transition={{ duration: 1.3, delay: 0.6, ease: "easeInOut" }} >
          <div className="relative">
            <BiSearch className="cursor-pointer absolute left-1 top-[1px] h-[37px] w-[37px] bg-secondary text-white rounded-full p-[10px]" />
            <Input placeholder="Search any item..." className="bg-white pl-14 h-10 placeholder:text-gray-500 font-medium shadow-sm shadow-gray-200 border-none rounded-3xl" />
            <IoOptionsOutline className="text-gray-500 text-xl absolute right-6 top-[10px] cursor-pointer" />
          </div>
        </motion.form>
        {/* Left-section====== */}
        <LeftSection />
      </motion.div>
      {/**middle section====== */}
      <MidSection />
      {/**right section======= */}
      <RightSection />
    </main>
  );
}
