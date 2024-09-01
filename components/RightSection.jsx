/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import { BiBell, BiHeart, BiHomeAlt2, BiLogOutCircle, BiSearch, BiShoppingBag, BiUser } from "react-icons/bi";
import { motion } from "framer-motion";

const RightSection = () => {
  return (
    <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.4, delay: 0.6, ease: "easeInOut" }} className="h-full">
      <motion.div className="w-[80px] h-[80px] rounded-full bg-secondary flex items-center justify-center mb-8">
        <motion.img initial={{ opacity: 0, transform: 'translate3d(-200px, 60px, 160px)' }}
          animate={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
          transition={{ duration: 1.5, delay: 0.7, ease: "easeInOut" }} src="/assets/AMAZONV2.svg" alt="amazon" width={32} height={32} />
      </motion.div>
      {/**========= */}
      <div className="bg-white py-10 px-4 w-full h-[864px] rounded-[90px] shadow-sm shadow-white flex flex-col items-center justify-between">
        <div className="flex flex-col space-y-6">
          <div className="bg-black shadow-xl shadow-black/30 rounded-3xl p-[20px] flex items-center justify-center text-2xl text-white">
            <BiHomeAlt2 />
          </div>
          <div className="cursor-pointer rounded-3xl p-[20px] flex items-center justify-center text-2xl transition-all hover:bg-black hover:text-white hover:shadow-xl hover:shadow-black/30">
            <BiUser />
          </div>
          <div className="relative cursor-pointer rounded-3xl p-[20px] flex items-center justify-center text-2xl transition-all hover:bg-black hover:text-white hover:shadow-xl hover:shadow-black/30">
            <BiBell />
            <span className="absolute top-2 right-3 w-5 h-5 text-[12px] rounded-full bg-secondary flex items-center justify-center">1</span>
          </div>
          <div className="cursor-pointer rounded-3xl p-[20px] flex items-center justify-center text-2xl transition-all hover:bg-black hover:text-white hover:shadow-xl hover:shadow-black/30">
            <BiSearch />
          </div>
          <div className="cursor-pointer rounded-3xl p-[20px] flex items-center justify-center text-2xl transition-all hover:bg-black hover:text-white hover:shadow-xl hover:shadow-black/30">
            <BiShoppingBag />
          </div>
          <div className="cursor-pointer rounded-3xl p-[20px] flex items-center justify-center text-2xl transition-all hover:bg-black hover:text-white hover:shadow-xl hover:shadow-black/30">
            <BiHeart />
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="bg-black rounded-full w-12 h-12 flex items-center justify-center text-2xl text-white">
            <BiLogOutCircle className="rotate-180" />
          </div>
          <div>
            <img src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile" className="rounded-full object-cover h-12 w-12" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default RightSection