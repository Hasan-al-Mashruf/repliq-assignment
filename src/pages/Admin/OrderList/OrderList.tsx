import { useContext } from "react";
import {
  ProductStoreContext,
  ProductStoreContextType,
} from "../../../context/ProductStoreProvider";
import { ProductType } from "../../../interfaces/interfaces.site";
import { cartImg } from "../../../assets";

const OrderList = () => {
  const { orderList, setOrderList } = useContext(
    ProductStoreContext
  ) as ProductStoreContextType;

  const handleDelete = (customerId: string) => {
    // Filter out the customer with the specified ID
    const updatedCustomerList = (orderList as ProductType[]).filter(
      (customer) => customer.id !== customerId
    );
    // Update the customer list state
    setOrderList(updatedCustomerList);
  };

  const isOrderExist = orderList && orderList.length > 0;

  return (
    <div>
      {isOrderExist && (
        <table className="table">
          <thead>
            <tr>
              <th>Index</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Brand</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orderList.length > 0 &&
              (orderList as ProductType[]).map((product, index) => {
                const { price, name, brand, image, quantity, id } = product;
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      {" "}
                      <div className="avatar avatar-squared avatar-ring-primary">
                        <img src={image} alt={name} />
                      </div>
                    </td>
                    <td>{name}</td>
                    <td>{price}</td>
                    <td>{brand}</td>
                    <td>{quantity}</td>
                    <td
                      onClick={() => handleDelete(id)}
                      className="cursor-pointer"
                    >
                      Delete
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}

      {!isOrderExist && (
        <div className="flex flex-col items-center ">
          <img src={cartImg} alt="cart-image" />
          <p className="text-3xl text-orange-400 mt-4 font-title font-medium">
            You have no order
          </p>
        </div>
      )}
    </div>
  );
};

export default OrderList;
