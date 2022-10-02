import './App.css';
import Popup from './components/Popup';

const imageURL =
  "https://assets.talmudyerushalmi.com/manuscripts/venice/0303_FL77977460.jpg";

function App() {
  return (
    <div className="App">
      <Popup imageURL={imageURL} />
    </div>
  );
}

export default App;
