/* eslint-disable @next/next/no-img-element */
"use client"
import { motion } from "framer-motion";
import { BiSolidBarChartAlt2, BiDotsVerticalRounded, BiShoppingBag, BiSolidSpreadsheet } from "react-icons/bi";


const LeftSection = props => {
    const data = [
        {
            id: 1,
            img: "https://images.unsplash.com/photo-1548949974-5a40c9a4de55?q=80&w=1413&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Homepod",
            price: "$30.00",
        },
        {
            id: 2,
            img: "https://images.unsplash.com/photo-1521499892833-773a6c6fd0b8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Camera",
            price: "$600",
        }
    ];

    const dataTwo = [
        {
            id: 1,
            img: "https://th.bing.com/th/id/OIP.YK9woSy8AjQfoDYqMB5jWQHaEK?rs=1&pid=ImgDetMain",
            title: "Asus Zenbook 14",
        },
        {
            id: 2,
            img: "https://th.bing.com/th/id/OIP.pGa2uGNan06L6IVg6ZX3jAHaFj?w=245&h=184&c=7&r=0&o=5&pid=1.7",
            title: "Iphone 14 Pro Max Case",
        }
    ]

    return (
        <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1.3, x: 0 }} transition={{ duration: 1, ease: "easeInOut" }}>
        {/* cards top picks */}
            <div className="bg-white rounded-[56px] mt-6 py-12 px-6">
                <div className="flex items-center space-x-2">
                    <BiSolidBarChartAlt2 className="text-secondary text-2xl" />
                    <h2 className="font-medium">Top picks</h2>
                </div>
                {/**cards */}
                {data.map((item, index) => (
                    <div key={index} className="mt-4 relative">
                        <div className="absolute top-0 left-0 w-full h-full bg-black/30 rounded-[32px]"></div>
                        <img src={item.img} alt="apple" className="rounded-[32px] object-cover h-[220px]" />
                        <div className="absolute bottom-2 flex justify-between items-center w-full px-4">
                            <div className="text-white">
                                <h3>{item.title}</h3>
                                <p className="text-gray-300">{item.price}</p>
                            </div>
                            <BiShoppingBag className="cursor-pointer h-9 w-9 bg-secondary rounded-full p-[10px]" />
                        </div>
                    </div>
                ))}
                <div className="grid grid-cols-4 gap-1 mt-6 px-10">
                    <span className="w-full h-1 rounded-xl bg-gray-200"></span>
                    <span className="w-full h-1 rounded-xl bg-gray-200"></span>
                    <span className="w-full h-1 rounded-xl bg-secondary"></span>
                    <span className="w-full h-1 rounded-xl bg-gray-200"></span>
                </div>
            </div>
            {/* last orders */}
            <div className="bg-white rounded-[56px] mt-4 py-12 px-6">
                <div className="flex items-center space-x-2">
                    <BiSolidSpreadsheet className="text-secondary text-2xl" />
                    <h2 className="font-medium">Last Orders</h2>
                </div>
                {/**cards */}
                {dataTwo.map((item, index) => (
                    <div key={index} className="relative mt-4 flex space-x-2 items-center p-1 bg-gray-100/50 rounded-[32px]">
                        <div className="relative">
                            <div className="absolute left-0 top-0 w-full h-full bg-black/30 rounded-full"></div>
                            <img src={item.img} alt={item.title} className="rounded-full object-cover h-10 w-10" />
                        </div>
                        <div className="flex justify-between items-center w-[150px]">
                            <h3 className="text-sm font-medium">{item.title}</h3>
                            <BiDotsVerticalRounded className="absolute right-2 cursor-pointer h-9 w-9 rounded-full p-[10px]" />
                        </div>
                    </div>
                ))}
                <div className="grid grid-cols-4 gap-1 mt-6 px-10">
                    <span className="w-full h-1 rounded-xl bg-gray-200"></span>
                    <span className="w-full h-1 rounded-xl bg-gray-200"></span>
                    <span className="w-full h-1 rounded-xl bg-secondary"></span>
                    <span className="w-full h-1 rounded-xl bg-gray-200"></span>
                </div>
            </div>
        </motion.div>
    )
}

export default LeftSection