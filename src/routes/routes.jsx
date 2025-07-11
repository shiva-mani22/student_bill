import { createBrowserRouter } from "react-router-dom";
import Register from "../components/user/Register";
import Login from "../components/user/Login";
import Main from "../components/user/Main/main";
import About from "../components/user/Main/about/About";
import FilterBills from "../components/user/Main/billFilter/FilterBills";
import AddBills from "../components/user/Main/addBills/AddBills";
import Home from "../components/user/Main/home/Home";
import UpdateBills from "../components/user/Main/updateBills/UpdateBills";
import DeleteBills from "../components/user/Main/deleteBills/DeleteBills";


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
            },{
                path:"updateBills",
                element:<UpdateBills></UpdateBills>
            },{
                path:"deleteBills",
                element:<DeleteBills></DeleteBills>
            }
        ]
    }

])
export default routes;
