import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import Resume from "./pages/Resume.jsx";
import Contact from "./pages/Contact.jsx";
import Root from "./pages/Root.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import ProjectDescriptionPage from "./pages/ProjectDescriptionPage.jsx";

const router = createBrowserRouter([
    {
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/projects",
                element: <ProjectsPage />,
            },
            {
                path: "projects/:projectId",
                element: <ProjectDescriptionPage />,
            },
            {
                path: "/resume",
                element: <Resume />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
        ],
        errorElement: <NotFound />,
    },
]);

function App() {
    return (
        <div className="w-full">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
