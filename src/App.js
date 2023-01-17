// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
   const[mode , setMode] = useState('dark'); //whether dark mode is enable or not
   const[alert , setAlert] = useState(null);

   const showAlert = ( message , type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
   }
  const toggleMode = ()=>{
      if(mode === 'light')
      {
        setMode('dark');
        document.body.style.backgroundColor = 'black';
        showAlert("Dark mode has been enabled" , "success");
      }
      else{
        setMode('light');
        document.body.style.backgroundColor='light';
        showAlert("Light mode has been enabled" , "success");
      }
   }
  return (
    <>
    <BrowserRouter>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" home="Home"/> */}
      <Navbar title="TextUtils" mode={mode} setMode={setMode} toggleMode={toggleMode} home="Home" />
      {/* <Navbar /> */}
      <div className="container my-3" >
      <Alert alert ={alert}/>
      {/* <TextForm showAlert={showAlert} mode={mode}  heading="Enter the text to analyze"/> */}
      
      <Routes>
        {/* /user --> component1
        /users/home --> component2 */}
        <Route exact path="/" element={
          <TextForm showAlert={showAlert} mode={mode} toggleMode={toggleMode} heading="Enter the text to analyze"/>
        } />
          {/* <Route index element={<About />} /> */}
           <Route exact path="/about" element={<About />} />
          {/*<Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
     
      </Routes>
    

      </div>

      {/* <div className="container my-5">
      <About/>
    
      </div> */}

     </BrowserRouter>
    </>
    
  );
}

export default App;
