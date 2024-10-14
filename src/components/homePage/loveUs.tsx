"use client"
import React, { useRef, useState } from 'react';

export function LoveUs() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isActive, setIsActive] = useState<string | null>(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -300, 
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 300, 
                behavior: 'smooth',
            });
        }
    };

    const handleMouseDown = (direction: string) => {
        setIsActive(direction);
    };

    const handleMouseUp = () => {
        setIsActive(null);
    };

    return (
        <div className="w-full p-4 my-4">
            <div className='flex flex-col lg:flex-row justify-between items-center px-4 lg:px-12'>
                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-6 text-center lg:text-left">
                    Because they love us
                </h2>
                <div className=" hidden space-x-2 md:flex">
                    <button
                        onClick={scrollLeft}
                        onMouseDown={() => handleMouseDown('left')}
                        onMouseUp={handleMouseUp}
                        className={`p-2 transition-transform duration-300 ${isActive === 'left' ? 'scale-90' : ''}`}
                    >
                        <img src="icons/hugLeft.svg" alt="Hug Left" />
                    </button>
                    <button
                        onClick={scrollRight}
                        onMouseDown={() => handleMouseDown('right')}
                        onMouseUp={handleMouseUp}
                        className={`p-2 transition-transform duration-300 ${isActive === 'right' ? 'scale-90' : ''}`}
                    >
                        <img src="icons/hug.svg" alt="Hug" />
                    </button>
                </div>
            </div>
            <div className='relative'>
                <div className='bg-[#FDE68A] w-11/12 h-[320px] absolute left-[4%] lg:left-[4%] top-0'></div>
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto lg:overflow-x-hidden overflow-y-hidden h-full max-w-[97vw] space-x-4 p-4 pt-2 mb-14"
                >
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-[280px] sm:w-[300px] p-4 bg-white rounded-lg shadow-lg z-10"
                        >
                            <div className="my-4">
                                <img
                                    src={testimonial.logo}
                                    alt="Logo"
                                    className="h-6"
                                />
                            </div>
                            <div className='min-h-[180px]'>
                                <p className="text-base lg:text-xl">
                                    {testimonial.text}
                                </p>
                            </div>
                            <div className="my-4 flex items-center">
                                <img
                                    src={testimonial.userImage}
                                    alt={testimonial.userName}
                                    className="h-10 w-10 rounded-full mr-2"
                                />
                                <div>
                                    <p className="text-sm font-semibold">
                                        {testimonial.userName}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {testimonial.userTitle}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const testimonials = [
    {
        logo: '/icons/zoomer.svg',
        text: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
        userImage: '/media/user0.png',
        userName: 'Hellen Jummy',
        userTitle: 'Team Lead',
    },
    {
        logo: '/icons/shells.svg',
        text: 'Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.',
        userImage: '/media/user1.png',
        userName: 'Helena John',
        userTitle: 'Co-Founder',
    },
    {
        logo: '/icons/artvenue.svg',
        text: 'A eget sed posuere dui risus habitasse mauris. Venentatis aliquet id ultricies a lacus. Pretium vehicula pretium posuere justo sed.',
        userImage: '/media/user2.png',
        userName: 'David Ghosh',
        userTitle: 'Manager',
    },
    {
        logo: '/icons/zoomer.svg',
        text: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
        userImage: '/media/user0.png',
        userName: 'Hellen Jummy',
        userTitle: 'Team Lead',
    },
    {
        logo: '/icons/shells.svg',
        text: 'Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.',
        userImage: '/media/user1.png',
        userName: 'Helena John',
        userTitle: 'Co-Founder',
    },
    {
        logo: '/icons/artvenue.svg',
        text: 'A eget sed posuere dui risus habitasse mauris. Venentatis aliquet id ultricies a lacus. Pretium vehicula pretium posuere justo sed.',
        userImage: '/media/user2.png',
        userName: 'David Ghosh',
        userTitle: 'Manager',
    },
    {
        logo: '/icons/zoomer.svg',
        text: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
        userImage: '/media/user0.png',
        userName: 'Hellen Jummy',
        userTitle: 'Team Lead',
    },
    {
        logo: '/icons/shells.svg',
        text: 'Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.',
        userImage: '/media/user1.png',
        userName: 'Helena John',
        userTitle: 'Co-Founder',
    },
    {
        logo: '/icons/artvenue.svg',
        text: 'A eget sed posuere dui risus habitasse mauris. Venentatis aliquet id ultricies a lacus. Pretium vehicula pretium posuere justo sed.',
        userImage: '/media/user2.png',
        userName: 'David Ghosh',
        userTitle: 'Manager',
    },

];