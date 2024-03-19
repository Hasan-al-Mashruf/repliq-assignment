import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProductType } from "../interfaces/interfaces.site";

export type ProductStoreContextType = {
  loader: boolean;
  sampleProductData: ProductType[] | null;
  cart: ProductType[] | null;
  setCart: React.Dispatch<React.SetStateAction<ProductType[] | []>>;
};

export const ProductStoreContext =
  React.createContext<ProductStoreContextType | null>(null);

const ProductStoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loader, setLoader] = useState(false);
  const [sampleProductData, setSampleProductData] = useState<
    ProductType[] | null
  >(null);
  const [cart, setCart] = useState<ProductType[] | []>([]);
  const api = process.env.REACT_APP_API_URL;
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true);
        const response = await axios.get(api as string);
        setSampleProductData(response.data);

        setLoader(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoader(false);
      }
    };
    fetchData();
  }, [api]);

  console.log(sampleProductData);
  return (
    <ProductStoreContext.Provider
      value={{
        loader,
        sampleProductData,
        cart,
        setCart,
      }}
    >
      {children}
    </ProductStoreContext.Provider>
  );
};

export default ProductStoreProvider;
