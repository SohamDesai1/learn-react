import './demo.css';
import  Props  from "./components/Props";
 let a = 'Soham';
function App() {
  return (
    <><div className="demo">
      <h1>Hello World</h1>
      <p>This is a simple React app</p>
      <p>{a}</p>
    </div>
    <Props num = 'second'/>
    </>
    
  );
}

export default App;