import { Box, Typography } from '@mui/material';
import React from 'react';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';


export function BestOfTheBest() {
    return (
        <div className=" flex justify-center">
            <Box className="flex justify-between w-[100vw] px-[5%] py-2 gap-x-5 l430:overflow-x-scroll m360:overflow-x-scroll s320:overflow-x-scroll">
                <div className='w-full flex justify-center items-center'>
                    <Box
                        sx={{
                            position: "relative",
                            borderRadius: "10px",
                            width: "100%",
                            minWidth:"246px",
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
                                backgroundColor: "#1A1B25",
                                padding: "1rem",
                                boxSizing: "border-box",
                            }}
                            className="flex justify-between items-center gap-x-3 "
                        >
                            <img
                                className='h-[56px] w-[56px] xxs834:w-[32px] xxs834:h-[32px] xxl786:h-[32px] xxl786:w-[32px] xl576:w-[32px] xl576:h-[32px] l430:h-[32px] l430:w-[32px]
                                 m360:w-[32px] m360:h-[32px] s320:h-[32px] s320:w-[32px]'
                                src='media/group3.png' />
                            <Typography className='text-2xl lg1920:text-xl sm1200:text-lg xs992:text-sm xxs834:text-xs xxl786:text-xs xl576:text-xs l430:text-xs m360:text-xs s320:text-xs' color={"white"}>Would You Like to Earn $12 for EachFriend You Invite?</Typography>
                            <img
                                className='h-[32px] w-[32px] xxs834:w-[24px] xxs834:h-[24px] xxl786:h-[24px] xxl786:w-[24px] xl576:w-[24px] xl576:h-[24px] l430:h-[24px] l430:w-[24px]
                                m360:w-[24px] m360:h-[24px] s320:h-[24px] s320:w-[24px]'
                                src='media/arrow.png' />
                        </Box>
                    </Box>
                </div>

                <div className='w-3/12 inline xxs834:inline l430:hidden'>
                    <Box
                        className="flex justify-center"
                        sx={{
                            width: "100%",
                        }}>
                        <img src='media/33.png'  className='w-[90px] h-[90px] m1441:w-[129px] m1441:h-[129px]  xxs834:w-[84px] xxs834:h-[84px]'/>
                    </Box>
                </div>


                <div className='w-full flex justify-center items-center'>
                    <Box
                        sx={{
                            position: "relative",
                            borderRadius: "10px",
                            width: "100%",
                            minWidth:"246px",
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
                                backgroundColor: "#1A1B25",
                                padding: "1rem",
                                boxSizing: "border-box",
                            }}
                            className="flex justify-between items-center gap-x-3 "
                        >
                            <img
                                className='h-[56px] w-[56px] xxs834:w-[32px] xxs834:h-[32px] xxl786:h-[32px] xxl786:w-[32px] xl576:w-[32px] xl576:h-[32px] l430:h-[32px] l430:w-[32px]
                                m360:w-[32px] m360:h-[32px] s320:h-[32px] s320:w-[32px]'
                                src='media/group4.png' />
                            <Typography className='text-2xl lg1920:text-xl sm1200:text-lg xs992:text-sm xxs834:text-xs xxl786:text-xs xl576:text-xs l430:text-xs m360:text-xs s320:text-xs' color={"white"}>Buy $DIFO token now to get early access to promising projects.</Typography>
                            <img
                                className='h-[32px] w-[32px] xxs834:w-[24px] xxs834:h-[24px] xxl786:h-[24px] xxl786:w-[24px] xl576:w-[24px] xl576:h-[24px] l430:h-[24px] l430:w-[24px]
                                m360:w-[24px] m360:h-[24px] s320:h-[24px] s320:w-[24px]'
                                src='media/arrow.png' />
                        </Box>
                    </Box>
                </div>
            </Box>

        </div>
    );
}
