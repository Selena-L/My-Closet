import top1 from './top1.png';
import top2 from './top2.png';
import top3 from './top3.png';
import bottom1 from './bottom1.png';
import bottom2 from './bottom2.png';
import bottom3 from './bottom3.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={top1} className="App-top1" alt="top1" />
        <img src={top2} className="App-top2" alt="top2" />
        <img src={top3} className="App-top3" alt="top3" />
        <img src={bottom1} className="App-bottom1" alt="bottom1" />
        <img src={bottom2} className="App-bottom2" alt="bottom2" />
        <img src={bottom3} className="App-bottom3" alt="bottom3" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          My Clothes
      </header>
    </div>
  );
}

export default App;
