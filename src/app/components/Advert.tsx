import { Button } from '@/components/ui/button';
import { DM_Sans, Sora } from 'next/font/google';
import Image from 'next/image'
import React from 'react'

const sora = Sora({ subsets: ["latin"] });
const dm = DM_Sans({ subsets: ["latin"] });

const Advert = () => {
    return (
        <section 
        aria-labelledby="advert-heading" 
        className="relative w-full overflow-hidden"
        >
            <div className="relative aspect-video md:aspect-[21/9]">
                <div className="absolute inset-0 bg-black/50 z-10" />
                    <Image
                    src="/praise.png"
                    alt="A congregation worshipping together"
                    fill
                    className="object-cover"
                    loading="lazy"
                    priority={false}
                    />
                    <div className="absolute inset-0 z-20 flex items-center justify-center p-4 sm:p-8">
                    <div className="max-w-4xl mx-auto text-center text-white space-y-4 md:space-y-6">
                        <h2 
                        id="advert-heading" 
                        className={`text-l md:text-3xl lg:text-4xl font-bold ${dm.className}`}
                        >
                        Worship with Us Every Sunday
                        </h2>
                        
                        <p className={`text-base md:text-xl lg:text-2xl ${sora.className}`}>
                        Sundays - 9am to 12pm
                        </p>

                        <p 
                        className={`${sora.className} text-xs md:text-lg lg:text-xl 
                            max-w-3xl mx-auto leading-relaxed text-gray-200`}
                        >
                        With the Father’s House Mobile App, you can access the church on the go. 
                        Have access to daily devotionals, church events, announcements, and even 
                        stream services online. Listen to the church’s podcast anywhere, all in one place!
                        </p>

                        <Button 
                        size="lg"
                        className={`${sora.className} mt-4 md:mt-6 text-white bg-[#FF6634] hover:bg-[#ff835a] md:w-[280px] md:h-[60px] font-bold md:text-lg sm:w-[100px] sm:h-[30px] sm:text-base
                            transition-colors duration-200`}
                        >
                        Get Directions
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advert