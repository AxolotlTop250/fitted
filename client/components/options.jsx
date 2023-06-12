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
                {/* <div class="buttons"> */}
                    {/* <input placeholder='Gender' ref={genderRef} id='gender' type='gender' /> */}
                    {/* <input placeholder='Top'  ref={topRef}  id='top' type='top' /> */}
                    {/* <input placeholder="Bottom" ref={bottomRef} id='bottom' type = 'bottom' /> */}
                    {/* <input placeholder="Shoes" ref={shoesRef} id='shoes' type='shoes' />
                    {/* <input placeholder="Occasion" ref={occasionRef} id='occasion' type='occasion' /> */}
                    {/* <input placeholder="Weather" ref={weatherRef} id='weather' type='weather' />  */}
                    {/* </div> */}
                
                <div className="inputContainer">
                    <div className="form__group field">
                        <input type="input" className="form__field" ref={genderRef} placeholder="Gender" name="gender" id='gender' required />
                        <label for="gender" className="form__label">Gender</label>
                    </div>
                    <div className="form__group field">
                        <input type="input" className="form__field" ref={topRef} placeholder="Top" name="top" id='top' required />
                        <label for="top" className="form__label">Top</label>
                    </div>
                    <div className="form__group field">
                        <input type="input" className="form__field" ref={bottomRef} placeholder="Bottom" name="bottom" id='bottom' required />
                        <label for="bottom" className="form__label">Bottom</label>
                    </div>
                    <div className="form__group field">
                        <input type="input" className="form__field" ref={shoesRef} placeholder="Shoes" name="shoes" id='shoes' required />
                        <label for="shoes" className="form__label">Shoes</label>
                    </div>
                    <div className="form__group field">
                        <input type="input" className="form__field" ref={weatherRef} placeholder="Weather" name="weather" id='weather' required />
                        <label for="weather" className="form__label">Weather</label>
                    </div>
                </div>
                <div className="generate">
                    <button onClick={handleClick} className="generateButton">Generate</button>
                </div>

            </form>
        </div>
    )
}

export default Options