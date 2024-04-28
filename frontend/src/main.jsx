import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignIn from "./pages/SignIn.jsx";
import Home from "./pages/Home.jsx";
import Error from "./components/Error.jsx";
import FlatsListing from "./pages/FlatsListing.jsx";
import FlatDetails from "./pages/FlatDetails.jsx";
import PostFlat from "./pages/PostFlat.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignIn />,
      },
      {
        path: "/flats",
        element: <FlatsListing />,
      },
      {
        path: "/flats/:id",
        element: <FlatDetails />,
      },
      {
        path: "/flats/postflat",
        element: <PostFlat />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
