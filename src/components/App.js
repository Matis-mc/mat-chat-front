import '../styles/App.css';
import ContactLeftPannel from './contact-left-pannel/ContactLeftPannel';
import CoreComponent from './CoreComponent';
import NavBar from './nav-bar/NavBar';

function App() {


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

export default App;
