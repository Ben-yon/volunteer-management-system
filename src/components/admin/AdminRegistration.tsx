import { media } from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import { LanguageSelect } from "../LanguageSelect";
import { useFormValidation } from "../../utils/validate";
import { AdminSignUpFormData } from "../../interfaces/FormDataInterface";
import { FormEvent } from "react";

export const AdminRegistration = () => {
  const validationRules = {
    firstName: { required: true, minLength: 5 },
    surname: { required: true, minLength: 2 },
    email: { required: true, email: true },
    password: { required: true, password: true, minLength: 8 },
  };

  const { values, errors, handleChange, validate } = useFormValidation<AdminSignUpFormData>({
    firstName: "",
    surname: "",
    email: "",
    password: ""
  }, validationRules );

  const navigate = useNavigate();

  const signUp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()){
      navigate("/admin/register-confirm");
    }else{
      throw new DOMException('Validation failed')
    }
  };

  return (
    <div className="bg-admin bg-no-repeat bg-cover filter md:filter-none z-0 w-[100vw] h-[100vh] lg:h-[100vh] lg:w-[100vw] sm:w-[100vw] md:w-[100vw] md:h-[100vh] sm:h-[100vh] xsm:w-[100vw] xsm:h-[100vh]">
      <div className="bg-primary opacity-95 bg-no-repeat bg-cover w-[100vw] h-[100vh] lg:w-[100vw] lg:h-[100vh] sm:w-[100vw] md:w-[100vw] md:h-[100vh] sm:h-[100vh] xsm:w-[100vw] xsm:h-[100vh]">
        <div className="absolute top-8 right-16 z-10 text-black flex space-x-1">
          <img
            src={media.lang_black}
            alt="language"
            className=" w-[31px] h-[29.1px] lg:w-[31px] lg:h-[29.1px]"
          />
          <LanguageSelect />
        </div>
        <img
          src={`${media.redLogo}`}
          alt=""
          className="absolute top-[29px] lg:absolute lg:top-[29px] left-[27px] lg:h-[90px] lg:w-[220px] md:w-[90px] md:h-[37px] md:left-[27px] md:top-[11px] sm:w-[90px] sm:h-[37px] xsm:w-[90px] xsm:h-[37px] xsm:left-[7px] xsm:top-[11px]"
        />
        <div className="flex flex-col justify-center items-center min-h-screen">
          <form
            onSubmit={signUp}
            className=" flex flex-col justify-center items-start"
          >
            <h2 className="text-[48.16px] leading-[58.29px] font-bold lg:text-[48.16px] lg:leading-[58.29px] md:text-[38.58px] md:leading-[46.7px] sm:text-[38.58px] sm:leading-[46.7px] sm:font-bold xsm:text-[21.51px] xsm:leading-[26.03px]">
              Create your <br /> account
            </h2>
            <div className="flex flex-col">
              <input
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                className="rounded-[21.41px] bg-gray-100 leading-[28.5px] text-black text-[23.55px] pl-[29.97px] border focus:outline-none w-[545.86px] h-[68.5px] lg:w-[545.86px] lg:h-[68.5px] lg:rounded-[21.41px] lg:text-[23.55px] lg:leading-[28.5px] lg:pl-[29.97px] lg:mt-[29.56px] md:w-[437.39px] md:h-[54.88px] md:rounded-[17.15px] md:text-[18.86px] md:leading-[22.83px] md:pl-[24.01px] md:mt-[22.61px] sm:w-[437.39px] sm:h-[54.88px] sm:rounded-[17.15px] sm:text-[18.86px] sm:leading-[22.83px] sm:pl-[24.01px] sm:mt-[22.61px] xsm:w-[243.77px] xsm:h-[30.59px] xsm:rounded-[9.5px] xsm:text-[10.52px] xsm:leading-[12.73px] xsm:mt-[13.01px] xsm:pl-[13.38px]"
                placeholder="First Name"
              />
              {errors.firstName && (
                <span className="text-red-500 text-[10px]">
                  {errors.firstName}
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                name="surname"
                value={values.surname}
                onChange={handleChange}
                className="rounded-[21.41px] bg-gray-100 leading-[28.5px] text-black text-[23.55px] pl-[29.97px] border focus:outline-none w-[545.86px] h-[68.5px] lg:w-[545.86px] lg:h-[68.5px] lg:rounded-[21.41px] lg:text-[23.55px] lg:leading-[28.5px] lg:pl-[29.97px] lg:mt-[10.7px] md:w-[437.39px] md:h-[54.88px] md:rounded-[17.15px] md:text-[18.86px] md:leading-[22.83px] md:pl-[24.01px] md:mt-[8.57px] sm:w-[437.39px] sm:h-[54.88px] sm:rounded-[17.15px] sm:text-[18.86px] sm:leading-[22.83px] sm:pl-[24.01px] sm:mt-[8.57px] xsm:w-[243.77px] xsm:h-[30.59px] xsm:rounded-[9.5px] xsm:text-[10.52px] xsm:leading-[12.73px] xsm:mt-[4.78px] xsm:pl-[13.38px]"
                placeholder="Surname"
              />
              {errors.surname && (
                <span className="text-red-500 text-[10px]">
                  {errors.surname}
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                className="rounded-[21.41px] bg-gray-100 leading-[28.5px] text-black text-[23.55px] pl-[29.97px] border focus:outline-none w-[545.86px] h-[68.5px] lg:w-[545.86px] lg:h-[68.5px] lg:rounded-[21.41px] lg:text-[23.55px] lg:leading-[28.5px] lg:pl-[29.97px] lg:mt-[10.7px] md:w-[437.39px] md:h-[54.88px] md:rounded-[17.15px] md:text-[18.86px] md:leading-[22.83px] md:pl-[24.01px] md:mt-[8.57px] sm:w-[437.39px] sm:h-[54.88px] sm:rounded-[17.15px] sm:text-[18.86px] sm:leading-[22.83px] sm:pl-[24.01px] sm:mt-[8.57px] xsm:w-[243.77px] xsm:h-[30.59px] xsm:rounded-[9.5px] xsm:text-[10.52px] xsm:leading-[12.73px] xsm:mt-[4.78px] xsm:pl-[13.38px]"
                placeholder="Email"
              />
              {errors.email && (
                <span className="text-red-500 text-[10px]">{errors.email}</span>
              )}
            </div>
            <div className="flex flex-col">
              <input
                type="password"
                className=" bg-gray-100 leading-[28.5px] text-black text-[23.55px] border focus:outline-none rounded-[21.41px] w-[303.97px] h-[68.5px] lg:w-[303.97px] lg:h-[68.5px] lg:rounded-[21.41px] lg:text-[23.55px] lg:leading-[28.5px] lg:pl-[29.97px] md:w-[243.51px] md:h-[54.88px] md:rounded-[17.15px] md:text-[18.86px] md:leading-[22.83px] md:pl-[24.01px] md:mt-[8.57px] sm:w-[243.51px] sm:h-[54.88px] sm:rounded-[17.15px] sm:text-[18.86px] sm:leading-[22.83px] sm:pl-[24.01px] sm:mt-[8.57px] xsm:w-[135.75px] xsm:h-[30.59px] xsm:rounded-[9.5px] xsm:text-[10.52px] xsm:leading-[12.73px] xsm:mt-[4.78px] xsm:pl-[13.38px]"
                placeholder="Password"
              />
              {errors.password && (
                <span className="text-red-500 text-[10px]">{errors.password}</span>
              )}
            </div>
            <div></div>
            <p className=" text-black text-[16.05px] leading-[19.43px] mt-[42.81px] lg:text-[16.05px] lg:leading-[19.43px] lg:mt-[42.81px] md:text-[12.86px] md:leading-[15.57px] md:mt-[34.3px] sm:text-[12.86px] ms:leading-[15.57px] sm:mt-[34.3px] xsm:text-[7.17px] xsm:leading-[8.68px] xsm:mt-[19.12px]">
              By clicking "Sign Up" you agree to{" "}
              <a href="#">
                <b>MCSS Terms</b> and <b>Privacy Policy</b>
              </a>
            </p>
            <button className="bg-tertiary text-white rounded-[21.41px] w-[181.95px] h-[68.5px] mt-[21.67px] lg:rounded-[21.41px] lg:w-[181.95px] lg:h-[68.5px] lg:mt-[21.67px] lg:text-[23.55px] lg:leading-[28.5px] md:w-[145.76px] md:h-[54.88px] md:rounded-[17.15px] md:mt-[16.58px] md:text-[18.86px] md:leading-[22.83px] sm:w-[145.76px] sm:h-[54.88px] sm:rounded-[17.15px] sm:mt-[16.58px] sm:text-[18.86px] sm:leading-[22.83px] xsm:w-[81.26px] xsm:h-[30.59px] xsm:rounded-[9.56px] xsm:text-[10.52px] xsm:leading-[12.73px] xsm:mt-[18.24px] font-bold text-[23.55px]">
              Sign Up
            </button>
            <p className="mt-[21.67px] text-[16.05px] leading-[19.43px] lg:mt-[21.67px] lg:text-[16.05px] lg:leading-[19.43px] md:text-[12.86px] md:leading-[15.57px] md:mt-[20.58px] sm:text-[12.86px] sm:leading-[15.57px] sm:mt-[20.58px] xsm:text-[7.17px] xsm:leading-[8.68px] xsm:mt-[11.47px]">
              Already have an account?{" "}
              <Link to="/admin/sign-in">
                <b>Sign In</b>
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
