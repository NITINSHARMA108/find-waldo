import React from 'react'

import img1 from '../assets/waldo.jpg';

import img2 from '../assets/wally.jpg';

const Characters = function() {
    return (
        <div style={{display:'flex'}}>
            <img src={img1} alt="Waldo" />
            <p style={{margin:'auto 10px'}}>Waldo</p>
            <img src={img2} alt="Wally" />
            <p style={{margin:'auto 10px'}}>Wally</p>
        </div>
    )
}

export default Characters
