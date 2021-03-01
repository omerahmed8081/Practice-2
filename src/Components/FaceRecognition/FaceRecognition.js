import React from 'react';
import  './FaceRecognition.css';
const FaceRecognition = ({imageUrl,box}) =>{
    return(
    <div className='center'>
       <div className='absolute mt2'>
       <img id='img1' src={imageUrl} alt='' height='auto' width='500px'/>
       <div className='bounding-box' style={{top:box.topcol,right:box.rightcol,bottom:box.bottomcol,left:box.leftcol}}>
</div>
       </div>
    </div>
    )
};
export default FaceRecognition;