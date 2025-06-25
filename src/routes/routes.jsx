import { createBrowserRouter } from "react-router-dom";
import Register from "../components/user/Register";
import Login from "../components/user/Login";
import Main from "../components/user/Main/main";
import About from "../components/user/Main/about/About";
import FilterBills from "../components/user/Main/billFilter/FilterBills";
import AddBills from "../components/user/Main/addBills/AddBills";
import Home from "../components/user/Main/home/Home";


let routes=createBrowserRouter([
    {
        path:"/register",
        element:<Register></Register>
    },
    {
        path:"/",
        element:<Login></Login>
    },
    {
        path:"/home",
        element:<Main></Main>,
        children : [
            {
                index:true,
                element:<Home></Home>
            },
            {
                path:"about",
                element:<About></About>
            },{
                path:"filterBills",
                element:<FilterBills></FilterBills>
            },{
                path:"addBills",
                element:<AddBills></AddBills>
            }
        ]
    }

])
export default routes;
