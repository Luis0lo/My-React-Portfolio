// import React, { useState } from 'react';
// import Login from './Login';
// import Register from './Register';
// import Forgot from './Forgot';

// const Visitor = () => {
//   const [userName, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const [data, setData] = useState([]);

//   function handleSubmit(e) {
//     e.preventDefault();
//     setData({ userName: userName, password: password });
//   }
//   function handleName(e) {
//     setUsername(e.target.value);
//   }
//   function handlePassword(e) {
//     setPassword(e.target.value);
//   }
//   function handleEmail(e) {
//     setEmail(e.target.value);
//   }

//   return (
//     <div>
//       <h2>Visitor Section</h2>
//       <Login
//         handleName={handleName}
//         handlePassword={handlePassword}
//         handleSubmit={handleSubmit}
//       />
//       {/* <Register /> */}
//       {/* <Forgot /> */}
//     </div>
//   );
// };

// export default Visitor;
