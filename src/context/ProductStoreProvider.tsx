import axios from "axios";
import React, { useEffect, useState } from "react";
import { ICustomer, ProductType } from "../interfaces/interfaces.site";

export type ProductStoreContextType = {
  loader: boolean;
  sampleProductData: ProductType[] | [];
  cart: ProductType[] | [];
  orderList: ProductType[] | [];
  setCart: React.Dispatch<React.SetStateAction<ProductType[] | []>>;
  setOrderList: React.Dispatch<React.SetStateAction<ProductType[] | []>>;
  customerList: ICustomer[] | [];
  setCustomerList: React.Dispatch<React.SetStateAction<ICustomer[] | []>>;
  setSampleProductData: React.Dispatch<
    React.SetStateAction<ProductType[] | []>
  >;
};

export const ProductStoreContext =
  React.createContext<ProductStoreContextType | null>(null);

const ProductStoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loader, setLoader] = useState(false);
  const [sampleProductData, setSampleProductData] = useState<
    ProductType[] | []
  >([]);
  const [cart, setCart] = useState<ProductType[] | []>([]);
  const [orderList, setOrderList] = useState<ProductType[] | []>([]);
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
        setCustomerList,
        setSampleProductData,
        orderList,
        setOrderList,
      }}
    >
      {children}
    </ProductStoreContext.Provider>
  );
};

export default ProductStoreProvider;
