import { useContext } from "react";
import { cartImg, orderImg, userImg } from "../../assets";
import {
  ProductStoreContext,
  ProductStoreContextType,
} from "../../context/ProductStoreProvider";
import { Link } from "react-router-dom";

const Admin = () => {
  const { orderList, sampleProductData, customerList } = useContext(
    ProductStoreContext
  ) as ProductStoreContextType;
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-3">
        <div className="card">
          <div className="card-body">
            <img src={userImg} alt="" className="w-16" />
            <div className="flex justify-between items-baseline mt-2">
              <h2 className="card-header text-xl">Customer</h2>
              <p className="text-content2 text-sm">
                Total Customer :{" "}
                <span className="text-orange-600 font-bold font-title">
                  {customerList.length.toString().padStart(2, "0")}
                </span>
              </p>
            </div>
            <div className="card-footer">
              <Link to="/admin/customerList">
                <button className="w-full mt-5 btn btn-outline-primary border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-body px-8">
                  Preview All
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <img src={orderImg} alt="" className="w-16" />
            <div className="flex justify-between items-center mt-2">
              <h2 className="card-header text-xl">Order</h2>
              <p className="text-content2 text-sm">
                Total Order :{" "}
                <span className="text-orange-600 font-bold font-title">
                  {orderList.length.toString().padStart(2, "0")}
                </span>
              </p>
            </div>
            <div className="card-footer">
              <Link to="/admin/orderList">
                <button className="w-full mt-5 btn btn-outline-primary border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-body px-8">
                  Preview All
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <img src={cartImg} alt="" className="w-16" />
            <div className="flex justify-between items-center mt-2">
              <h2 className="card-header text-xl">Product</h2>
              <p className="text-content2 text-sm">
                Total Product :{" "}
                <span className="text-orange-600 font-bold font-title">
                  {sampleProductData.length.toString().padStart(2, "0")}
                </span>
              </p>
            </div>
            <div className="card-footer">
              <Link to="/admin/productList">
                <button className="w-full mt-5 btn btn-outline-primary border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-body px-8">
                  Preview All
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
