import React from 'react';
import { useSelector } from 'react-redux';

 const Generated = () => {

    const images = useSelector((state)=> state.app.urlList);




    const showImages = []

    for (let i = 0; i<images.length;i++){
        showImages.push(<img id = {`image${[i]}`} className='generatedImages' src={images[i]} />,
        <button id={`saveImage${i}`} onClick={
            function save(e) {
                e.preventDefault();
                fetch('/store', {
                    method: 'POST',
                    headers: {
                    "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        url: document.getElementById(`image${i}`).src,
                        
                    })
                })
                // .then(response => response.json())
                .then(response => console.log(response))
            }
        } >Save</button>)
    }

    return(
        <div className = 'generatedComponent'>
            {showImages}
        </div>
    )
 }

 export default Generated