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
import WishList from "./pages/WishList.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import SignUp from "./pages/SignUp.jsx";

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
        element: <SignUp />,
      },
      {
        path: "/wishlist",
        element: <WishList />,
      },
      {
        path: "/listings",
        element: <WishList />,
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
    <Provider store={store}>
      <RouterProvider router={appRouter}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
