import productJsonData from "../../assets/sampleData.json";
import ProductCard from "../../component/ProductCard/ProductCard";
const Product = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-8">
        {productJsonData.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
