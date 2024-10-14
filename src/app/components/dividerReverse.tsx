import { Box } from '@mui/material'
import React from 'react'

function DividerReverse() {
  return (
    <Box sx={{
        border: "none",
        borderBottom: "4px solid",
        borderImageSource: "linear-gradient(270deg, #86FFFD 0%, rgba(92, 55, 221, 0) 100%)", // Yön tersine çevrildi
        borderImageSlice: 1,
        margin: "16px 0", 
        width: "100%",
     }}></Box>
  )
}

export default DividerReverse
