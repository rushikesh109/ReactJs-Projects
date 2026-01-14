import React from "react";

const App = () => {

  const btnClicked = (event) => {
    console.log("Button Clicked", event.type);
  }


  const inputChnange = (event) => {
    console.log("Input Changed:", event.target.value);
  }
  
  const pageScolling = (scrollValue) => {
    console.log("Page Scrolled:", scrollValue);
  }


  return (
    <div
     onWheel={(elem)=> {
      pageScolling(elem.deltaY);
      }}>
      <div>
        <button onClick={btnClicked}>Click Me</button>
      <input
        onClick={btnClicked}
        onChange={inputChnange}
        type="text"
        placeholder="Type here..."
      />

      <div
      onMouseMove={(elem)=>{
        console.log(elem.clientX, elem.clientY);
        
      }}
      className="box">

      </div>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
      </div>
    </div>
    
  );
};

export default App;
