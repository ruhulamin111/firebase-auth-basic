import './App.css';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from 'react';
import auth from './firebase.init';


function App() {
  const [users, setUsers] = useState({});
  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUsers(user)
      })
      .catch(error => {
        console.error(error)
      })
  }


  return (
    <div className='container'>
      <h2>Firebase Authentication</h2>
      <div className='field'>
        <button onClick={googleSignIn}>Google Sing In</button>
        <br />
        <br />
        <button>Github Sign In</button>
        <br />
        <br />
        <button>Facebook Sign in</button>
      </div>
      <div className=''>
        <h4>User: {users.displayName}</h4>
        <h4>Email: {users.email}</h4>
        <img src={users.photoURL} alt="" />

      </div>


    </div>
  );
}

export default App;
