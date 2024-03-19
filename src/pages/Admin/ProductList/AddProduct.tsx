import { SubmitHandler, useForm } from "react-hook-form";
import { ProductType } from "../../../interfaces/interfaces.site";
import {
  ProductStoreContext,
  ProductStoreContextType,
} from "../../../context/ProductStoreProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const { sampleProductData, setSampleProductData } = useContext(
    ProductStoreContext
  ) as ProductStoreContextType;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ProductType>();

  const onSubmit: SubmitHandler<ProductType> = (data) => {
    data.id = String(sampleProductData.length + 1);

    setSampleProductData((prevProductList) => {
      return [...prevProductList, data];
    });

    navigate("/admin/productList");
    console.log(data);
  };

  return (
    <div>
      <section className="bg-gray-2 rounded-xl">
        <div className="p-8 shadow-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex justify-between gap-5">
              <div className="w-full">
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  {...register("name", {
                    required: true,
                  })}
                  className="input input-solid max-w-full"
                  placeholder="Name"
                  type="text"
                  id="name"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>

              <div className="w-full">
                <label className="sr-only" htmlFor="price">
                  Price
                </label>
                <input
                  {...register("price", {
                    required: true,
                    pattern: /^[0-9]+(\.[0-9]{1,2})?$/, // Allows for numbers with up to 2 decimal places
                  })}
                  className="input input-solid max-w-full"
                  placeholder="Price"
                  type="text"
                  id="price"
                />
                {errors.price && (
                  <span className="text-red-600">
                    Please enter a valid price
                  </span>
                )}
              </div>
            </div>

            <div className="flex justify-between gap-5">
              <div className="w-full">
                <label className="sr-only" htmlFor="quantity">
                  Quantity
                </label>
                <input
                  {...register("quantity", {
                    required: true,
                    pattern: /^[0-9]+$/,
                  })}
                  className="input input-solid max-w-full"
                  placeholder="Quantity"
                  type="text"
                  id="quantity"
                />
                {errors.quantity && (
                  <span className="text-red-600">
                    Please enter a valid quantity
                  </span>
                )}
              </div>

              <div className="w-full">
                <label className="sr-only" htmlFor="brand">
                  Brand
                </label>
                <input
                  {...register("brand", {
                    required: true,
                  })}
                  className="input input-solid max-w-full"
                  placeholder="Brand"
                  type="text"
                  id="brand"
                />
                {errors.brand && (
                  <span className="text-red-600">Brand is required</span>
                )}
              </div>
            </div>

            <div className="w-full">
              <label className="sr-only" htmlFor="description">
                Description
              </label>
              <textarea
                {...register("description", {
                  required: true,
                })}
                className="textarea textarea-solid max-w-full h-32 resize-y"
                placeholder="Description"
                id="description"
              ></textarea>
              {errors.description && (
                <span className="text-red-600">Description is required</span>
              )}
            </div>

            <div className="w-full">
              <label className="sr-only" htmlFor="image">
                Image
              </label>
              <input
                {...register("image", {
                  required: true,
                  pattern: /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i, // Pattern to validate image file extensions
                })}
                className="input input-solid max-w-full"
                placeholder="Image URL"
                type="text"
                id="image"
              />
              {errors.image && (
                <span className="text-red-600">
                  Please provide a valid image URL
                </span>
              )}
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="btn btn-outline-primary border-orange-600 hover:text-orange-600 font-body px-8 hover:bg-transparent bg-orange-600 text-white w-full mt-6"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddProduct;
