import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Projects from "./pages/ProjectsPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import Resume from "./pages/Resume.jsx";
import Contact from "./pages/Contact.jsx";
import Root from "./pages/Root.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <NotFound />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
        errorElement: <NotFound />,
      },
      {
        path: "/resume",
        element: <Resume />,
        errorElement: <NotFound />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <NotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
