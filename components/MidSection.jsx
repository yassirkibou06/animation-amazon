import { BiRightArrowAlt, BiShoppingBag, BiBed, BiGame, BiBadge, BiBookBookmark, BiLogoAmazon, BiCube, BiHeart, BiStar, BiBookmark } from "react-icons/bi";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const MidSection = () => {
    const cards = [
        {
            id: 1,
            title: "Furniture",
            icon: <BiBed />
        },
        {
            id: 2,
            title: "Gaming",
            icon: <BiGame />
        },
        {
            id: 3,
            title: "Beauty",
            icon: <BiBadge className="text-gray-300" />
        },
        {
            id: 4,
            title: "Books",
            icon: <BiBookBookmark />
        },
        {
            id: 5,
            title: "Amazon",
            icon: <BiLogoAmazon className="text-gray-300" />
        },
        {
            id: 6,
            title: "Pharmacy",
            icon: <BiCube />
        },
        {
            id: 7,
            title: "Toys",
            icon: <BiBadge />
        },
        {
            id: 8,
            title: "Books",
            icon: <BiBookBookmark />
        }
    ];

    return (
        <motion.div className="relative mt-14 lg:mt-0 w-full h-screen lg:h-full rounded-[48px] lg:rounded-[90px] bg-black">
            {/* Embed video as background */}
            <video className="absolute top-0 left-0 w-full h-full object-cover rounded-[48px] lg:rounded-[90px]" src="/assets/v1.mp4" alt="apple-video" autoPlay muted loop playsInline ></video>

            {/* Foreground Elements */}
            <div className="z-20 absolute top-1/2 -right-5 transform -translate-y-1/2 rounded-full w-20 h-20 bg-secondary flex justify-center items-center">
                <BiRightArrowAlt size={23} />
            </div>
            <div className="z-0 absolute top-1/2 -right-1 transform -translate-y-1/2 rounded-bl-[110px] rounded-tl-[110px] w-[75px] h-[120px] bg-primary"></div>
            <div className="z-0 absolute top-[250px] lg:top-[352px] right-0 rounded-br-[120px] w-[40px] h-[80px] bg-transparent shadow-card-tp"></div>
            <div className="z-0 absolute top-[390px] lg:top-[544px] right-0 rounded-tr-[120px] w-[40px] h-[80px] bg-transparent shadow-card-bt"></div>
            {/**Content */}
            <div className="absolute top-[48%] lg:top-[55%] left-4 lg:left-8 transform -translate-y-1/2 w-[500px]">
                <h2 className="font-extrabold text-white text-2xl lg:text-3xl tracking-wider mb-2">ARISEN SOUND</h2>
                <p className="text-gray-400 w-[250px] lg:w-full mb-4">
                    HomePod is a powerhouse of a speaker. Apple‑engineered audio technology and
                    advanced software deliver high‑fidelity sound throughout the room. It intelligently
                    adapts to whatever it’s playing.
                </p>
                <Button className="bg-secondary rounded-[56px] text-black font-light  text-base px-8 py-4">ORDER NOW<span className="pl-2"><BiShoppingBag /></span></Button>
            </div>
            {/**Card ======= */}
            <motion.div className="hidden lg:block z-10 absolute top-[657px] -left-1 rounded-[90px] w-[554px] h-[320px] bg-primary p-4">
                <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.4, delay: 0.6, ease: "easeInOut" }}
                    className="rounded-[90px] w-full h-full bg-secondary px-8 py-16">
                    <h2 className="font-medium mb-4">Explore Categories</h2>
                    <div className="grid gap-4 grid-cols-4">
                        {cards.map((item, index) => (
                            <div key={index} className={`px-2 py-1 flex border rounded-3xl border-black items-center justify-center space-x-2 ${item.title === "Beauty" || item.title === "Amazon" ? "bg-black shadow-md shadow-black/40" : ""}`}>
                                {item.icon}
                                <p className={`${item.title === "Beauty" || item.title === "Amazon" ? "text-gray-300" : "text-black"} font-medium text-sm`}>{item.title}</p>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-4 gap-1 mt-8 px-32">
                        <span className="w-full h-1 rounded-xl bg-black/20"></span>
                        <span className="w-full h-1 rounded-xl bg-black/20"></span>
                        <span className="w-full h-1 rounded-xl bg-black"></span>
                        <span className="w-full h-1 rounded-xl bg-black/20"></span>
                    </div>
                </motion.div>
            </motion.div>
            {/**======= */}
            <div className="hidden lg:block z-0 absolute top-[577px] left-0 rounded-bl-[90px] w-[88px] h-[80px] bg-transparent shadow-card-lb"></div>
            <div className="hidden lg:block z-0 absolute top-[643px] -left-2 w-[40px] h-[100px] bg-primary shadow-overflow"></div>
            <div className="hidden lg:block z-0 absolute bottom-0 left-[550px] rounded-bl-[90px] w-[88px] h-[90px] bg-transparent shadow-card-lb"></div>
            <div className="hidden lg:block z-0 absolute bottom-0 left-[460px] w-[100px] h-[42px] bg-primary shadow-overflow"></div>
            {/**======= */}
            <div className="absolute bottom-10 right-8 lg:right-4 1xl:right-8 flex items-center text-gray-400 bg-accent py-4 px-8 rounded-[90px]">
                <div className="flex items-center flex-col rounded-sm border-r border-r-gray-300 px-6">
                    <BiHeart size={27} />
                    <p className="font-light text-sm">14K</p>
                </div>
                <div className="flex items-center flex-col rounded-sm border-r border-r-gray-300 px-6">
                    <BiStar size={27} />
                    <p className="font-light text-sm">2K</p>
                </div>
                <div className="flex items-center flex-col px-6">
                    <BiBookmark size={27} />
                    <p className="font-light text-sm">4K</p>
                </div>
            </div>
        </motion.div >
    )
}

export default MidSection;
