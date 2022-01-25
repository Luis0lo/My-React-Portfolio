import './App.css';
import Comments from '../Comments';
import Visitor from '../Visitor'
const API_URL = process.env.REACT_APP_API_URL;

function App() {
  return (
    <div className="App">
      <h1>Luis Rodrigues</h1>
      <Comments API_URL={API_URL} />
<Visitor />
    </div>
  );
}

export default App;
