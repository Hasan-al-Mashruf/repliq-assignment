import { useParams } from "react-router-dom";
import productJsonData from "../../assets/sampleData.json";
import { checkMarkImg } from "../../assets";

const ProductDetails = () => {
  const { id } = useParams();

  // Find the product with the matching ID
  const product = productJsonData.find((product) => product.id == id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const { price, name, brand, image, quantity, description } = product;
  // Render product details
  return (
    <div className="container mx-auto">
      <div className="card card-image-cover flex-row max-w-full items-center">
        <img src={image} alt="" />
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
          <div className="card-footer">
            <button className="btn-secondary btn">Learn More</button>
          </div>
        </div>
      </div>
      {/* You can render other details of the product here */}
    </div>
  );
};

export default ProductDetails;
