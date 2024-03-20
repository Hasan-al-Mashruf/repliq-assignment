import { useContext } from "react";
import {
  ProductStoreContext,
  ProductStoreContextType,
} from "../../../context/ProductStoreProvider";
import { ProductType } from "../../../interfaces/interfaces.site";

const ProductList = () => {
  const { sampleProductData, setSampleProductData } = useContext(
    ProductStoreContext
  ) as ProductStoreContextType;

  const handleDelete = (productId: string) => {
    // Filter out the customer with the specified ID
    const updatedProductList = (sampleProductData as ProductType[]).filter(
      (product) => product.id !== productId
    );
    // Update the customer list state
    setSampleProductData(updatedProductList);
  };

  return (
    <div className="flex w-full overflow-x-auto">
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
          {sampleProductData &&
            (sampleProductData as ProductType[]).map((product, index) => {
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
    </div>
  );
};

export default ProductList;
