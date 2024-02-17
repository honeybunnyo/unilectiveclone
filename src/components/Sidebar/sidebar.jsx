import React from 'react'
import { Box } from"@chakra-ui/react"

const sidebar = () => {
  return (
    <Box 
      height={"100vh"}
      style={{ 
        backgroundColor: '#f9fafb', 
        padding: '25px', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between' 
      }}
    >
      <div>
        <img src="/unilectives.svg" alt="Unilectives Logo" style={{ marginBottom: '20px' }}/>
        <div style={{ marginLeft: '-25%', borderBottom: '2px solid #E6E8E9', width: '150%', marginBottom: '25px' }}></div>
        <img src="/bookopen.svg" alt="Book-open Logo" style={{ marginBottom: '35px' }}/>
        <img src="/shieldcheck.svg" alt="Shield-check Logo" style={{ marginBottom: '35px' }}/>
      </div>

      <div>
        <img src="/barsarrowdown.svg" alt="Bars-arrow-down Logo" style={{ marginBottom: '35px' }}/>
        <img src="/usercircle.svg" alt="User circle Logo" style={{ marginBottom: '35px' }}/>
        <img src="/moon.svg" alt="Moon Logo" style={{ marginBottom: '35px' }}/>
        <img src="/login.svg" alt="Login Logo" style={{ marginBottom: '25px' }}/>
      </div>
    </Box>
  )
}

export default sidebar