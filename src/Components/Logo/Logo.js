import React from 'react';
import Tilt from 'react-tilt';
import gojo from './gojo.png';
import './Logo.css';
const Logo = () =>{
    return(
    <div  className='ma4 mt0'>
        <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 300, width: 300 }} >
        <div className="Tilt-inner pa3"> <img style={{paddingTop:'60px'}} src={gojo} alt="logo"/> </div>
        </Tilt>
    </div>
    )
};
export default Logo;