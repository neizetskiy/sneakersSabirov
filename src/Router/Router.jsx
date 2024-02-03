import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import Homepage from "../Pages/Home";

import Catalogpage from "../Pages/Catalog";
import Favoritepage from "../Pages/Favorite";
import Orderspage from "../Pages/Orders";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Homepage />
            },
            {
                path: "/catalog",
                element: <Catalogpage />
            },
            {
                path: "/favorite",
                element: <Favoritepage />
            },
            {
                path: "/orders",
                element: <Orderspage />
            }
        ]
    }
])

export default router