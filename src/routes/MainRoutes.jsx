import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '../layout/MainLayout';
import About from '../pages/About';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import Home from '../pages/home/Home';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/about",
        element: <About></About>
      },
      {
        path:'/blog',
        element: <Blog></Blog>
      },
      {
        path:'/contact',
        element: <Contact></Contact>
      }
    ]
  },
]);

export default routes
