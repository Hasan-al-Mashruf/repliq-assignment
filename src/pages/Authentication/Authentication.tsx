import { welcomeImg } from "../../assets";
import { SubmitHandler, useForm } from "react-hook-form";
import Signin from "./signin/Signin";
import { Iinputs } from "../../interfaces/interfaces.site";

const Authentication = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Iinputs>();

  const onSubmit: SubmitHandler<Iinputs> = (data) => console.log(data);

  return (
    <div className="grid grid-cols-2 bg-[#e0edfe] rounded-lg overflow-hidden">
      <div>
        <img src={welcomeImg} alt="" />
      </div>
      <div className="bg-white rounded-l-full py-8 px-4 h-full">
        <div className="mx-auto flex w-full max-w-sm flex-col gap-6 h-full justify-center">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-semibold">Sign In</h1>
          </div>
          <div className="form-group">
            <Signin
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              register={register}
              errors={errors}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
