import React, { useState } from 'react';
import { Flex, Button } from '@chakra-ui/react';

const searchbar = () => {
    const [isSearchClicked, setIsSearchClicked] = useState(false);
    const handleSearchClick = () => {
        setIsSearchClicked(!isSearchClicked);
    };

    return (
        <>
            <Flex style={{ width: '97%', height: '40px', alignItems: 'center', padding: '8px', color: "#989EFF", borderRadius: '6px', cursor: 'pointer', border: '2px solid #989EFF' }} onClick={handleSearchClick}>
                <img src="/search.svg" alt="Search Logo" style={{ marginRight: '16px' }} />
                Search for a course e.g COMP1511
            </Flex>
            {isSearchClicked && (
                <div style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '200px',
                    height: '100px',
                    border: '1px solid black',
                    backgroundColor: 'white',
                    zIndex: '9999',
                    textAlign: 'center',
                    borderRadius: '10px',
                    padding: '20px'
                }}>
                    <Button onClick={handleSearchClick}>Dismiss</Button>
                </div>
            )}
        </>
    );
}

export default searchbar;
