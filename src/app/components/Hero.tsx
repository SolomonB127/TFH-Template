import { DM_Sans, Sora } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const sora = Sora({
    subsets: ["latin"]
});

const dm = DM_Sans({
    subsets: ["latin"],
});

const Hero = () => {
    return (
        <section aria-labelledby="hero-heading" className="relative w-full">
            <div className="relative w-full">
                <Image
                    src="/hero_img.png"
                    alt="Background image of The Father's House Church event"
                    width={1595}
                    height={405}
                    className="w-full h-auto"
                    loading="lazy"
                />
                {/* Dark overlay to improve text contrast */}
                <div className="absolute inset-0 bg-black opacity-50" aria-hidden="true"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                    <h2 id="hero-heading" className={`text-xl sm:text-xl md:text-4xl font-bold ${sora.className}`}>
                        Father's House Events
                    </h2>
                    <p className={`mt-4 text-base sm:text-xl md:text-2xl font-normal ${dm.className}`}>
                        Our mandate is to raise sons
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
