import './App.css';
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import auth from './firebase.init';


function App() {
  const [users, setUsers] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

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
  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
      .then(result => {
        const user = result.user;
        setUsers(user)
      })
      .catch(error => {
        console.error(error)
      })
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleEmail = (event) => {
    const email = event.target.value;
    setEmail(email)
  }
  const handlePassword = (event) => {
    const password = event.target.value;
    setPassword(password)
  }

  const createUser = () => {

    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        setUsers(user)

      })
      .catch(error => {
        console.error(error)
      })
    setEmail('')
    setPassword('')


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
      <div className='form-field'>
        <form onSubmit={createUser}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder='Enter name' required />
          <label htmlFor="email">Email</label>
          <input onBlur={handleEmail} type="email" name="email" placeholder='Enter email' required />
          <label htmlFor="name">Password</label>
          <input onBlur={handlePassword} type="password" name="password" placeholder='Enter password' required />
          <br />
          <input className='btn' type="submit" value='Sign Up' />
        </form>

      </div>
      <div className='field'>
        {users.uid ? <button onClick={handleSignOut}>Sign Out</button> :
          <>
            <button onClick={handleGoogleSignIn}>Google Sing In</button>
            <button onClick={handleGithubSignIn}>Github Sign In</button>
            <button onClick={handleFacebookSignIn}>Facebook Sign in</button>
          </>}
      </div>

      <div className=''>
        <h4>{users.displayName ? `User : ${users.displayName}` : ''}</h4>
        <h4>{users.email ? `Email : ${users.email}` : ''}</h4>
        <img src={users.photoURL} alt="" />
      </div>
    </div>
  );
}

export default App;