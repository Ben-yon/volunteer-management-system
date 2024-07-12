import { FormEvent } from "react";
import { media } from "../../assets";
import { useNavigate } from "react-router-dom";
import { LanguageSelect } from "../LanguageSelect";
import { useFormValidation } from "../../utils/validate";
import { AdminResetPasswordFormData } from "../../interfaces/FormDataInterface";

export const AdminPasswordReset = () => {
  const validationRules = {
    email: { email: true, required: true },
  };

  const { values, errors, handleChange, validate } =
    useFormValidation<AdminResetPasswordFormData>({
      email: ""
    }, validationRules);

  const navigate = useNavigate();

  const resetPassword = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validate()){

      navigate("/admin/password-reset/check-email");
    }else{
      throw new DOMException("Validation failed.")
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
        <div className="flex flex-col justify-center items-center min-h-screen">
          <form className="flex flex-col" onSubmit={resetPassword}>
            <h2 className="flex flex-col items-start text-[51.96px] leading-[62.8px] font-semibold lg:text-[51.96px] lg:leading-[62.8px] md:text-[40.6px] md:leading-[49.13px] sm:text-[40.6px] sm:leading-[49.13px] xsm:text-[22.53px] xsm:leading-[27.27px]">
              Enter your Email
            </h2>
            <span className="text-[23.09px] leading-[27.95px] text-black mt-[6.25px] lg:text-[23.09px] lg:leading-[27.95px] lg:mt-[6.25px] md:text-[18.04px] md:leading-[21.84px] md:mt-[5.1px] sm:text-[18.04px] sm:leading-[21.84px] sm:mt-[5.1px] xsm:text-[10.01px] xsm:leading-[12.12px] xsm:mt-[3.03px]">
              Enter your email to reset Password.
            </span>
            <div className="flex flex-col">
              <input
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
                className="focus:outline-none bg-gray-100 w-[589px] h-[74px] rounded-[23px] text-[28.08px] leading-[33.99px] mt-[15px] pl-[30px] lg:w-[589px] lg:h-[74px] lg:rounded-[23px] lg:px-4 lg:text-[28.08px] lg:leading-[33.99px] lg:mt-[15px] lg:pl-[30px] md:w-[460.1px] md:h-[57.74px] md:rounded-[18.04px] md:text-[21.94px] md:leading-[26.56px] sm:w-[460.1px] sm:h-[57.74px] sm:rounded-[18.04px] sm:text-[21.94px] sm:leading-[26.56px] xsm:w-[255.38px] xsm:h-[32.05px] xsm:rounded-[10.01px] xsm:text-[12.18px] xsm:leading-[14.74px]"
                placeholder="Email"
              />
              {errors.email && (
                <span className="text-red-500 text-[10px]">{errors.email}</span>
              )}
            </div>
            <button className="bg-admin-secondary w-[159px] h-[74px] rounded-[23.09px] text-primary font-bold text-[23.09px] leading-[27.95x] mt-[19.11px] lg:w-[159px] lg:h-[74px] lg:rounded-[23.09px] lg:text-[23.09px] lg:leading-[27.95x] lg:mt-[19.11px] md:w-[124.24px] md:h-[57.82px] md:text-[18.04px] md:leading-[21.8px] sm:w-[124.24px] sm:h-[57.82px] sm:text-[18.04px] sm:leading-[21.8px] xsm:w-[68.96px] xsm:h-[32.09px] xsm:rounded-[10.01px] xsm:text-[10.01px] xsm:leading-[12.12px]">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
