import React from 'react';
import { Box } from"@chakra-ui/react"
import Sortby from './sortby'
import SearchBar from './searchbar'
import Courses from './courses'
import Header from './header'

const pagecontent = () => {

  return (
    <Box mx={130}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Header/>
        <SearchBar/>
        <Sortby/>
        <Courses/>
      </div>
    </Box>
  );
}

export default pagecontent