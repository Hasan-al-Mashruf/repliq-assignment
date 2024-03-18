/* eslint-disable @typescript-eslint/no-explicit-any */
import { SubmitHandler } from "react-hook-form";
import { Iinputs } from "../../../interfaces/interfaces.site";

interface SigninProps {
  handleSubmit: any;
  onSubmit: SubmitHandler<Iinputs>;
  register: any;
  errors: Record<string, any>;
}

const Signin: React.FC<SigninProps> = ({
  handleSubmit,
  onSubmit,
  register,
  errors,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-field pt-3">
          <input
            {...register("phoneNumber", {
              required: true,
              minLength: 11,
              maxLength: 11,
              pattern: /^[0-9]+$/,
            })}
            aria-invalid={errors.phoneNumber ? "true" : "false"}
            className="input max-w-full bg-transparent rounded-md border-[#6c6c6c] focus:border-orange-400 text-black"
            placeholder="Enter phone number (11 digits) without +88"
          />
          <label className="form-label ">
            <span className="form-label-alt">
              {errors.phoneNumber?.type === "required" && (
                <p role="alert" className="text-orange-600">
                  Phone number is required
                </p>
              )}
              {(errors.phoneNumber?.type === "minLength" ||
                errors.phoneNumber?.type === "maxLength" ||
                errors.phoneNumber?.type === "pattern") && (
                <p role="alert">Phone number must be exactly 10 digits long</p>
              )}
            </span>
          </label>
        </div>
        <div className="form-field pt-3">
          <input
            {...register("password", { required: true })}
            aria-invalid={errors.password ? "true" : "false"}
            className="input max-w-full bg-transparent rounded-md border-[#6c6c6c] focus:border-orange-400 text-black"
            placeholder="Enter password ******"
          />
          <label className="form-label">
            <span className="form-label-alt">
              {errors.password?.type === "required" && (
                <p role="alert" className="text-orange-600">
                  password required
                </p>
              )}
            </span>
          </label>
        </div>

        <div className="form-field pt-5">
          <input type="submit" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default Signin;
