import { useNavigate } from "react-router-dom";
import { media } from "../../assets";
import { LanguageSelect } from "../LanguageSelect";

export const AdminRegistrationConfirmation = () => {
  const navigate = useNavigate();

  const gotoSignIn = () => {
    navigate("/admin/sign-in");
  };

  return (
    <div className="relative bg-admin bg-no-repeat bg-cover filter md:filter-none z-0 w-[100%] h-[100vh]">
      <div className="bg-primary opacity-95 bg-no-repeat bg-cover w-[100%] h-[100vh]">
      <div className="absolute top-8 right-16 z-10 text-black flex space-x-1 md:absolute md:top-[39px] md:right-[47px] sm:top-[33px] xsm:top-[18px] xsm:right-[32.1px]">
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
          <img
            src={`${media.checkcircle}`}
            alt=""
            className="w-[207px] h-[207px] lg:w-[207px] lg:h-[207px] md:w-[142.32px] md:h-[142.32px] sm:w-[142.32px] sm:h-[142.32px] xsm:w-[73.55px] xsm:h-[73.55px]"
          />
          <span className="text-blacktext-[55.61px] leading-[67.3px] mt-[1.65px] lg:text-[55.61px] lg:leading-[67.3px] lg:mt-[1.65px] font-bold md:text-[38.12px] md:leading-[46.14px] md:mt-[1.41px] sm:text-[38.12px] sm:leading-[46.14px] sm:mt-[1.41px] xsm:text-[19.7px] xsm:leading-[23.84px] xsm:mt-[0.59px]">
            Congratulations!
          </span>
          <span className="text-black text-[24.72px] leading-[29.91px] mt-[5.69px] lg:text-[24.72px] lg:leading-[29.91px] lg:mt-[5.69px] md:text-[16.95px] md:leading-[20.51px] md:mt-[3.83px] sm:text-[16.95px] sm:leading-[20.51px] sm:mt-[3.83px] xsm:text-[8.76px] xsm:leading-[10.6px]">
            Your account has been created successfully!
          </span>
          <button
            onClick={gotoSignIn}
            className="w-[285px] h-[79.09px] bg-admin-secondary rounded-[24.72px] text-primary font-semibold text-[24.72px] leading-[29.91px] mt-[21.77px] lg:w-[285px] lg:h-[79.09px] lg:text-[24.72px] lg:leading-[29.91px] lg:mt-[21.77px] md:w-[195.7px] md:h-[54.22px] md:rounded-[16.94px] md:text-[16.94px] md:leading-[20.51px] md:mt-[14.49px] sm:w-[195.7px] sm:h-[54.22px] sm:rounded-[16.94px] sm:text-[16.94px] sm:leading-[20.51px] sm:mt-[14.49px] xsm:w-[101.13px] xsm:h-[28.02px] xsm:text-[8.76px] xsm:leading-[10.6px] xsm:mt-[7.34px]"
          >
            Sign In to MCSS
          </button>
        </div>
      </div>
    </div>
  );
};
