import React, { useRef } from 'react';
import { generate } from '../actions/actions';
import { useDispatch } from 'react-redux'


const Options = () =>{
    const genderRef = useRef()
    const topRef = useRef()
    const bottomRef = useRef()
    const shoesRef = useRef()
    //const occasionRef = useRef()
    const weatherRef = useRef()
    const dispatch = useDispatch();
    const generateImage = (url) => {
        dispatch(generate(url));
      };

    //   prompt: `Standing ${gender} wearing ${top} ${bottom} and ${shoes} in ${occasion} wear on a ${weather} day.`
    const handleClick = (e) => {  

        e.preventDefault();

        const gender = genderRef.current.value;
        const top = topRef.current.value;
        const bottom = bottomRef.current.value;
        const shoes = shoesRef.current.value;
        // const occasion = occasionRef.current.value;
        const weather = weatherRef.current.value;
        
        fetch('/', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({prompt: `${gender} on a ${weather} day wearing a ${top}, ${bottom}, and ${shoes}`})
        })
        .then(response => response.json())
        .then(response => {
          const uri = response.data;
          console.log(uri);
          generateImage(uri);
        })
    };



    return(
        <div className='optionsComponent'>
            <form onSubmit={e => handleClick(e)}>
                <input placeholder='Gender' ref={genderRef} id='gender' type='gender' />
                <input placeholder='Top'  ref={topRef}  id='top' type='top' />
                <input placeholder="Bottom" ref={bottomRef} id='bottom' type = 'bottom' />
                <input placeholder="Shoes" ref={shoesRef} id='shoes' type='shoes' />
                {/* <input placeholder="Occasion" ref={occasionRef} id='occasion' type='occasion' /> */}
                <input placeholder="Weather" ref={weatherRef} id='weather' type='weather' />
                <button onClick={handleClick}>Generate</button>

            </form>
        </div>
    )
}

export default Options