import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import SingleBrand from "../Pages/SingleBrand";
import AddProduct from "../Pages/AddProduct";
import SingleProduct from "../Pages/SingleProduct";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-product",
        element: <AddProduct />,
      },
      {
        path: "/brands/:name",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/brands/${params.name}`),
        element: <SingleBrand />,
      },
      {
        path: "/products/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
        element: <SingleProduct />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
