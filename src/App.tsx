import './App.css';
import Main from './components/Main';

const imageURL =
  "https://assets.talmudyerushalmi.com/manuscripts/venice/0303_FL77977460.jpg";

function App() {
  return (
    <div className="App">
      <Main imageURL={imageURL} />
    </div>
  );
}

export default App;
