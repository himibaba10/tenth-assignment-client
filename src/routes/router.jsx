import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import SingleBrand from "../Pages/SingleBrand";
import AddProduct from "../Pages/AddProduct";
import SingleProduct from "../Pages/SingleProduct";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../Pages/NotFound";
import Cart from "../Pages/Cart";
import UpdateProduct from "../Pages/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-product",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/brands/:name",
        loader: ({ params }) =>
          fetch(
            `https://tenth-assignment-server-xi.vercel.app/brands/${params.name}`
          ),
        element: <SingleBrand />,
      },
      {
        path: "/products/:id",
        loader: ({ params }) =>
          fetch(
            `https://tenth-assignment-server-xi.vercel.app/products/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <SingleProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/products/update/:id",
        loader: ({ params }) =>
          fetch(
            `https://tenth-assignment-server-xi.vercel.app/products/update/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <UpdateProduct />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
