import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import Login from '../pages/login';
import Register from '../pages/Register';
import TeamCollaboration from '../pages/TeamCollaboration';
import Team from '../pages/Team';


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/Teamspace',
                element: <TeamCollaboration/>
            },
            {
                path: '/team/:id',
                element: <Team/>
            }
        ],
        
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    },
   
])

export default routes;