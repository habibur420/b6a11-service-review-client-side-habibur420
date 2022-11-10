import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from '../../Pages/Home/Home/Home'
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import MyReview from "../../Pages/Review/MyReview";
import UpdateReview from "../../Pages/Review/UpdateReview";
import AddService from "../../Pages/Services/AddService";
import AllServices from "../../Pages/Services/AllServices";
import ServiceDetails from "../../Pages/Services/ServiceDetails";
import PrivateRoutes from "../PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: '/services',
                element: <AllServices />
            },
            {
                path: 'service/details/:id',
                element: <ServiceDetails />,
                loader: ({ params }) => fetch(`https://server-habibur420.vercel.app/service/${params.id}`)
            },
            {
                path: 'add/service',
                element: <PrivateRoutes><AddService /></PrivateRoutes>,

            },
            {
                path: 'my/review',
                element: <PrivateRoutes><MyReview /></PrivateRoutes>
            },
            {
                path: '/review/update/:id',
                element: <UpdateReview />,
                loader: ({params}) => fetch(`https://server-habibur420.vercel.app/review/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog/>
            }


        ]
    }
])