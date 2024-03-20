import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  ProductStoreContext,
  ProductStoreContextType,
} from "../../context/ProductStoreProvider";
import { ProductType } from "../../interfaces/interfaces.site";

const ProductCard: React.FC<{ product: ProductType }> = ({ product }) => {
  const { cart, setCart } = useContext(
    ProductStoreContext
  ) as ProductStoreContextType;
  const { id, image, name, price } = product;

  // Check if the product is already in the cart
  const isInCart = cart?.some((item) => item.id === id);

  const addToCart = (product: ProductType) => {
    setCart((prevCart) => [...prevCart, product]);
  };
  console.log(product);
  console.log(cart, "cart");
  return (
    <div>
      <div className="card card-image-cover max-w-full">
        <img
          src={image}
          alt=""
          className=" object-cover"
          style={{ height: "250px" }}
        />
        <div className="card-body">
          <div className="card-footer flex justify-between">
            <h4 className="card-header text-md">{name}</h4>
          </div>
          <p>
            {" "}
            Price: <span className="text-orange-400">${price}</span>
          </p>
          <div className="flex justify-center gap-4 mt-5">
            <Link to={`/product/${id}`}>
              <button
                onClick={() => addToCart(product)}
                className="btn btn-outline-primary border-orange-600 text-orange-600 bg-orange-600 text-white font-body px-8 hover:bg-transparent hover:text-orange-600 "
              >
                See Details
              </button>
            </Link>
            <button
              onClick={() => addToCart(product)}
              disabled={isInCart}
              className={`btn btn-outline-primary border-orange-600 text-orange-600 bg-orange-600 text-white font-body px-8 hover:bg-transparent hover:text-orange-600 ${
                isInCart ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              {isInCart ? "Added to Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
