import './App.css';
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';
import auth from './firebase.init';


function App() {
  const [users, setUsers] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUsers(user)
      })
      .catch(error => {
        console.error(error)
      })
  }
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const user = result.user;
        setUsers(user)
      })
      .catch(error => {
        console.error(error)
      })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUsers({})
      })
      .then(error => {
        console.error(error)
      })
  }


  return (
    <div className='container'>
      <h2>Firebase Authentication</h2>
      <div className='field'>
        {users.uid ? <button onClick={handleSignOut}>Sign Out</button> :
          <>
            <button onClick={handleGoogleSignIn}>Google Sing In</button>
            <button onClick={handleGithubSignIn}>Github Sign In</button>
            <button>Facebook Sign in</button>
          </>}
      </div>
      <div className=''>
        <h4>{users.displayName ? `User : ${users.displayName}` : ''}</h4>
        <h4>{users.email ? `Email : ${users.email}` : ''}</h4>
        <img src={users.photoURL ? users.photoURL : 'Not available'} alt="" />

      </div>


    </div>
  );
}

export default App;
