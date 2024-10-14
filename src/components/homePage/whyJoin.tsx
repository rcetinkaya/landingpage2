"use client"
import { Box, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';


// İki günlük süreyi milisaniye cinsinden tanımlıyoruz
const TWO_DAYS_IN_MS = 2 * 24 * 60 * 60 * 1000;

export function WhyJoin() {
    // İlk render'da sabit bir hedef zaman belirlenir
    const targetTime = React.useRef(new Date().getTime() + TWO_DAYS_IN_MS);

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
            <Box className="text-center p-2">
                <Typography className="text-xs font-bold l430:text-sm xl576:text-base xxl786:text-2xl sm1200:text-[40px] sm1200:leading-[48px]" color={"white"}>
                    The highly anticipated discounted public pre-sale rounds of $DIFO token are now live.
                </Typography>
            </Box>

            <Box className="gap-[30px] flex justify-center lg1920:gap-[140px]">
                <TimeBox label="Days" value={timeLeft.days} />
                <TimeBox label="Hours" value={timeLeft.hours} />
                <TimeBox label="Minutes" value={timeLeft.minutes} />
                <TimeBox label="Seconds" value={timeLeft.seconds} />
            </Box>

            <Box className="p-4 gap-3 flex flex-col text-center justify-center sm1200:my-4 sm1200:gap-4">
                <Typography className="text-xl font-bold xxl786:text-[32px] sm1200:text-[60px]" color={"white"}>
                    Sale Details of the $DIFO Token
                </Typography>
                <Typography className="text-xs xxl786:text-base xxs834:text-lg sm1200:text-xl " color={"#C1C7D0"}>
                    The public sale will have 3 rounds. Round 1 will start on October 15 at 15:00 UTC.
                </Typography>
                <Box className="gap-3 justify-around hidden xxs834:flex">

                    <div className='w-full flex justify-center items-center'>
                        <Box
                            sx={{
                                position: "relative",
                                borderRadius: "10px",
                                width: "100%",
                                minWidth: "200px",
                                padding: "2px",
                                background:
                                    "linear-gradient(20deg, rgba(92, 55, 221, 0) 1%, #86FFFD 55%, #86FFFD 30%, rgba(92, 55, 221, 0) 99%)",
                            }}
                        >
                            <Box
                                sx={{
                                    height: "100%",
                                    width: "100%",
                                    borderRadius: "8px",
                                    backgroundColor: "black",
                                    padding: "1rem",
                                    boxSizing: "border-box",
                                }}
                                className="flex flex-col justify-center items-center gap-x-3 "
                            >
                                <Box >
                                    <Typography className='text-sm font-bold sm1200:text-xl md1600:text-[32px]' color={"#86FFFD"}>Total Token Supply</Typography>
                                    <Box className="md1600:px-16 lg1920:px-32">
                                        <Typography className='text-sm sm1200:text-lg md1600:text-xl' color={"#C1C7D0"}>MAX: It is limited to 879,000,000 $DIFO.</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </div>

                    <div className='w-full flex justify-center items-center'>
                        <Box
                            sx={{
                                position: "relative",
                                borderRadius: "10px",
                                width: "100%",
                                height: "100%",
                                minWidth: "200px",
                                padding: "2px",
                                background:
                                    "linear-gradient(20deg, rgba(92, 55, 221, 0) 1%, #86FFFD 55%, #86FFFD 30%, rgba(92, 55, 221, 0) 99%)",
                            }}
                        >
                            <Box
                                sx={{
                                    height: "100%",
                                    width: "100%",
                                    borderRadius: "8px",
                                    backgroundColor: "black",
                                    padding: "1rem",
                                    boxSizing: "border-box",
                                }}
                                className="flex flex-col justify-center items-center gap-x-3 "
                            >
                                <Box >
                                    <Typography className='text-sm font-bold sm1200:text-xl md1600:text-[32px]' color={"#86FFFD"}>Type of Sale</Typography>
                                    <Typography className='text-sm sm1200:text-lg md1600:text-xl' color={"#C1C7D0"}>Public Sale</Typography>
                                </Box>

                            </Box>
                        </Box>
                    </div>

                    <div className='w-full flex justify-center items-center'>
                        <Box
                            sx={{
                                position: "relative",
                                borderRadius: "10px",
                                width: "100%",
                                height: "100%",
                                minWidth: "200px",
                                padding: "2px",
                                background:
                                    "linear-gradient(20deg, rgba(92, 55, 221, 0) 1%, #86FFFD 55%, #86FFFD 30%, rgba(92, 55, 221, 0) 99%)",
                            }}
                        >
                            <Box
                                sx={{
                                    height: "100%",
                                    width: "100%",
                                    borderRadius: "8px",
                                    backgroundColor: "black",
                                    padding: "1rem",
                                    boxSizing: "border-box",
                                }}
                                className="flex flex-col justify-center items-center gap-x-3 "
                            >
                                <Box>
                                    <Typography className='text-sm font-bold sm1200:text-xl md1600:text-[32px]' color={"#86FFFD"}>Token Sale Format</Typography>
                                    <Typography className='text-sm sm1200:text-lg md1600:text-xl' color={"#C1C7D0"}>First come, first served</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </div>

                </Box>
                <Box className="flex gap-3 justify-around xxs834:hidden">
                    <Box className="min-w-[138px] w-full text-start gap-4 p-2 bg-[#36394A] border border-[#86FFFD] rounded-md">
                        <Typography className="text-[10px] font-bold l430:text-sm" color={"#86FFFD"}>
                            Type of Sale
                        </Typography>
                        <Typography className="text-[10px] font-normal l430:text-xs" color={"white"}>
                            Public Sale
                        </Typography>
                    </Box>
                    <Box className="min-w-[138px] w-full text-start gap-4 p-2 bg-[#36394A] border border-[#86FFFD] rounded-md">
                        <Typography className="text-[10px] font-bold l430:text-sm" color={"#86FFFD"}>
                            Token Sale Format
                        </Typography>
                        <Typography className="text-[10px] font-normal l430:text-xs" color={"white"}>
                            First come, first served
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Box className="p-4">
                <div className='w-full flex justify-center items-center'>
                    <Box
                        sx={{
                            position: "relative",
                            borderRadius: "10px",
                            width: "100%",
                            minWidth: "246px",
                            padding: "1px",
                            background: "linear-gradient(20deg, rgba(92, 55, 221, 0) 0%, #86FFFD 0%, #86FFFD 100%, rgba(92, 55, 221, 0) 100%)",
                        }}
                    >
                        <Box
                            sx={{
                                height: "100%",
                                width: "100%",
                                borderRadius: "8px",
                                backgroundColor: "black",
                                padding: "1rem",
                                boxSizing: "border-box",
                            }}
                            className="flex flex-col justify-between items-center gap-3 "
                        >
                            <Typography className='text-base font-bold l430:text-xl xl576:text-2xl xxl786:text-[32px] xxs834:hidden' color={"white"}>The buy-back protection program</Typography>
                            <Box className="flex">
                                <Box className="w-7/12 xxs834:gap-4 xxs834:flex xxs834:flex-col md1600:gap-6 md1600:p-4">
                                    <Typography className='text-base font-bold l430:text-xl xl576:text-2xl xxl786:text-[32px] hidden xxs834:flex sm1200:text-[40px]
                                    m1441:text-[48px] 
                                    ' color={"white"}>The buy-back protection program</Typography>
                                    <Typography className='text-xs leading-[14px] l430:text-sm xl576:text-base sm1200:text-2xl
                                     m1441:text-[32px]
                                     ' color={"white"}>
                                        If the $DIFO token falls below the public sale price within the first 6 months after its initial listing, Difo Finance commits to repurchasing $DIFO tokens at a 90% protection level.
                                    </Typography>
                                    <Box className="flex gap-6 w-full">
                                        <Typography className='text-[10px] leading-[11.69px] l430:text-xs hidden xxs834:flex m1441:text-xl ' color={"#C1C7D0"}>
                                            You can check out detailed information about the buyback protection program below.
                                        </Typography>
                                        <Box className="w-6/12 justify-center items-center hidden m1441:flex xl2560:w-3/12">
                                            <div className='w-full  flex text-center '>
                                                <Button
                                                className='gap-2'
                                                    fullWidth
                                                    variant="contained"
                                                    size="large"
                                                    sx={{
                                                        backgroundColor: '#4480F5',
                                                        textTransform: 'none',
                                                        '&:hover': { backgroundColor: '#376dcf' },
                                                    }}
                                                >
                                                    Learn More <ArrowOutwardIcon className='text-[18px] mt-[-2px]' />
                                                </Button>
                                            </div>

                                        </Box>
                                    </Box>

                                </Box>
                                <Box className="w-5/12 flex justify-center">
                                    <img
                                        className='w-[100px] h-[100px] xl576:h-[130px] xl576:w-[130px] xxl786:h-[180px] xxl786:w-[180px] xxs834:h-[219px] xxs834:w-[219px]
                                        sm1200:w-[250px] sm1200:h-[250px] xl2560:h-[300px] xl2560:w-[300px]
                                        '
                                        src="media/mavi.png"
                                        style={{
                                            objectFit: "contain"
                                        }} />
                                </Box>
                            </Box>
                            <Box className="w-full flex justify-start xxs834:hidden">
                                <Typography className='text-[10px] leading-[11.69px] l430:text-xs ' color={"#C1C7D0"}>
                                    You can check out detailed information about the buyback protection program below.
                                </Typography>
                            </Box>
                            <Box className="w-full flex justify-start m1441:hidden">
                                <Button
                                    className='w-8/12 gap-2 xl576:w-6/12 xxl786:w-4/12'
                                    variant="contained"
                                    size="small"
                                    sx={{
                                        backgroundColor: '#4480F5',
                                        textTransform: 'none',
                                        '&:hover': { backgroundColor: '#376dcf' },
                                    }}
                                >
                                    Learn More <ArrowOutwardIcon className='text-[18px] mt-[-4px]' />
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </div>
            </Box >

            <Box className="p-4  flex justify-around items-center">
                <Box className="flex justify-around items-center gap-2 w-full">
                    <img
                        className='w-[24px] h-[24px] xl576:w-[40px] xl576:h-[40px] sm1200:h-[80px] sm1200:w-[80px] m1441:w-[100px] m1441:h-[100px]'
                        src="media/group.png"
                        style={{
                            objectFit: "contain"
                        }}
                    />
                    <img
                        className='w-[24px] h-[24px] l430:w-[50px] xl576:w-[100px] xxs834:w-[60px] sm1200:w-[140px] m1441:w-[140px]'
                        src="media/vector690.png"
                        style={{
                            objectFit: "contain"
                        }}
                    />
                </Box>

                <Box className="flex justify-around gap-2">
                    <div className='w-full flex justify-center items-center'>
                        <Box
                            className=" xl576:min-w-[247px] xxs834:min-w-[390px] sm1200:min-w-[580px] m1441:min-w-[730px] "
                            sx={{
                                position: "relative",
                                borderRadius: "10px",
                                width: "100%",
                                minWidth: "164px",
                                padding: "1px",
                                background: "linear-gradient(20deg, rgba(92, 55, 221, 0) 0%, #86FFFD 0%, #86FFFD 100%, rgba(92, 55, 221, 0) 100%)",
                            }}
                        >
                            <Box
                                sx={{
                                    height: "100%",
                                    width: "100%",
                                    borderRadius: "8px",
                                    backgroundColor: "black",
                                    padding: "4px",
                                    boxSizing: "border-box",
                                    cursor: "pointer"
                                }}
                                className="flex justify-center items-center gap-2 "
                            >
                                <Typography className='text-[10px] font-bold l430:text-sm xxs834:text-xl sm1200:text-2xl m1441:text-[32px]' color={"#DD1C1A"}>ATTENTION!</Typography>
                                <Typography className='text-[10px] font-bold hidden xxs834:inline sm1200:text-xl m1441:text-2xl' color={"white"}>Information to consider about $DIFO token</Typography>
                                <ArrowOutwardIcon className='text-[14px] mt-[-4px] l430:mt-0  xxs834:hidden' sx={{ color: "white" }} />
                            </Box>
                        </Box>
                    </div>
                </Box>

                <Box className="flex justify-around items-center gap-2 w-full">
                    <img
                        className='w-[24px] h-[24px] l430:w-[50px] xl576:w-[100px] xxs834:w-[60px] sm1200:w-[140px] m1441:w-[140px]'
                        src="media/vector691.png"
                        style={{
                            objectFit: "contain"
                        }}
                    />
                    <img
                        className='w-[24px] h-[24px] xl576:w-[40px] xl576:h-[40px] sm1200:h-[80px] sm1200:w-[80px] m1441:w-[100px] m1441:h-[100px]'
                        src="media/group.png"
                        style={{
                            objectFit: "contain"
                        }}
                    />
                </Box>
            </Box>
        </div >
    );
}

// Zaman göstergesi için alt bileşen
function TimeBox({ label, value }: { label: string; value: number }) {
    return (
        <Box className="flex flex-col justify-center items-center gap-2 sm1200:gap-6 my-4">
            <Typography className="text-xs font-bold l430:text-sm xxl786:text-xl xxs834:text-2xl sm1200:text-[40px]" color={"#4480F5"}>
                {label}
            </Typography>
            <div
                className="min-h-[45px] min-w-[45px] flex justify-center items-center p-4 bg-black h-full xl576:w-[56px] xl576:h-[56px] xxl786:h-[80px] xxl786:w-[80px]
                 sm1200:w-[140px] sm1200:h-[140px] "
                style={{
                    boxShadow: "0px 0px 16px 4px #85ABF480",
                    borderRadius: "10px",
                }}
            >
                <Typography className="text-xs font-bold l430:text-base xl576:text-2xl xxl786:text-[32px] xxs834:text-[48px] sm1200:text-[60px]" color={"white"}>
                    {String(value).padStart(2, '0')}
                </Typography>
            </div>
        </Box>
    );
}
