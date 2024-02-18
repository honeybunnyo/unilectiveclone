import React, { useState } from 'react';

const header = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
      setClicked(!clicked);
    };
  
    return (
        <div>
            <div>DevSoc presents</div>
            <div
            style={{ fontSize: "70px", fontWeight: 'bold', color: clicked ? '#FF96E9' : '#1279f2', cursor: 'pointer' }}
            onClick={handleClick}>unilectives </div>
            <div style={{marginBottom: "40px"}}><strong>Your one-stop shop for UNSW course and elective reviews.</strong></div>
        </div>
    )
}

export default header