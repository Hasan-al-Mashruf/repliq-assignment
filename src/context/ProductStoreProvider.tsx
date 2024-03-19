import axios from "axios";
import React, { useEffect, useState } from "react";
import { ICustomer, ProductType } from "../interfaces/interfaces.site";

export type ProductStoreContextType = {
  loader: boolean;
  sampleProductData: ProductType[] | null;
  cart: ProductType[] | null;
  setCart: React.Dispatch<React.SetStateAction<ProductType[] | []>>;
  customerList: ICustomer[] | [];
  setCustomerList: React.Dispatch<React.SetStateAction<ICustomer[] | []>>;
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
  const [customerList, setCustomerList] = useState<ICustomer[] | []>([]);

  const productApi = process.env.REACT_APP_API_URL;
  const customerApi = process.env.REACT_APP_CUSTOMER_URL;

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        setLoader(true);
        const response = await axios.get(productApi as string);
        setSampleProductData(response.data);
        setLoader(false);
      } catch (error) {
        console.error("Error fetching product data:", error);
        setLoader(false);
      }
    };

    const fetchCustomerData = async () => {
      try {
        setLoader(true);
        const response = await axios.get(customerApi as string);
        setCustomerList(response.data);
        setLoader(false);
      } catch (error) {
        console.error("Error fetching customer data:", error);
        setLoader(false);
      }
    };

    fetchProductData();
    fetchCustomerData();
  }, [productApi, customerApi]);

  console.log(customerList);

  return (
    <ProductStoreContext.Provider
      value={{
        loader,
        sampleProductData,
        cart,
        setCart,
        customerList,
        setCustomerList, // Provide setter function in context value
      }}
    >
      {children}
    </ProductStoreContext.Provider>
  );
};

export default ProductStoreProvider;
