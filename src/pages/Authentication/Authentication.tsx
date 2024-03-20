import { welcomeImg } from "../../assets";
import { SubmitHandler, useForm } from "react-hook-form";
import Signin from "./signin/Signin";
import { Iinputs } from "../../interfaces/interfaces.site";
import { useState } from "react";
import SignUp from "./signin/signup";
import { useNavigate } from "react-router-dom";

const Authentication = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Iinputs>();

  const onSubmit: SubmitHandler<Iinputs> = (data) => {
    // Save user data to localStorage
    localStorage.setItem("userData", JSON.stringify(data));
    navigate("/");
  };

  const btnGroup = ["sign in", "sign up"];
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="grid grid-cols-2 bg-[#e0edfe] rounded-lg overflow-hidden">
      <div>
        <img src={welcomeImg} alt="" />
      </div>
      <div className="bg-white rounded-l-full py-8 px-4 h-full">
        <div className="mx-auto flex w-full max-w-sm flex-col gap-6 h-full justify-center">
          <div className="flex flex-col items-center">
            <h1 className="text-6xl font-semibold uppercase opacity-35 font-title">
              {btnGroup[activeTabIndex]}
            </h1>
          </div>
          <div className="mx-auto p-1 bg-gray rounded-md mb-6">
            {btnGroup.map((btn, index) => (
              <button
                className={`${
                  index == activeTabIndex
                    ? "bg-orange-400 text-white"
                    : "bg-gray"
                } btn capitalize px-10 bg-transparent rounded-md text-black font-body font-medium`}
                key={btn}
                onClick={() => setActiveTabIndex(index)}
              >
                {btn}
              </button>
            ))}
          </div>
          <div className="form-group">
            {activeTabIndex == 0 ? (
              <>
                <Signin
                  handleSubmit={handleSubmit}
                  onSubmit={onSubmit}
                  register={register}
                  errors={errors}
                  setActiveTabIndex={setActiveTabIndex}
                />
              </>
            ) : (
              <>
                <SignUp
                  handleSubmit={handleSubmit}
                  onSubmit={onSubmit}
                  register={register}
                  errors={errors}
                  setActiveTabIndex={setActiveTabIndex}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
