import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import AddServices from "../../Pages/AddServices/AddServices";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import UpdateReviews from "../../Pages/MyReviews/UpdateReviews";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Services/Services";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/login', 
                element: <Login></Login>
              },
              {
                path: '/signup', 
                element: <SignUp></SignUp>
              },
              {
                path: '/servicedetails/:serviceid', 
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.serviceid}`)
              },
              {
                path: '/myreviews', 
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
              },
              {
                path: '/updatereviews/:id', 
                element: <UpdateReviews></UpdateReviews>,
                loader: ({ params }) => fetch(`http://localhost:5000/updatereviews/${params.id}`)
              },
              {
                path: '/addservices', 
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
              },

        ]
    },

    {
        path: '*', element: <h5>page not found: 404</h5>
    }

]);

export default router;