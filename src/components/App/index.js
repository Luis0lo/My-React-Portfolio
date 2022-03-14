import './App.css';
// import Comments from '../Comments';
// import Visitor from '../Visitor';
// import UserAuth from '../UserAuth'
// const API_URL = process.env.REACT_APP_API_URL;
import Header from '../Header';
import Body from '../Body';
import ProfileBar from '../ProfileBar';

function App() {
  return (
    <div className="App">
      <Header />
      <ProfileBar />
      <Body />
      {/* <Comments API_URL={API_URL} /> */}
      {/* <UserAuth /> */}
      {/* <Visitor /> */}
    </div>
  );
}

export default App;
