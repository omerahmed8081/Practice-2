import React from 'react';
const ImageLinkForum = ({onInputChange, onButtonSubmit}) =>{
    return(
    <div >
        <p className='f3'>
            {'This magic brain will detect faces in your pictures.'}
        </p>
        <div >
            <div style={{width:'700px'}}className='pa4 br3 shadow center'>
            <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
            <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' style={{cursor:'pointer'}} onClick={onButtonSubmit}>Detect</button>
            </div>
        </div>
    </div>
    )
};
export default ImageLinkForum;