import { useContext } from "react";
import {
  ProductStoreContext,
  ProductStoreContextType,
} from "../../context/ProductStoreProvider";
import { checkMarkImg } from "../../assets";

const Cart = () => {
  const { cart } = useContext(ProductStoreContext) as ProductStoreContextType;
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
                    <p className="text-gray-600">${price}</p>
                  </div>
                  <div>
                    <ul>
                      <li className="flex gap-2 items-center mt-2">
                        <img src={checkMarkImg} alt="" className="w-3" />
                        ID : {id}
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
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
