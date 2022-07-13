import  State  from "./components/State";
 let a = 'Soham';
function App() {
  return (
    <><div className="demo">
      <p>This is a simple React app</p>
      <p>{a} is learning React</p>
    </div>
    <State heading = 'Text'/>
    </>
    
  );
}

export default App;