import React from 'react';
import { useSelector } from 'react-redux';

 const Generated = () => {


    // we access the list of URLs from our state using useSelector here, that will be populate onClick of the generate button
    const images = useSelector((state)=> state.app.urlList);



    // this is the array that will actually be rendered to the page, of which we will push an <img/> html element with the src correctly populated by the URL in the urlList
    const showImages = []
    // we push the img elements into the show images iteratively to keep our code DRY
        // each time the urlList is update by clicking generate, we will push a new img element into the showImages array, which will then render
        
    // PLEASE NOTE: There is another button in each component called Save, and this button stores the URL of the image in our SQL database
    for (let i = 0; i<images.length;i++){
        showImages.push(
        <div className = 'imageContainer'>
        <img id = {`image${[i]}`} className='generatedImages' src={images[i]} />
        <button id='saveImage' className="saveButton" onClick={
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
        } >Save</button>
        </div>
        )
    }
    // as you can see we are just rendering each image in our showImages array 
    return(
         <div className = 'generatedComponent'>
            {/* <div className = 'imageContainer'> */}
            {/* <img src="https://i.ibb.co/zsrNNS4/Poloroid.png"></img> */}
            {showImages}
            {/* </div> */}
        </div>
    )
 }

 export default Generated