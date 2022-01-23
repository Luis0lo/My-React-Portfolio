import './App.css';
import Comments from '../Comments/CommentsForm';
import CommentsViewer from '../Comments/CommentsViewer'
const API_URL = process.env.REACT_APP_API_URL;

function App() {
  return (
    <div className="App">
      <h1>Luis Rodrigues</h1>
      <p>
        <a href="https://withluis.com/">Old Portfolio</a>
      </p>
      <Comments API_URL={API_URL}/>
      <CommentsViewer API_URL={API_URL}/>
    </div>
  );
}

export default App;
