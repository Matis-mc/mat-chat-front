import { createBrowserRouter } from 'react-router-dom';
import Chat from "../pages/Chat";
import ErrorPage from '../pages/ErrorPage';
import Subscribe from '../pages/Subscribe';
import Login from '../pages/Login';


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Chat/>,
      errorElement: <ErrorPage/> 
    },
    {
      path: "/login",
      element: <Login/>,
      errorElement: <ErrorPage/>  
    },
    {
      path: "/subscribe",
      element: <Subscribe/>,
      errorElement: <ErrorPage/> 
    }
]);