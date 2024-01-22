import './App.css';
import Clicker from './Components/Clicker';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header title='Clicker App'/>
      <Clicker />
    </div>
  );
}

export default App;