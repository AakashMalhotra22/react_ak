import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Navbar from './Components/Navbar';
import TextFields from './Components/Textfield';
import About from './Components/About'

let sname = "aakash";
function App() 
{
  return (
    <div className='d1'>
       <Navbar title ={"Logo"} Home={"Home"} about= {"About"}/>
      <div className="container my-3">
        <TextFields heading ={"Enter your text"}/>
      </div>
      
      <div className="container my-3">
        <About/>
      </div>
      
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