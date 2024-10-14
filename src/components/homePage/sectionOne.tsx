import { Box } from "@mui/material";
import React from "react";

export function Collectible() {
  return (
    <Box className="h-full flex justify-center bg-black text-white mt-[130px]">
      {/* Header Section */}
      <Box className="w-full max-w-[90%]">
        <Box
          sx={{
            position: "relative",
            borderRadius: "10px",
            padding: "4px",
            background:
              "linear-gradient(20deg, rgba(92, 55, 221, 0) 20%, #86FFFD 65%, #86FFFD 40%, rgba(92, 55, 221, 0) 83%)",
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "100%",
              borderRadius: "8px",
              backgroundColor: "black",
              padding: "2rem",
              boxSizing: "border-box",
            }}
            className="flex flex-col xxs834:flex-row xxl786:flex-col justify-between items-center "
          >
              <Box className="w-full md:w-5/12 xxs834:w-6/12 xl576:w-[250px] xxs834:hidden  hidden justify-center md:justify-end xxl786:inline xl576:inline l430:flex m360:flex s320:flex">
              <img
                src="media/12.png"
                alt="IDO Illustration"
                className="max-w-full h-auto lg1920:w-[438px] lg1920:h-[438px] md1600:w-[438px] md1600:h-[438px] m1441:w-[438px] m1441:h-[438px]
                 sm1200:w-[352px] sm1200:h-[352px] xs992:w-[250px] xs992:h-[250px] xxs834:w-[250px] xxs834:h-[250px] xl576:w-[250px] xl576:h-[250px]
                 l430:w-[200px] l430:h-[200px] m360:w-[200px] m360:h-[200px] s320:w-[200px] s320:h-[200px]
                 "
                style={{ objectFit: "cover" }}
              />
            </Box>
            {/* Sol Bölüm (Metin) */}
            <Box className="w-full  text-left mb-6 xxs834:w-6/12   ">
              <div className="text-3xl xl2560:text-[60px] xl2560:leading-[72px]
               lg1920:text-[48px] lg1920:leading-[60px] md1600:text-[40px] md1600:leading-[48px]
               sm1200:text-[32px] sm1200:leading-[38px] xs992:text-[24px] xs992:leading-[28px] xxs834:text-xl
               xxl786:text-[32px] xl576:text-xl xl576:leading-[24.2px] l430:text-sm m360:text-sm s320:text-sm
                font-bold mb-4 md:mb-6">
                <span className="text-[#85ABF4]">Difo Launchpad</span> is a new
                generation hybrid launch ramp that brings together the valuable
                features of both centralized{" "}
                <span className="text-[#85ABF4]">IEO</span> platforms and
                decentralized <span className="text-[#85ABF4]">IDO</span> platforms.
              </div>
              <span className="text-[#A4ACB9] text-xl xs992:text-[18px] xxs834:text-xs xxs834:text-wrap xxl786:text-[18px] xxl786:text-nowrap xl576:text-[16px] l430:text-xs
              m360:text-xs s320:text-xs ">
                Gain early access to promising ideas of tomorrow with Difo Launchpad.
              </span>
            </Box>

            {/* Sağ Bölüm (Görsel) */}
            <Box className="w-full  xxs834:w-6/12 flex justify-center xxl786:hidden xl576:hidden  xxs834:flex l430:hidden m360:hidden s320:hidden ">
              <img
                src="media/12.png"
                alt="IDO Illustration"
                className="max-w-full h-auto lg1920:w-[438px] lg1920:h-[438px] md1600:w-[438px] md1600:h-[438px] m1441:w-[438px] m1441:h-[438px]
                 sm1200:w-[352px] sm1200:h-[352px] xs992:w-[250px] xs992:h-[250px] xxs834:w-[250px] xxs834:h-[250px]"
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Box>

          {/* Altta TRENDING Metni */}
          <Box className="absolute bottom-[-7.5%] xxs834:bottom-[-13%] left-[20%] transform -translate-x-1/2">
            <h2 className="text-4xl xl2560:text-[80px] lg1920:text-[60px] md1600:text-5xl sm1200:text-5xl xs992:text-[40px] xxs834:text-[32px] 
            xxl786:text-[32px] xl576:text-[24px]  l430:text-2xl m360:text-2xl s320:text-2xl 
            font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#DCE8FF] via-[#0F3D96] to-[#DCE8FF] text-center mb-8">
              TRENDING
            </h2>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
