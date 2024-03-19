import { useContext } from "react";
import {
  ProductStoreContext,
  ProductStoreContextType,
} from "../../../context/ProductStoreProvider";
import { ICustomer } from "../../../interfaces/interfaces.site";

const CustomerList = () => {
  const { customerList, setCustomerList } = useContext(
    ProductStoreContext
  ) as ProductStoreContextType;

  const handleDelete = (customerId: number) => {
    // Filter out the customer with the specified ID
    const updatedCustomerList = (customerList as ICustomer[]).filter(
      (customer) => customer.id !== customerId
    );
    // Update the customer list state
    setCustomerList(updatedCustomerList);
  };

  return (
    <div className="flex w-full overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Index</th>
            <th>Phone Number</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {customerList &&
            (customerList as ICustomer[]).map((customer, index) => (
              <tr key={customer.id}>
                <td>{index + 1}</td>
                <td>{customer.phone_number}</td>
                <td>{customer.password}</td>
                <td>
                  <button onClick={() => handleDelete(customer.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
