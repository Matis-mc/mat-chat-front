import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chat from '../pages/Chat'
import Login from '../pages/Login'
import Subscribe from '../pages/Subscribe'
import '../styles/App.css';
import AuthenticationManager from './utils/AuthenticationManager';

function App() {

  authenticationManager = new AuthenticationManager();

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Chat authenticationManager = { authenticationManager } />}>
            <Route path="login" element={<Login authenticationManager = { authenticationManager } />}/>
            <Route path="subscribe" element={<Subscribe authenticationManager = { authenticationManager } />}/>l
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
