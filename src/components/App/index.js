import './App.css';
import Comments from '../Comments';
const API_URL = process.env.REACT_APP_API_URL;

function App() {
  return (
    <div className="App">
      <h1>Luis Rodrigues</h1>
      <Comments API_URL={API_URL} />
    </div>
  );
}

export default App;
