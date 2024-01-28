import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerAPI } from "../../Api/Api";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const Register = () => {
  const navigate = useNavigate();
  const schema = yup.object({
    userName: yup.string().required(),
    email: yup
      .string()
      .email("Email is not valid")
      .required("Email is required"),
    password: yup.string().min(6).required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onHandleSubmit = handleSubmit(async (data: {}) => {
    await registerAPI(data).then((res) => {
      console.log(res);

      navigate("/verify");
      return res;
    });
  });

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={onHandleSubmit}>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Student Name
            </label>
            <div className="mt-2">
              <input
                id="userName"
                type="userName"
                {...register("userName")}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-5"
              />
              {errors.userName && (
                <div className="leading-tight -mt-1 text-right mr-10 pr-1 text-[12px] text-red-500 w-[80%] ">
                  {errors.userName.message}
                </div>
              )}
            </div>
            <div className="mt-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Student Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-5"
              />
              {errors.email && (
                <div className="leading-tight -mt-1 text-right mr-10 pr-1 text-[12px] text-red-500 w-[80%] ">
                  {errors.email.message}
                </div>
              )}
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  {...register("password")}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-5"
                />
                {errors.password && (
                  <div className="leading-tight -mt-1 text-right mr-10 pr-1 text-[12px] text-red-500 w-[80%] pt-4">
                    {errors.password.message}
                  </div>
                )}
              </div>
            </div>

            <div>
              {/* <Link to="/verify"> */}
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
              {/* </Link> */}
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <Link to="/login">
              <div className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Sign in here
              </div>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
