import * as React from 'react';
import {useState} from 'react'

export default function TextFields(props) 
{
    function fn()
    {
        console.log(text);
        let temp = text.toUpperCase();      
        setText(temp);
        props.showalertfn("Changed to Upper Case", "Success");

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
        props.showalertfn("Changed to lower Case", "Success");
    }

    function fn3()
    {      
        setText("");
        props.showalertfn("Cleared", "Success");
    }
    const [text,setText]=useState("");

    function prv()
    {
        if(text.length==0)
        {
            return "Enter text in text box to preview it";
        }
        return text;
    }




  return (
    <div style ={props.mode1}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" id="wordapp" rows="6" value={text} onChange={fn1}></textarea>
        </div>

        <button type="button" onClick={fn} className="btn btn-info ">Upper Case</button>
        <button type="button" onClick={fn2} className="btn btn-info mx-3">Lower Case</button>
        <button type="button" onClick={fn3} className="btn btn-info">Clear</button>

        <div className="my-3">
        <h2>Your text Summary</h2>
        <p>Total words are {text.length==0? 0:text.split(" ").length} Character count is {text.length}</p>
        <h2>Preview</h2>
        <p>{prv()}</p>
        </div>
    </div>
  );
}




   