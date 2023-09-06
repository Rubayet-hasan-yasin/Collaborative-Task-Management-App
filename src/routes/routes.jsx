import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import Login from '../pages/login';


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            }
        ],
        
    },
    {
        path: '/login',
        element: <Login/>
    }
])

export default routes;