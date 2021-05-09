import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"; 
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { selectUser } from "./features/userSlice";
import Login from "./Login";
import { auth } from "./firebase";
import { login, logout } from "./features/userSlice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("User is ", authUser);
      if(authUser){
        // User is logged in
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }))
      } else {
        // User is logged out
        dispatch(logout());
      }
    })
  }, [dispatch])

  return (
    <div className="app">
      {
        user ? (
          <>
            <Sidebar />
            <Chat />
          </>
        ): (
          <Login />
        )
      }

    </div>
  );
}

export default App;
