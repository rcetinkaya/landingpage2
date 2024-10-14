"use client";
import React, { useEffect, useState } from 'react';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import {useMediaQuery} from "@mui/material";
// İki günlük süreyi milisaniye cinsinden tanımlıyoruz
const TWO_DAYS_IN_MS = 2 * 24 * 60 * 60 * 1000;

export function WhyJoin() {
    // İlk render'da sabit bir hedef zaman belirlenir
    const targetTime = React.useRef(new Date().getTime() + TWO_DAYS_IN_MS);
    const xxs834 = useMediaQuery('(max-width:834px)');
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetTime.current));
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(targetTime.current));
        }, 1000); // Her saniyede güncellenir

        return () => clearInterval(timer); // Bileşen unmount olduğunda temizlenir
    }, []);

    function calculateTimeLeft(target: number) {
        const now = new Date().getTime();
        const difference = target - now;

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    return (
        <div className="w-full bg-inherit rounded shadow-none xxs834:shadow-[0px_2px_24px_16px_#85ABF480] xxs834:bg-[#1A1B25] xxs834:w-[90%] xxs834:p-4">
            <div className="text-center p-2">
                <h2 className="text-xs font-bold l430:text-sm xl576:text-base xxl786:text-2xl sm1200:text-[40px] sm1200:leading-[48px] text-white">
                    The highly anticipated discounted public pre-sale rounds of $DIFO token are now live.
                </h2>
            </div>

            <div className="gap-[30px] flex justify-center lg1920:gap-[140px]">
                <TimeBox label="Days" value={timeLeft.days} />
                <TimeBox label="Hours" value={timeLeft.hours} />
                <TimeBox label="Minutes" value={timeLeft.minutes} />
                <TimeBox label="Seconds" value={timeLeft.seconds} />
            </div>

            <div className="p-4 gap-3 flex flex-col text-center justify-center sm1200:my-4 sm1200:gap-4">
                <h2 className="text-xl font-bold xxl786:text-[32px] sm1200:text-[60px] text-white">
                    Sale Details of the $DIFO Token
                </h2>
                <p className="text-xs xxl786:text-base xxs834:text-lg sm1200:text-xl text-[#C1C7D0]">
                    The public sale will have 3 rounds. Round 1 will start on October 15 at 15:00 UTC.
                </p>
                <div className="gap-3 justify-around hidden xxs834:flex">
                    <div className='w-full flex justify-center items-center'>
                        <div
                            className="relative rounded-[10px] w-full min-w-[200px] p-2 bg-gradient-to-r from-transparent via-[#86FFFD] to-transparent"
                        >
                            <div
                                className="h-full w-full rounded-[8px] bg-black p-4 flex flex-col justify-center items-center gap-x-3"
                            >
                                <div>
                                    <h3 className='text-sm font-bold sm1200:text-xl md1600:text-[32px] text-[#86FFFD]'>Total Token Supply</h3>
                                    <div className="md1600:px-16 lg1920:px-32">
                                        <p className='text-sm sm1200:text-lg md1600:text-xl text-[#C1C7D0]'>MAX: It is limited to 879,000,000 $DIFO.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <div
                            className="relative rounded-[10px] w-full min-w-[200px] p-2 bg-gradient-to-r from-transparent via-[#86FFFD] to-transparent"
                        >
                            <div
                                className="h-full w-full rounded-[8px] bg-black p-4 flex flex-col justify-center items-center gap-x-3"
                            >
                                <div>
                                    <h3 className='text-sm font-bold sm1200:text-xl md1600:text-[32px] text-[#86FFFD]'>Type of Sale</h3>
                                    <p className='text-sm sm1200:text-lg md1600:text-xl text-[#C1C7D0]'>Public Sale</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <div
                            className="relative rounded-[10px] w-full min-w-[200px] p-2 bg-gradient-to-r from-transparent via-[#86FFFD] to-transparent"
                        >
                            <div
                                className="h-full w-full rounded-[8px] bg-black p-4 flex flex-col justify-center items-center gap-x-3"
                            >
                                <div>
                                    <h3 className='text-sm font-bold sm1200:text-xl md1600:text-[32px] text-[#86FFFD]'>Token Sale Format</h3>
                                    <p className='text-sm sm1200:text-lg md1600:text-xl text-[#C1C7D0]'>First come, first served</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-3 justify-around xxs834:hidden">
                    <div className="min-w-[138px] w-full text-start gap-4 p-2 bg-[#36394A] border border-[#86FFFD] rounded-md">
                        <h4 className="text-[10px] font-bold l430:text-sm text-[#86FFFD]">
                            Type of Sale
                        </h4>
                        <p className="text-[10px] font-normal l430:text-xs text-white">
                            Public Sale
                        </p>
                    </div>
                    <div className="min-w-[138px] w-full text-start gap-4 p-2 bg-[#36394A] border border-[#86FFFD] rounded-md">
                        <h4 className="text-[10px] font-bold l430:text-sm text-[#86FFFD]">
                            Token Sale Format
                        </h4>
                        <p className="text-[10px] font-normal l430:text-xs text-white">
                            First come, first served
                        </p>
                    </div>
                </div>
            </div>

            <div className="p-4">
                <div className='w-full flex justify-center items-center'>
                    <div
                        className="relative rounded-[10px] w-full min-w-[246px] p-1 bg-gradient-to-r from-transparent via-[#86FFFD] to-transparent"
                    >
                        <div
                            className="h-full w-full rounded-[8px] bg-black p-4 flex flex-col justify-between items-center gap-3"
                        >
                            <h3 className='text-base font-bold l430:text-xl xl576:text-2xl xxl786:text-[32px] xxs834:hidden text-white'>The buy-back protection program</h3>
                            <div className="flex">
                                <div className="w-7/12 xxs834:gap-4 xxs834:flex xxs834:flex-col md1600:gap-6 md1600:p-4">
                                    <h3 className='text-base font-bold l430:text-xl xl576:text-2xl xxl786:text-[32px] hidden xxs834:flex sm1200:text-[40px] m1441:text-[48px] text-white'>The buy-back protection program</h3>
                                    <p className='text-xs leading-[14px] l430:text-sm xl576:text-base sm1200:text-2xl m1441:text-[32px] text-white'>
                                        If the $DIFO token falls below the public sale price within the first 6 months after its initial listing, Difo Finance commits to repurchasing $DIFO tokens at a 90% protection level.
                                    </p>
                                    <div className="flex gap-6 w-full">
                                        <p className='text-[10px] leading-[11.69px] l430:text-xs hidden xxs834:flex m1441:text-xl text-[#C1C7D0]'>
                                            You can check out detailed information about the buyback protection program below.
                                        </p>
                                        <div className="w-6/12 justify-center items-center hidden m1441:flex xl2560:w-3/12">
                                            <div className='w-full flex text-center'>
                                                <a
                                                    href="#"
                                                    className="inline-flex items-center gap-2 px-4 py-2 text-lg font-medium text-white bg-[#4480F5] rounded-md hover:bg-[#376dcf]"
                                                >
                                                    Learn More
                                                    <ArrowOutwardIcon className='text-[18px] mt-[-2px]' />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-5/12 flex justify-center">
                                    <img
                                        className='w-[100px] h-[100px] xl576:h-[130px] xl576:w-[130px] xxl786:h-[180px] xxl786:w-[180px] xxs834:h-[219px] xxs834:w-[219px] sm1200:w-[250px] sm1200:h-[250px] xl2560:h-[300px] xl2560:w-[300px]'
                                        src="media/mavi.png"
                                        alt="Protection Program Image"
                                        style={{ objectFit: "contain" }}
                                    />
                                </div>
                            </div>
                            <div className="w-full flex justify-start xxs834:hidden">
                                <p className='text-[10px] leading-[11.69px] l430:text-xs text-[#C1C7D0]'>
                                    You can check out detailed information about the buyback protection program below.
                                </p>
                            </div>
                            <div className="w-full flex justify-start m1441:hidden">
                                <a
                                    href="#"
                                    className="w-8/12 gap-2 xl576:w-6/12 xxl786:w-4/12 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-[#4480F5] rounded-md hover:bg-[#376dcf]"
                                >
                                    Learn More
                                    <ArrowOutwardIcon className='text-[18px] mt-[-4px]' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-4 flex justify-around items-center">
                <div className="flex justify-around items-center gap-2 w-full">
                    <img
                        className='w-[24px] h-[24px] xl576:w-[40px] xl576:h-[40px] sm1200:h-[80px] sm1200:w-[80px] m1441:w-[100px] m1441:h-[100px]'
                        src="media/group.png"
                        alt="Group Icon"
                        style={{ objectFit: "contain" }}
                    />
                    <img
                        className='w-[24px] h-[24px] l430:w-[50px] xl576:w-[100px] xxs834:w-[60px] sm1200:w-[140px] m1441:w-[140px]'
                        src="media/vector690.png"
                        alt="Vector Icon 690"
                        style={{ objectFit: "contain" }}
                    />
                </div>

                <div className="flex justify-around gap-2">
                    <div className='w-full flex justify-center items-center'>
                        <div
                            className="xl576:min-w-[247px] xxs834:min-w-[390px] sm1200:min-w-[580px] m1441:min-w-[745px] relative rounded-[10px] w-full min-w-[164px] p-1 bg-gradient-to-r from-transparent via-[#86FFFD] to-transparent"
                        >
                            <div
                                className="h-full w-full rounded-[8px] bg-black p-4 flex justify-center items-center gap-2 cursor-pointer"
                            >
                                <p className='text-[10px] font-bold l430:text-sm xxs834:text-xl sm1200:text-2xl m1441:text-[32px] text-[#DD1C1A]'>ATTENTION!</p>
                                <p className='text-[10px] font-bold hidden xxs834:inline sm1200:text-xl m1441:text-2xl text-white'>Information to consider about $DIFO token</p>
                                    <ArrowOutwardIcon className='text-[14px] mt-[-4px] l430:mt-0 xxs834:hidden!' sx={{ color: "white",display:xxs834 ?"block":"none" }} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-around items-center gap-2 w-full">
                    <img
                        className='w-[24px] h-[24px] l430:w-[50px] xl576:w-[100px] xxs834:w-[60px] sm1200:w-[140px] m1441:w-[140px]'
                        src="media/vector691.png"
                        alt="Vector Icon 691"
                        style={{ objectFit: "contain" }}
                    />
                    <img
                        className='w-[24px] h-[24px] xl576:w-[40px] xl576:h-[40px] sm1200:h-[80px] sm1200:w-[80px] m1441:w-[100px] m1441:h-[100px]'
                        src="media/group.png"
                        alt="Group Icon"
                        style={{ objectFit: "contain" }}
                    />
                </div>
            </div>
        </div>
    );
}

function TimeBox({ label, value }: { label: string, value: number }) {
    return (
        <div className="flex flex-col justify-center items-center gap-2 sm1200:gap-6 my-4">
            <h4 className="text-xs font-bold l430:text-sm xxl786:text-xl xxs834:text-2xl sm1200:text-[40px] text-[#4480F5]">
                {label}
            </h4>
            <div
                className="min-h-[45px] min-w-[45px] flex justify-center items-center p-4 bg-black h-full xl576:w-[56px] xl576:h-[56px] xxl786:h-[80px] xxl786:w-[80px] sm1200:w-[140px] sm1200:h-[140px]"
                style={{
                    boxShadow: "0px 0px 16px 4px #85ABF480",
                    borderRadius: "10px",
                }}
            >
                <p className="text-xs font-bold l430:text-base xl576:text-2xl xxl786:text-[32px] xxs834:text-[48px] sm1200:text-[60px] text-white">
                    {String(value).padStart(2, '0')}
                </p>
            </div>
        </div>
    );
}