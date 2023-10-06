
import { useState } from 'react';
import './App.css';



function App() {
  const [schet, setSchet] = useState(0);

  const schetHandl = (e) => {
    if(e.target.id === "button-1"){
      setSchet(schet - 1)
    } else if (e.target.id === "button-2"){
      setSchet(schet + 1)
    }
  }
  return (
    <div className="App">
      <div class="container">
        <span type="text" class="s-text">С ч е т ч и к</span>
        <span type="text" class="schet-text">{schet}</span>
        <div class="container-button">
          <button onClick={e => schetHandl(e)} class="btn" id="button-1">-</button>
          <button onClick={e => schetHandl(e)} class="btn" id="button-2">+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
