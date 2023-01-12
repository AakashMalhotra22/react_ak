import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Navbar from './Components/Navbar';
import TextFields from './Components/Textfield';
import About from './Components/About'
import Alert from './Components/Alert'
import {useState} from 'react'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {

  const [mode, setmode] = useState("light");
  const [mode1,setmode1] = useState
  ({
    color:'black'
  });
  
  const[alert,setalert] = useState(null);

  function showalert(message,type){
    setalert(
      {
        msg: message,
        type: type
      })
      setTimeout(()=>{
        setalert(null)
      },2000);
  }

  function darkmode()
  {
    if(mode==='light')
    {
      setmode("dark");
      setmode1({
        color:'white'
      })
      document.body.style.backgroundColor='#042743'
      showalert("Dark Mode is enabled", "Success");
      
    }
    else
    {
      setmode("light");
      setmode1({
        color:'black'
      })
      document.body.style.backgroundColor='white'
      showalert("Light Mode is enabled", "Success");
      
    }
  }


  return (
    <div className='d1'>
      {/* <Router> */}
       <Navbar title ={"Logo"} Home={"Home"} about= {"About"} mode ={mode} darkmode={darkmode}/>
       <Alert alert ={alert}/>
       

      <div className="container my-3">
      <TextFields heading ={"Enter your text"} mode1={mode1} showalertfn={showalert}/>
        {/* <Routes>
          <Route path="/About" element={<About/>}/>
            
          <Route path="/" 
          element={<TextFields heading ={"Enter your text"} mode1={mode1} showalertfn={showalert}/>}/>
        </Routes>
         */}
      </div>      
      {/* </Router> */}
    </div>
    
  );
}

export default App;













// <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>