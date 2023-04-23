import email from "../assets/images/icons/At_sign.png";
import facebook from "../assets/images/icons/Facebook.png";
import google from "../assets/images/icons/G_logo.png";
import apple from "../assets/images/icons/Apple_logo.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { AuthButton } from "../components/AuthButton";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputsProps } from "./SignUp";
import { useAuth } from "../hook/useAuth";
import { AuthContextValue } from "../context/AuthProvider";

const LogInSchema = yup
  .object()
  .shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(16).required(),
  })
  .required();

export const LogIn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { logIn } = useAuth() as AuthContextValue;

  const fromPage = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsProps>({
    resolver: yupResolver(LogInSchema),
  });

  const onSubmit: SubmitHandler<InputsProps> = (data) => {
    logIn(data, () => navigate(fromPage, { replace: true }));
  };

  return (
    <section className="container__section w-full mt-16 md:mt-20">
      <h2 className="heading text-center">Log in</h2>
      <p className="text-[13px] sm:text-[16px] text-center mb-10">
        Login into existing account.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col flex-wrap items-center justify-center gap-y-[30px]"
      >
        <div className="flex items-center flex-wrap justify-center gap-x-[60px] gap-y-[30px]">
          <label
            className={`relative border-b ${
              errors.email ? "border-red-800" : "border-gray"
            } w-[300px]`}
          >
            <input
              type="text"
              placeholder="Email Address"
              className="input"
              autoComplete="off"
              {...register("email")}
            />
            <img
              src={email}
              alt="Email icon"
              width={20}
              className="absolute right-2 top-2"
            />
          </label>

          <label
            className={`relative border-b ${
              errors.password ? "border-red-800" : "border-gray"
            } w-[300px]`}
          >
            <input
              type={isVisible ? "text" : "password"}
              autoComplete="current-password"
              placeholder="Password"
              className="input"
              {...register("password")}
            />

            <div
              onClick={() => setIsVisible((prev) => !prev)}
              className="absolute right-2 top-2 text-[25px] text-gray cursor-pointer"
            >
              {isVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </div>
          </label>
        </div>
        <div className="flex items-center flex-wrap justify-center gap-x-[60px] gap-y-[30px]">
          <button
            type="submit"
            className="bg-blue text-white py-[10px] px-[20px] rounded-md text-[14px] sm:text-[16px] w-[300px]"
          >
            Log In
          </button>
        </div>
      </form>

      <div className="mt-12">
        <h6 className="text-[20px] sm:text-[30px] md:text-[50px] font-medium text-center">
          Or
        </h6>
        <p className="text-[14px] sm:text-[18px] text-center mb-6">
          Log in up with...
        </p>

        <div className="flex items-center justify-center flex-wrap gap-[30px]">
          <AuthButton
            onClick={() => {}}
            icon={facebook}
            text="Sign up with Facebook"
          />
          <AuthButton
            onClick={() => {}}
            icon={google}
            text="Sign up with Google"
          />
          <AuthButton
            onClick={() => {}}
            icon={apple}
            text="Sign up with Apple"
          />
        </div>
        <p className="text-[12px] sm:text-[16px] text-center mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="decoration-2 text-blue">
            Create One.
          </Link>
        </p>
      </div>
    </section>
  );
};
function signUp(auth: any, email: string, password: string, arg3: () => void) {
  throw new Error("Function not implemented.");
}
