import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useEffect } from "react";
import { useState } from "react";
import { Badge, Table } from "keep-react";
import { RxCross1 } from "react-icons/rx";
import { ToastContainer, toast } from "react-toastify";
import { ThemeContext } from "../providers/ThemeProvider";

const Cart = () => {
  const [myProducts, setMyProducts] = useState([]);
  const { darkTheme } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    user &&
      fetch(`https://tenth-assignment-server-xi.vercel.app/${user.email}`)
        .then((res) => res.json())
        .then((data) => setMyProducts(data));
  }, [user]);

  const handleDeleteProduct = (id) => {
    fetch(
      `https://tenth-assignment-server-xi.vercel.app/delete-product/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast("The product is deleted");
          setMyProducts(myProducts.filter((product) => product._id !== id));
        }
      });
  };

  return (
    <div className={`flex-1 py-20 ${darkTheme && "bg-blue-950"}`}>
      <div className="section w-full">
        <h2
          className={`text-4xl pb-1 border-b-2 border-primaryColor2 mb-5 ${
            darkTheme && "text-white"
          }`}
        >
          My Cart
        </h2>
        <div>
          {myProducts.length ? (
            <Table>
              <Table.Head>
                <Table.HeadCell className="min-w-[302px]">
                  Product name
                </Table.HeadCell>
                <Table.HeadCell className="min-w-[165px]">Type</Table.HeadCell>
                <Table.HeadCell className="min-w-[124px]">Price</Table.HeadCell>
                <Table.HeadCell className="min-w-[152px]">
                  Action
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y divide-gray-25">
                {myProducts.map((product) => (
                  <Table.Row key={product._id} className="bg-white">
                    <Table.Cell>
                      <p className="text-body-4 font-medium text-metal-500">
                        {product.name}
                      </p>
                    </Table.Cell>
                    <Table.Cell>
                      <p className="text-body-5 font-medium text-metal-500">
                        {product.type}
                      </p>
                    </Table.Cell>
                    <Table.Cell>
                      <p className="text-body-5 font-medium text-metal-500">
                        {product.price}
                      </p>
                    </Table.Cell>
                    <Table.Cell>
                      <div
                        onClick={() => handleDeleteProduct(product._id)}
                        className="inline-block cursor-pointer"
                      >
                        <Badge
                          colorType="light"
                          color="success"
                          className="p-2"
                        >
                          <RxCross1 className="text-2xl text-red-600" />
                        </Badge>
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          ) : (
            <h3
              className={`text-center text-3xl font-medium ${
                darkTheme && "text-white"
              }`}
            >
              You don&apos;t have any product in your cart
            </h3>
          )}
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Cart;
