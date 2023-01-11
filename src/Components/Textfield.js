import * as React from 'react';
import {useState} from 'react'

export default function TextFields(props) 
{
    function fn()
    {
        console.log(text);
        let temp = text.toUpperCase();      
        setText(temp);
    }
    function fn1(event)
    {
        console.log("hi");
        setText(event.target.value);

    }
    function fn2()
    {
        console.log(text);
        let temp = text.toLowerCase();      
        setText(temp);
    }

    function fn3()
    {      
        setText("");
    }
    const [text,setText]=useState("");

  return (
    <>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" id="wordapp" rows="6" value={text} onChange={fn1}></textarea>
        </div>

        <button type="button" onClick={fn} className="btn btn-info ">Upper Case</button>
        <button type="button" onClick={fn2} className="btn btn-info mx-3">Lower Case</button>
        <button type="button" onClick={fn3} className="btn btn-info">Clear</button>

        <div className="my-3">
        <h2>Your text Summary</h2>
        <p>Total words are {text.split(" ").length} Character count is {text.length}</p>
        <h2>Preview</h2>
        <p>{text}</p>
        </div>
    </>
  );
}




    

// <Stack spacing={10} direction="row">
//         <Button variant="outlined" >Convert To Upper Case</Button>
//         </Stack>
//         <Stack spacing={10} direction="row">
//         <Button variant="outlined" onClick={fn2}>Convert To Lower Case</Button>
//         </Stack>

//         <Stack spacing={10} direction="row">
//         <Button variant="outlined" onClick={fn3}>clear text</Button>
//         </Stack>