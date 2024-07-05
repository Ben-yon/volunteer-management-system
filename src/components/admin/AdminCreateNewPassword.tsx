import { useNavigate } from "react-router-dom";
import { media } from "../../assets";
import { FormEvent } from "react";
import { LanguageSelect } from "../LanguageSelect";
import { useFormValidation } from "../../utils/validate";
import { AdminNewPasswordFormData } from "../../interfaces/FormDataInterface";

export const AdminCreateNewPassword = () => {
  const validationRules = {
    password: { required: true, password: true, minLength: 8 },
    confirmPassword: { required: true, password: true, minLength: 8 },
  };

  const { values, errors, handleChange, validate } =
    useFormValidation<AdminNewPasswordFormData>({
      password: "",
      confirmPassword: "",
    }, validationRules);

  const navigate = useNavigate();

  const setNewPassword = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validate()) {
      navigate("/admin/password-reset/confirm-password-change");
    }else{
      throw new DOMException("Validation failed!")
    }
  };

  return (
    <div className="relative bg-admin bg-no-repeat bg-cover filter md:filter-none z-0 w-[100%] h-[100vh]">
      <div className="bg-primary opacity-95 bg-no-repeat bg-cover w-[100%] h-[100vh]">
      <div className="absolute top-8 right-16 z-10 text-black hidden space-x-1 md:absolute md:top-[39px] md:right-[47px] sm:top-[33px] xsm:top-[18px] xsm:right-[32.1px]">
          <img
            src={media.lang_black}
            alt="language"
            className=" w-[31px] h-[29.1px] lg:w-[31px] lg:h-[29.1px] xsm:w-[21.05px] xsm:h-[19.76px]"
          />
          <LanguageSelect />
        </div>
        <img
          src={`${media.redLogo}`}
          alt=""
          className="absolute top-[29px] lg:absolute lg:top-[29px] left-[27px] lg:h-[90px] lg:w-[220px] md:w-[136px] md:h-[56px] md:absolute md:top-[29px] md:left[29px] sm:w-[120px] sm:h-[49px] sm:top-[24px] xsm:w-[90px] xsm:h-[37px] xsm:absolute xsm:top-[11px]"
        />
        <div className="flex lg:flex-row justify-center items-center min-h-screen md:flex-col sm:flex-col xsm:flex-col">
          <img
            src={`${media.addPassword}`}
            alt=""
            className="w-[306.13px] h-[306.13px] lg:w-[306.13px] lg:h-[306.13px] md:w-[159px] md:h-[159px] sm:w-[159px] sm:h-[159px] xsm:w-[91.92px] xsm:h-[91.92px]"
          />
          <div className="md:flex md:flex-col md:items-center md:text-center sm:flex sm:flex-col sm:items-center sm:text-center xsm:flex xsm:flex-col xsm:items-center xsm:text-center">
            <span className="text-[45px] w-[284.5px] leading-[54.46px] font-bold lg:text-[45px] lg:w-[284.5px] lg:leading-[54.46px] md:text-[37.78px] md:leading-[45.72px] md:mt-[4px] sm:text-[37.78px] sm:leading-[45.72px] sm:mt-[4px] xsm:text-[21.83px] xsm:leading-[26.43px] xsm:mt-[2.31px]">
              Create new <br /> Password{" "}
            </span>
            <p className="text-[20px] leading-[24.2px] mt-[10.82px] lg:text-[20px] lg:leading-[24.2px] lg:mt-[10.82px] md:text-[16.79px] md:leading-[20.32px] md:mt-[10px] sm:text-[16.79px] sm:leading-[20.32px] sm:mt-[10px] xsm:text-[9.71px] xsm:leading-[11.75px] xsm:mt-[6.96px]">
              Your new password must be different from <br />
              previous used passwords.
            </p>
            <form onSubmit={setNewPassword} className="flex flex-col mt-4">
              <div className="flex flex-col">
                <input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  className="bg-gray-100 w-[551.68px] h-[69.23px] rounded-[20px] px-4 text-[22px] leading-[26.63px] pl-[37.86px] lg:w-[551.68px] lg:h-[69.23px] lg:rounded-[20px] lg:px-4 lg:text-[22px] lg:leading-[26.63px] lg:pl-[37.86px] md:w-[428.16px] md:h-[53.73px] md:rounded-[16.79px] md:text-[18.47px] md:leading-[22.35px] md:pl-[29.38px] sm:w-[428.16px] sm:h-[53.73px] sm:rounded-[16.79px] sm:text-[18.47px] sm:leading-[22.35px] sm:pl-[29.38px] xsm:w-[247.51px] xsm:h-[31.06px] xsm:rounded-[9.71px] xsm:text-[10.68px] xsm:leading-[12.92px] xsm:pl-[16.99px]"
                  placeholder="New Password"
                />
                {errors.password && (
                  <span className="text-red-500 text-[10px]">
                    {errors.password}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  type="password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  className="bg-gray-100 w-[551.68px] h-[69.23px] m-0 rounded-[20px] px-4 text-[22px] leading-[26.63px] pl-[37.86px] mt-[10.82px] lg:w-[551.68px] lg:h-[69.23px] lg:rounded-[20px] lg:px-4 lg:text-[22px] lg:leading-[26.63px] lg:pl-[37.86px] md:w-[428.16px] md:h-[53.73px] md:rounded-[16.79px] md:text-[18.47px] md:leading-[22.35px] md:pl-[29.38px] md:mb-[18.63px] sm:w-[428.16px] sm:h-[53.73px] sm:rounded-[16.79px] sm:text-[18.47px] sm:leading-[22.35px] sm:pl-[29.38px] sm:mb-[18.63px] xsm:w-[247.51px] xsm:h-[31.06px] xsm:rounded-[9.71px] xsm:text-[10.68px] xsm:leading-[12.92px] xsm:pl-[16.99px] xsm:mb-[20.48px]"
                  placeholder="Confirm Password"
                />
                {errors.confirmPassword && (
                  <span className="text-red-500 text-[10px]">{errors.confirmPassword}</span>
                )}
              </div>
              <button className="bg-admin-secondary w-[249.88px] h-[69.23px] rounded-[20px] text-[20px] leading-[24.2px] mt-[22.71px] text-primary font-bold lg:w-[249.88px] lg:h-[69.23px] lg:rounded-[20px] lg:text-[20px] lg:leading-[24.2px] lg:mt-[22.71px] md:w-[193.93px] md:h-[53.73px] md:rounded-[16.79px] md:text-[16.79px] md:leading-[20.32px] md:m-auto sm:w-[193.93px] sm:h-[53.73px] sm:rounded-[16.79px] sm:text-[16.79px] sm:leading-[20.32px] sm:m-auto xsm:w-[112.11px] xsm:h-[31.06px] xsm:text-[9.71px] xsm:leading-[11.75px] xsm:m-auto">
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
