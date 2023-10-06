import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import ServiceDetails from "../components/services/ServiceDetails";
import NotFound from "../pages/notFound/NotFound";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import PrivetRoutes from "./PrivetRoutes";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/service/:id",
                element: <PrivetRoutes><ServiceDetails /></PrivetRoutes>
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    }
])