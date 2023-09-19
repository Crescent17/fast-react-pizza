import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css'
import Home from "./ui/Home.jsx";
import Menu from "./features/menu/Menu.jsx";
import Cart from "./features/cart/Cart.jsx";
import Order from "./features/order/Order.jsx";
import CreateOrder from "./features/order/CreateOrder.jsx";
import AppLayout from "./ui/AppLayout.jsx";

const router = createBrowserRouter(
    [{
        element: <AppLayout/>, children:
            [{path: '/', element: <Home/>},
                {path: 'menu', element: <Menu/>},
                {path: 'cart', element: <Cart/>},
                {path: 'order/new', element: <CreateOrder/>},
                {path: 'order/:orderId', element: <Order/>}]
    },
    ])
export default function App() {
    return <RouterProvider router={router}/>
}