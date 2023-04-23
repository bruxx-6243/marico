import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import userIcon from "../assets/images/icons/User.png";
import email from "../assets/images/icons/At_sign.png";
import facebook from "../assets/images/icons/Facebook.png";
import google from "../assets/images/icons/G_logo.png";
import apple from "../assets/images/icons/Apple_logo.png";
import { useState } from "react";
import { AuthButton } from "../components/AuthButton";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useAuth } from "../hook/useAuth";
import { AuthContextValue } from "../context/AuthProvider";

export interface InputsProps {
  username: string;
  email: string;
  password: string;
}

const SignUpSchema = yup
  .object()
  .shape({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).max(16).required(),
  })
  .required();

export const SignUp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const { signUp } = useAuth() as AuthContextValue;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsProps>({
    resolver: yupResolver(SignUpSchema),
  });

  const onSubmit: SubmitHandler<InputsProps> = async (data) => {
    signUp(data, () => navigate("/login", { replace: true }));
  };

  return (
    <section className="container__section w-full mt-16 md:mt-20">
      <h2 className="heading text-center">Sign up</h2>
      <p className="text-[13px] sm:text-[16px] text-center mb-10">
        Fill all field for create an account.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col flex-wrap items-center justify-center gap-y-[30px]"
      >
        <div className="flex items-center flex-wrap justify-center gap-x-[60px] gap-y-[30px]">
          <label
            className={`relative border-b ${
              errors.username ? "border-red-800" : "border-gray"
            } w-[300px]`}
          >
            <input
              type="text"
              placeholder="Username"
              className="input"
              {...register("username")}
            />
            <img
              src={userIcon}
              alt="user icon"
              width={20}
              className="absolute right-2 top-2"
            />
          </label>

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
        </div>
        <div className="flex items-center flex-wrap justify-center gap-x-[60px] gap-y-[30px] ">
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

          <button
            type="submit"
            className="bg-blue text-white py-[10px] px-[20px] rounded-md text-[14px] sm:text-[16px] w-[300px]"
          >
            Sign Up
          </button>
        </div>
      </form>

      <div className="mt-12">
        <h6 className="text-[20px] sm:text-[30px] md:text-[50px] font-medium text-center">
          Or
        </h6>
        <p className="text-[14px] sm:text-[18px] text-center mb-6">
          Sign up with...
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
          Already have an account? Please{" "}
          <Link to="/login" className="decoration-2 text-blue">
            Log in .
          </Link>
        </p>
      </div>
    </section>
  );
};
