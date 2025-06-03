import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import About from "./About.jsx";
import NotFound from "./NotFound.jsx";
import ResponsiveAppBar from "./components/appbar/Appbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <ResponsiveAppBar />
                <App />
            </>
        ),
    },
    {
        path: "/about",
        element: (
            <>
                <ResponsiveAppBar />
                <About />
            </>
        ),
    },
    {
        path: "*",
        element: (
            <>
                <ResponsiveAppBar />
                <NotFound />
            </>
        ),
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
