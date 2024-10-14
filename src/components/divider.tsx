import { Box } from '@mui/material'
import React from 'react'

function Divider() {
  return (
    <Box sx={{
        border: "none",
        borderBottom: "4px solid",
        borderImageSource: "linear-gradient(90deg, #86FFFD 0%, rgba(92, 55, 221, 0) 100%)",
        borderImageSlice: 1,
        margin: "16px 0", 
        width: "100%",
     }}></Box>
  )
}

export default Divider