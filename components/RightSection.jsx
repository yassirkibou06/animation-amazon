import Image from "next/image"
import { BiBell, BiHeart, BiHomeAlt2, BiLogOutCircle, BiSearch, BiShoppingBag, BiUser } from "react-icons/bi";
import { motion } from "framer-motion";

const RightSection = () => {
  return (
    <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.4, delay: 0.6, ease: "easeInOut" }} className="h-full absolute lg:static bottom-0">
      <motion.div className="hidden lg:flex w-[80px] h-[80px] rounded-full bg-secondary items-center justify-center mb-8">
        <motion.img initial={{ opacity: 0, transform: 'translate3d(-200px, 60px, 160px)' }} animate={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }} transition={{ duration: 1.5, delay: 0.7, ease: "easeInOut" }} src="/assets/AMAZONV2.svg" alt="amazon" width={32} height={32} />
      </motion.div>
      {/**========== */}
      <div className="fixed left-0 bottom-0 lg:relative bg-white py-2 px-4 lg:py-10 lg:px-4 w-full h-fit lg:h-[864px] rounded-tl-[24px] rounded-tr-[24px] lg:rounded-[90px] shadow-md lg:shadow-sm shadow-white flex flex-row lg:flex-col items-center justify-between">
        <div className="flex flex-row space-x-6 lg:space-x-0 lg:flex-col lg:space-y-6">
          <div className="bg-black shadow-xl shadow-black/30 rounded-3xl p-[20px] flex items-center justify-center text-lg lg:text-2xl text-white">
            <BiHomeAlt2 />
          </div>
          <div className="cursor-pointer rounded-3xl p-[20px] flex items-center justify-center text-lg lg:text-2xl transition-all hover:bg-black hover:text-white hover:shadow-xl hover:shadow-black/30">
            <BiUser />
          </div>
          <div className="relative cursor-pointer rounded-3xl p-[20px] flex items-center justify-center text-lg lg:text-2xl transition-all hover:bg-black hover:text-white hover:shadow-xl hover:shadow-black/30">
            <BiBell />
            <span className="absolute top-2 right-3 w-5 h-5 text-[12px] rounded-full bg-secondary flex items-center justify-center">1</span>
          </div>
          <div className="cursor-pointer rounded-3xl p-[20px] flex items-center justify-center text-lg lg:text-2xl transition-all hover:bg-black hover:text-white hover:shadow-xl hover:shadow-black/30">
            <BiSearch />
          </div>
          <div className="cursor-pointer rounded-3xl p-[20px] flex items-center justify-center text-lg lg:text-2xl transition-all hover:bg-black hover:text-white hover:shadow-xl hover:shadow-black/30">
            <BiShoppingBag />
          </div>
          <div className="hidden cursor-pointer rounded-3xl p-[20px] lg:flex items-center justify-center text-lg lg:text-2xl transition-all hover:bg-black hover:text-white hover:shadow-xl hover:shadow-black/30">
            <BiHeart />
          </div>
        </div>
        <div className="hidden lg:flex flex-col space-y-2">
          <div className="bg-black rounded-full w-12 h-12 flex items-center justify-center text-lg lg:text-2xl text-white">
            <BiLogOutCircle className="rotate-180" />
          </div>
          <div>
            <Image width={100} height={100} src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile" className="rounded-full object-cover h-12 w-12" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default RightSection;