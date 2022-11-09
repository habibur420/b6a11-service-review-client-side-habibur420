import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from '../../Pages/Home/Home/Home'
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import MyReview from "../../Pages/Review/MyReview";
import AddService from "../../Pages/Services/AddService";
import AllServices from "../../Pages/Services/AllServices";
import ServiceDetails from "../../Pages/Services/ServiceDetails";
import PrivateRoutes from "../PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'register',
                element: <Register/>
            },
            {
                path:'/services',
                element: <AllServices/>
            },
            {
                path: 'service/details/:id',
                element: <ServiceDetails/>,
                loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`)
            },
            {
                path: 'add/service',
                element: <PrivateRoutes><AddService/></PrivateRoutes>,

            },
            {
                path: 'my/review',
                element: <PrivateRoutes><MyReview/></PrivateRoutes>
            }


        ]
    }
])