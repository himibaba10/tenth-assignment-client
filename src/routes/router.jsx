import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import SingleBrand from "../Pages/SingleBrand";
import AddProduct from "../Pages/AddProduct";

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
    ],
  },
]);

export default router;
