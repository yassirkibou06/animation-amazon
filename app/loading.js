// app/components/LoadingBar.js
'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Loading({ all }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setLoading(false);
            document.body.style.overflow = 'auto';
        };
        fetchData();
    }, []);

    return (
        <>
            {loading ? (
                <div className="bg-white flex justify-center items-center h-screen w-screen">
                    <Image className="absolute" src="/assets/AMAZONV1.svg" alt="amazon-logo" width={110} height={110} />
                    <div className="loading-wrapper">
                        <div className="loading-bar">
                            <div className="loading-fill"></div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <motion.div initial={{ opacity: 1, height: "50%" }} animate={{ opacity: 1, height: "0%" }} exit={{ opacity: 0, height: "0%" }} transition={{ duration: 0.8, delay: 0.5, ease: "easeIn" }} className="shadow-sm absolute z-[9999] top-0 bg-white w-full h-1/2" ></motion.div>
                    {all}
                    <motion.div initial={{ opacity: 1, height: "50%" }} animate={{ opacity: 1, height: "0%" }} exit={{ opacity: 0, height: "0%" }} transition={{ duration: 0.8, delay: 0.5, ease: "easeIn" }} className="shadow-sm absolute z-[9999] bottom-0 bg-white w-full h-1/2"></motion.div>
                </>
            )}
        </>
    );
};
