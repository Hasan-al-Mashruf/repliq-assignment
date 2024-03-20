import { useContext } from "react";
import {
  ProductStoreContext,
  ProductStoreContextType,
} from "../../context/ProductStoreProvider";
import { cartImg, checkMarkImg } from "../../assets";
import { ProductType } from "../../interfaces/interfaces.site";

const Cart = () => {
  const { cart, setCart } = useContext(
    ProductStoreContext
  ) as ProductStoreContextType;

  const handleDelete = (productId: number) => {
    // Filter out the product in cart with the specified ID
    const updatedProductList = (cart as ProductType[]).filter(
      (product) => product.id !== productId.toString()
    );

    setCart(updatedProductList);
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 w-1/2 mx-auto">
        {cart && cart.length > 0 ? (
          cart.map((product, index) => {
            const { id, price, name, brand, image, quantity } = product;
            return (
              <div key={index} className="flex  border-t py-4 w-full px-2">
                <img
                  src={image}
                  alt={name}
                  className="w-32 h-32 object-cover mr-4"
                />
                <div className="flex-1">
                  <div className="flex justify-between w-full">
                    <h2 className="text-lg font-bold">{name}</h2>
                    <button
                      onClick={() => handleDelete(id)}
                      className="btn btn-outline-primary border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-body"
                    >
                      Delete Now
                    </button>
                  </div>
                  <div>
                    <ul>
                      <li className="flex gap-2 items-center mt-2">
                        <img src={checkMarkImg} alt="" className="w-3" />
                        Price : ${price}
                      </li>
                      <li className="flex gap-2 items-center mt-2">
                        <img src={checkMarkImg} alt="" className="w-3" />
                        Brand : {brand}
                      </li>
                      <li className="flex gap-2 items-center mt-2">
                        <img src={checkMarkImg} alt="" className="w-3" />
                        Available : {quantity}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex flex-col items-center ">
            <img src={cartImg} alt="cart-image" />
            <p className="text-3xl text-orange-400 mt-4 font-title font-medium">
              Your cart is empty
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
