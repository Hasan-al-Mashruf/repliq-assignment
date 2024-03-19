import { SubmitHandler, useForm } from "react-hook-form";
import { Iinputs } from "../../../interfaces/interfaces.site";
import { userImg } from "../../../assets";
import { useContext } from "react";
import {
  ProductStoreContext,
  ProductStoreContextType,
} from "../../../context/ProductStoreProvider";
import { useNavigate } from "react-router-dom";

const AddCustomer = () => {
  const navigate = useNavigate();
  const { setCustomerList, customerList } = useContext(
    ProductStoreContext
  ) as ProductStoreContextType;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Iinputs>();

  const onSubmit: SubmitHandler<Iinputs> = (data) => {
    const newCustomer = {
      id: customerList.length + 1,
      phone_number: data.phoneNumber.toString(),
      password: data.password,
    };
    // Update the customer list with the new customer added
    setCustomerList((prevCustomerList) => {
      return [...prevCustomerList, newCustomer];
    });
    navigate("/admin/customerList");
  };
  console.log(customerList);
  return (
    <div className="w-1/2 mx-auto border py-12 px-8 rounded-lg">
      <div className="mb-6">
        <img src={userImg} alt="avatar" className="w-16 mx-auto" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Your form inputs */}
        <div className="form-field pt-3">
          <input
            {...register("phoneNumber", {
              required: true,
              minLength: 11,
              maxLength: 11,
              pattern: /^[0-9]+$/,
            })}
            aria-invalid={errors.phoneNumber ? "true" : "false"}
            className="input max-w-full bg-transparent rounded-md border-[#6c6c6c] focus:border-orange-400 text-white"
            placeholder="Enter phone number (11 digits) without +88"
          />
          {/* Error messages for phone number */}
        </div>
        <div className="form-field pt-3">
          <input
            {...register("password", { required: true })}
            aria-invalid={errors.password ? "true" : "false"}
            className="input max-w-full bg-transparent rounded-md border-[#6c6c6c] focus:border-orange-400 text-white"
            placeholder="Enter password ******"
          />
          {/* Error messages for password */}
        </div>
        <div className="form-field pt-5">
          <input
            type="submit"
            className="btn btn-outline-primary border-orange-600 text-orange-600 font-body px-8 bg-transparent hover:bg-orange-600 hover:text-white"
          />
        </div>
      </form>
    </div>
  );
};

export default AddCustomer;
