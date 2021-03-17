import React, {useState } from 'react';
import Header from './Header';
import MainWindow from './MainWindow';
import PopBox from './PopBox';
import Sidebar from './Sidebar';
import Footer from './Footer';

import '../css/VCode.css';


function VCode() {

  const [currentWindow, setcurrentWindow] = useState(null); // current window that is pop uped
    
  
    const [cursorPosition, setcursorPosition] = useState({totalLine:null, line:null, col:null});
    const [fileType, setfileType] = useState('CSS');    //move to parent component
    const [fileName, setfileName] = useState('Projekt 1');    //move to parent component
    const [errors, seterrors] = useState({message: ['hello world',], error:['something went wrong', 'secound wrong '], warning:['some warning here',]}); //move to parent component
 
    return (
    <div className="absoluteContainer">
      {
       currentWindow ? <PopBox window={currentWindow} setwindow={setcurrentWindow}/> : console.log("null false")
      }
         
         
          <div className="container">
              <div className="topContainer">
                <Header window={currentWindow} setwindow={setcurrentWindow}/>
              </div>
              
              <div className="bottomContainer">
                <Sidebar/>
                <MainWindow cursorPosition={cursorPosition} setcursorPosition={setcursorPosition}  fileType={fileType} errors={errors} seterrors={seterrors}/>
              </div>

              <div className="footer">
                <Footer cursorPosition={cursorPosition} fileType={fileType} errors={errors} seterrors={seterrors}/>
              </div>
          </div>
    </div>
  );
}

export default VCode;
