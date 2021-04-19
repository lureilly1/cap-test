import './App.css';
import { useContext } from 'react'
import { EngineContext } from '@motor-js/core'

function App() {

  const { engine } = useContext(EngineContext)

  console.log('engine: ',engine)
  
  return (
    <div className="App">
    </div>
  );
}

export default App;
