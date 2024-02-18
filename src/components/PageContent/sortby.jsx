import React from 'react'
import { Flex } from '@chakra-ui/react'
const sortby = () => {
  return (
    <Flex style={{
      width: '200px',
      height: '43px',
      border: '1px solid #A9A9A9',
      borderRadius: '6px',
      padding: '10px 10px', 
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      cursor: 'pointer',
      color: '#A9A9A9',
      marginTop: '20px'
    }} boxShadow={'md'} >
      <div>
      Sort by
      </div>
      <img src="/arrowdown.svg" alt="Arrow Logo" style={{height:"15px"}}/>
    </Flex>
  )
}

export default sortby