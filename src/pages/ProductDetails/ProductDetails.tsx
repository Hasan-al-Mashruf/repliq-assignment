import { useParams } from "react-router-dom";
import { checkMarkImg } from "../../assets";
import {
  ProductStoreContext,
  ProductStoreContextType,
} from "../../context/ProductStoreProvider";
import { useContext } from "react";
import { ProductType } from "../../interfaces/interfaces.site";

const ProductDetails = () => {
  const { sampleProductData, cart, setCart } = useContext(
    ProductStoreContext
  ) as ProductStoreContextType;
  const { id } = useParams();

  // Check if the product is already in the cart
  const isInCart = cart?.some((item) => item.id === id);

  // Find the product with the matching ID
  const product = sampleProductData?.find((product) => product.id == id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const addToCart = (product: ProductType) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const { price, name, brand, image, quantity, description } = product;
  // Render product details
  return (
    <div className="container mx-auto">
      <div className="card card-image-cover flex-row max-w-full items-center">
        <img
          src={image}
          alt=""
          className="w-[300px] h-[380px] object-cover rounded-full"
        />
        <div className="card-body">
          <h2 className="card-header text-4xl">{name}</h2>
          <p>{description}</p>
          <ul>
            <li className="flex gap-3 items-center mt-4">
              <img src={checkMarkImg} alt="" className="w-5" />${price}
            </li>
            <li className="flex gap-3 items-center mt-4">
              <img src={checkMarkImg} alt="" className="w-5" />
              {brand}
            </li>
            <li className="flex gap-3 items-center mt-4">
              <img src={checkMarkImg} alt="" className="w-5" />
              {quantity} available
            </li>
            <li className="flex gap-3 items-center mt-4">
              <img src={checkMarkImg} alt="" className="w-5" />
              {price}
            </li>
          </ul>

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
  );
};

export default ProductDetails;
