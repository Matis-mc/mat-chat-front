import '../styles/pages/chat.css'
import NavBar from '../components/nav-bar/NavBar';
import CoreComponent from '../components/core-component/CoreComponent';
import {Navigate} from "react-router-dom"
import AuthenticationManager from '../components/utils/AuthenticationManager';
import { useState } from 'react';

function Chat(){

    const [isAuth, setAuth] = useState(
      AuthenticationManager.isLoggedIn()
    )

    if(!isAuth){
      return <Navigate to="/login"/>
    } else {
    return (
        <div className="App">
          <div className="lat-menu-start">
            <NavBar></NavBar>
          </div>
          <div className="core-div">
            <CoreComponent></CoreComponent>
          </div>
          <div className="lat-menu-end"></div>
        </div>
      );
    }
}

export default Chat;