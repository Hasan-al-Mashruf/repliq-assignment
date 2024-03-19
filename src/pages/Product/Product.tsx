import { useContext } from "react";
import ProductCard from "../../component/ProductCard/ProductCard";
import {
  ProductStoreContext,
  ProductStoreContextType,
} from "../../context/ProductStoreProvider";
import { ProductType } from "../../interfaces/interfaces.site";
const Product = () => {
  const { sampleProductData } = useContext(
    ProductStoreContext
  ) as ProductStoreContextType;
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-8">
        {sampleProductData?.map((product: ProductType, index: number) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
