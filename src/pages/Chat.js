import '../styles/pages/chat.css'
import NavBar from '../components/nav-bar/NavBar';
import CoreComponent from '../components/core-component/CoreComponent';

function Chat(){
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

export default Chat;