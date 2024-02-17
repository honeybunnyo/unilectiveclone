import React, { useState } from 'react';
import { Flex, Box, VStack, Button } from"@chakra-ui/react"

const pagecontent = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

    const [isSearchClicked, setIsSearchClicked] = useState(false);
  
    const handleSearchClick = () => {
      setIsSearchClicked(!isSearchClicked);
    };

  const courses = [
    {
      "course_prefix": "COMP",
      "course_code": 1511,
      "course_title": "Programming Fundamentals",
      "average_stars": 4.8,
      "total_reviews": 68,
      "offered_terms": ["Term 1", "Term 2", "Term 3"]
    },
    {
      "course_prefix": "COMP",
      "course_code": 1531,
      "course_title": "Software Engineering Fundamentals",
      "average_stars": 3.9,
      "total_reviews": 47,
      "offered_terms": ["Term 1", "Term 2", "Term 3"]
    },
    {
      "course_prefix": "COMP",
      "course_code": 1521,
      "course_title": "Computer Systems Fundamentals",
      "average_stars": 4,
      "total_reviews": 40,
      "offered_terms": ["Term 1", "Term 2", "Term 3"]
    },
    {
      "course_prefix": "COMP",
      "course_code": 2521,
      "course_title": "Data Structures and Algorithms",
      "average_stars": 4,
      "total_reviews": 36,
      "offered_terms": ["Summer", "Term 1", "Term 2", "Term 3"]
    },
    {
      "course_prefix": "COMP",
      "course_code": 2511,
      "course_title": "Object-Oriented Design & Programming",
      "average_stars": 3,
      "total_reviews": 33,
      "offered_terms": ["Term 1", "Term 2", "Term 3"]
    },
    {
      "course_prefix": "COMP",
      "course_code": 3311,
      "course_title": "Database Systems",
      "average_stars": 4,
      "total_reviews": 33,
      "offered_terms": ["Term 1", "Term 3"]
    }
  ];

  const chunkArray = (arr, size) => {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
  };

  const coursesRows = chunkArray(courses, 3);

  return (
    <Box mx={130}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>DevSoc presents</div>
        <div
          style={{ fontSize: "50px", fontWeight: 'bold', color: clicked ? '#FF96E9' : '#1279f2', cursor: 'pointer' }}
          onClick={handleClick}>unilectives </div>
        <div><strong>Your one-stop shop for UNSW course and elective reviews.</strong></div>
        <Flex style={{padding: '8px', color:"#989EFF", borderRadius: '6px', cursor: 'pointer', border: '2px solid #989EFF'}} onClick={handleSearchClick}>
        <img src="/search.svg" alt="Search Logo" style={{ marginRight: '16px'}}/>
          Search for a course e.g COMP1511</Flex>
        <div>Sort By</div>
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
          borderRadius: '10px'
        }} 
        >
          <Button onClick={handleSearchClick}>Dismiss</Button>
        </div>
      )}
        <div>
          {coursesRows.map((row, index) => (
            <Flex key={index} mt={"30px"}>
              {row.map((course, index) => (
                <Box backgroundColor={"#FBFBFB"} key={index} flex="1" minWidth="200px" height="200px" borderRadius="md" boxShadow="lg" p={4} mr={10} >
                    <VStack alignItems="flex-start">

                  <Flex flexDirection="row" justifyContent="space-between" width="100%">
                    <div style={{fontWeight: "790", fontSize: "20px" }}>{course.course_prefix + course.course_code}</div>
                    <VStack alignItems="flex-start" spacing={2}>
                      <div style={{fontSize: "24px", color: "#CDA4FF"}}> ★★★★★ </div>
                      <div style={{fontSize: "12px", color: "grey", marginTop: "-10px" }}> {course.total_reviews} reviews</div>
                    </VStack>
                  </Flex >
                    <div style={{fontSize: "14px", marginBottom: "50px"}}>{course.course_title}</div>

                    <Flex>
                      {course.offered_terms.map((term, index) => (
                        <Button
                          key={index}
                          style={{
                            background: "#DBF4FF",
                            height: "24px",
                            padding: "4px 8px",
                            borderRadius: "20px",
                            fontWeight: "light",
                            fontSize: "12px",
                            marginRight: "8px"
                          }}
                        >
                          {term}
                        </Button>
                      ))}
                  </Flex>

                  
                  </VStack>
                </Box>
              ))}
            </Flex>
          ))}
        </div>
      </div>
    </Box>
  );
}

export default pagecontent