import './App.css';
import Counter from './Components/Counter';
import NoteState from './Context/NoteState';


function App() {
  return (
    <div className="App">
     <NoteState>
      <Counter/>
     </NoteState>
    </div>
  );
}

export default App;
