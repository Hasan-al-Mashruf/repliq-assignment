import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, image, name, price } = product;
  console.log(product);
  return (
    <div>
      <Link to={`/product/${id}`}>
        <div className="card card-image-cover max-w-full">
          <img
            src={image}
            alt=""
            className=" object-cover"
            style={{ height: "250px" }}
          />
          <div className="card-body">
            <h4 className="card-header text-md">{name}</h4>

            <div className="card-footer flex justify-between">
              <p>{price}</p>
              <button className="btn btn-outline-primary border-orange-600 text-orange-600 bg-orange-600 text-white font-body px-8 hover:bg-transparent hover:text-orange-600 ">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
