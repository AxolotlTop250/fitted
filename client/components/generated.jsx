import React from 'react';
import { useSelector } from 'react-redux';

 const Generated = () => {

    const images = useSelector((state)=> state.app.urlList);

    const showImages = []

    for (let i =0; i<images.length;i++){
        showImages.push(<img className='generatedImages' src={images[i]} />)
    }

    return(
        <div className = 'generatedComponent'>
            {showImages}
        </div>
    )
 }

 export default Generated