import { createBrowserRouter } from "react-router-dom";
import Index from "./landing/Index.jsx";
import Home from "./landing/pages/Home.jsx"

import Authentication from "./authentication/Authentication.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Index />,
        children: [
            {
                path: "",
                element: <Home />,
            }
        ],
    },
    {
        path: "/auth",
        element: <Authentication />,
    }
]);

export default router;