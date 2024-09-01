// app/components/LoadingBar.js
'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { delay, motion } from 'framer-motion';

export default function ContentPages({ all }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setLoading(false);

            // Re-enable scrolling after the animation
            document.body.style.overflow = 'auto';
        };

        // Call the fetchData function
        fetchData();
    }, []);

    return (
        <>
            {loading ? (
                <div className="bg-white">
                    <Image className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src="/assets/AMAZONV1.svg" alt="amazon-logo" width={110} height={110} />
                    <div className="loading-wrapper">
                        <div className="loading-bar">
                            <div className="loading-fill"></div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <motion.div initial={{ opacity: 1, height: "50%" }} animate={{ opacity: 1, height: "0%" }} transition={{ duration: 0.8, delay: 0.2, ease: "easeIn" }} className="shadow-sm absolute z-[9999] top-0 bg-white w-full h-1/2"></motion.div>
                    {all}
                    <motion.div initial={{ opacity: 1, height: "50%" }} animate={{ opacity: 1, height: "0%" }} transition={{ duration: 0.8, delay: 0.2, ease: "easeIn" }} className="shadow-sm absolute z-[9999] bottom-0 bg-white w-full h-1/2"></motion.div>
                </>
            )}
        </>
    );
};
