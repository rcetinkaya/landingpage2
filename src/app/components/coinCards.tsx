import { Box, Typography } from '@mui/material';
import React from 'react';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import SouthEastIcon from '@mui/icons-material/SouthEast';
// Coin verilerini içeren array
const coins = [
  {
    name: 'SOL/USDT',
    price: '152.00',
    change: '-1.21%',
    changeType: 'down',
    logo: 'coins/SOL.png',
  },
  {
    name: 'TRON/USDT',
    price: '0.15',
    change: '+1.13%',
    changeType: 'up',
    logo: 'coins/TRON.png',
  },
  {
    name: 'AVAX/USDT',
    price: '28.07',
    change: '+1.15%',
    changeType: 'up',
    logo: 'coins/AWAX.png',
  },
  {
    name: 'AVAX/USDT',
    price: '595.80',
    change: '+1.04%',
    changeType: 'up',
    logo: 'coins/BNB.png',
  },
  {
    name: 'SOL/USDT',
    price: '152.00',
    change: '-1.21%',
    changeType: 'down',
    logo: 'coins/SOL.png',
  },
  {
    name: 'TRON/USDT',
    price: '0.15',
    change: '+1.13%',
    changeType: 'up',
    logo: 'coins/TRON.png',
  },
  {
    name: 'AVAX/USDT',
    price: '28.07',
    change: '+1.15%',
    changeType: 'up',
    logo: 'coins/AWAX.png',
  },
  {
    name: 'AVAX/USDT',
    price: '595.80',
    change: '+1.04%',
    changeType: 'up',
    logo: 'coins/BNB.png',
  },
];

export function CoinCards() {
  return (
    <Box display="flex"
      justifyContent="center"
      gap={2}
      p={2}
      sx={{ overflowX: 'auto', width: "100vw" }} >

      {coins.map((coin, index) => (
        <Box
          key={index}
          sx={{
            backgroundColor: '#1C1C1C',
            border: "2px solid #272835",
            borderRadius: '12px',
            padding: '12px 16px',
            minWidth: '320px',
            height: '105px',
            display: 'flex',
            justifyContent: "space-around",
            alignItems: 'center',
            gap: '8px',
            marginLeft: index === 0 ? 215 : 0
          }}
        >
          {/* Coin Logosu */}
          <Box sx={{ width: "auto", height: "auto", borderRadius: '100px', padding: "10px", background: "#272835", display: "flex", justifyItems: "center", alignItems: "center" }}>
            <Box
              component="img"
              src={coin.logo}
              alt={`${coin.name} logo`}
              sx={{ width: 38, height: 38,/*  borderRadius: '100px', */ }}
            />
          </Box>

          {/* Coin İsmi */}
          <Box>
            <Typography className='text-sm xxs834:text-xl' variant="body2" color="#FFFFFF">
              {coin.name}
            </Typography>
            {/* Coin Fiyatı */}
            <Typography className='text-xs xxs834:text-base' variant="h6" color="#FFFFFF">
              ≈{coin.price}
            </Typography>
          </Box>

          {/* Değişim Yüzdesi */}
          <Typography
            className='text-xs xxs834:text-base'
            variant="body2"
            sx={{
              color: coin.changeType === 'up' ? '#00FF00' : '#FF4D4D', // Fiyat düşüşü için kırmızı, artış için yeşil
            }}
          >
            {coin.changeType === 'up' ? <ArrowOutwardIcon className='text-[24px] xxs834:text-[18px]' /> : <ArrowOutwardIcon className='rotate-90 text-[24px] xxs834:text-[18px]' />} {coin.change}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
