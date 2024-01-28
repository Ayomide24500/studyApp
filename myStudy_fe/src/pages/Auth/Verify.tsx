import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { verifyAPI } from "../../Api/Api";

const Verification = () => {
  const navigate = useNavigate();
  const studentID = useParams();
  const schema = yup.object({
    token: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onHandleSubmit = handleSubmit(async (data: any) => {
    console.log(data);

    await verifyAPI(data, { studentID }).then(() => {
      navigate("/login");
    });
  });

  return (
    <>
      {/* Similar structure to the Login component */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        {/* ... (omitting the logo and heading for brevity) */}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={onHandleSubmit}>
            <div>
              <label
                htmlFor="verificationCode"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Verification Code
              </label>
              <div className="mt-2">
                <input
                  id="verificationCode"
                  type="text"
                  autoComplete="off"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-5"
                  {...register("token")}
                />
                {errors.token && (
                  <div className="leading-tight -mt-1 text-right mr-10 pr-1 text-[12px] text-red-500 w-[80%] ">
                    {errors.token.message}
                  </div>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Verify
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            {/* Include any additional links or information */}
          </p>
        </div>
      </div>
    </>
  );
};

export default Verification;
