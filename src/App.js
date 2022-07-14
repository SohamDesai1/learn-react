import  Darkmode  from "./components/Darkmode";
import React from "react";
 let a = 'Soham';
function App() {
  return (
    
    <><div className="demo">
      <p>This is a simple React app</p>
      <p>{a} is learning React</p>
    </div>
    <Darkmode/>
    </>
    
  );
}

export default App;