"use client"

import React, { useState } from 'react'
import { Map } from "./map"

export function Collection() {
    const [hover, setHover] = useState<null | number>(null)
    return (
        <>
            <div className="w-full p-4 bg-[url('/media/collection.svg')] bg-cover bg-center flex flex-col  lg:flex-col lg:justify-between">
                <div className='flex flex-col'>
                    <span className='text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-[56px] font-bold mb-4'>
                        Grow your collection
                    </span>
                    <span className='text-base sm:text-lg md:text-xl lg:text-lg xl:text-lg mb-6'>
                        Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus.
                        Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.
                    </span>
                </div>

                <div className='flex flex-col lg:flex-row w-full lg:items-center justify-around '>
                    <div className='flex flex-row md:flex-col items-start justify-start md:justify-normal md:my-4  h-full gap-y-8 max-w-[98vw] overflow-x-auto '>
                        {collectionList.map((item, index) => (
                            <div key={index} className='flex gap-x-2 items-center transition-shadow duration-300 hover:shadow-lg min-w-[250px] cursor-pointer'
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(null)}
                            >
                                <img src={`${item.icon}`} alt={item.title} className="w-10 h-10" />
                                <span className='text-xl text-nowrap'>{item.title}</span>
                                {
                                    hover === index &&
                                <img src={`icons/arrowRight.svg`} alt={item.title} className="w-6 h-6 " />
                                }
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-center items-center mt-4 lg:mt-0'>
                        <img src='media/col1.png' alt="Collectible Sneakers" className="w-full h-auto  sm:max-w-sm  lg:max-w-full transition-transform duration-300 hover:shadow-lg" />
                    </div>
                </div>
            </div>

            <div className='mt-[-1px]'>
                <Map />
            </div>
        </>
    )
}

const collectionList = [
    {
        icon: "icons/search.png",
        title: "Bibendum tellus"
    },
    {
        icon: "icons/shield-check.png",
        title: "Cras eget"
    },
    {
        icon: "icons/rocket.png",
        title: "Dolor pharetra"
    },
    {
        icon: "icons/screen.png",
        title: "Amet, fringilla"
    },
    {
        icon: "icons/podcast.png",
        title: "Amet nibh"
    },
    {
        icon: "icons/settings-alt.png",
        title: "Sed velit"
    },
]
