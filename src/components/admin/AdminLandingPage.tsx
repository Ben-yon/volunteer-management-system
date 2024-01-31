import { useNavigate } from "react-router-dom";
import { media } from "../../assets";
import { LanguageSelect } from "../LanguageSelect";

export const AdminLandingPage = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("sign-in");
  };

  const handleSignUp = () => {
    navigate("sign-up");
  };

  return (
    <div className="relative bg-admin bg-no-repeat bg-cover filter md:filter-none z-0 w-[100%] h-[100%]">
      <div className="bg-primary opacity-95 bg-no-repeat bg-cover w-[100%] h-[100vh]">
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
          className="absolute top-[29px] lg:absolute lg:top-[29px] left-[27px] lg:h-[90px] lg:w-[220px] md:w-[90px] md:h-[37px] md:absolute md:top-[11px] sm:w-[90px] sm:h-[37px] xsm:w-[90px] xsm:h-[37px] xsm:absolute xsm:top-[11px]"
        />
        <div className="flex flex-col justify-center items-center min-h-screen">
          <h2 className="text-tertiary font-leelawadee font-semibold text-center text-[274.26px] leading-[327.96px] lg:text-[274.26px] lg:leading-[327.96px] md:text-[170.17px] md:leading-[203.48px] sm:text-[170.17px] sm:leading-[203.48px] xsm:text-[97.54px] xsm:leading-[116.64px] ">
            Hello
          </h2>
          <p className="relative -top-72 left-64 font-leelawadee font-semibold text-tertiary text-[59.62px] leading-[73.04px] lg:-top-72 lg:left-64 lg:text-[59.62px] lg:leading-[73.04px] md:text-[36.99px] md:leading-[45.32px] md:-top-44 md:left-40 sm:text-[36.99px] sm:leading-[45.32px] sm:-top-44 sm:left-40 xsm:text-[21.1px] xsm:leading-[25.98px] xsm:-top-[100px] xsm:left-[90px]">
            Admin
          </p>
          <div className="flex lg:flex md:flex sm:flex xsm:flex">
            <button
              className="w-[166.94px] h-[71.55px] text-[22.66px] leading-[27.42px] bg-black text-white rounded-[23.85px] font-bold mr-[41.73px] lg:w-[166.94px] lg:h-[71.55px] lg:text-[22.66px] lg:leading-[27.42px] lg:mr-[41.73px] md:w-[103.58px] md:h-[44.39px] md:rounded-[14.8px] md:text-[14.06px] md:leading-[17.01px] md:mr-[26.64px] sm:w-[103.58px] sm:h-[44.39px] sm:rounded-[14.8px] sm:text-[14.06px] sm:leading-[17.01px] sm:mr-[26.64px] xsm:w-[65.37px] xsm:h-[27.45px] xsm:rounded-[8.48px] xsm:text-[11.06px] xsm:leading-[12.75px] xsm:mr-[15.27px]"
              onClick={handleSignIn}
            >
              Sign In
            </button>
            <button
              className="w-[224.17px] h-[71.55px] text-[22.66px] leading-[27.42px] bg-black text-white rounded-[23.85px] font-bold lg:w-[224.17px] lg:h-[71.55px] lg:text-[22.66px] lg:leading-[27.42px] md:w-[139.0px] md:h-[44.39px] md:rounded-[14.8px] md:text-[14.06px] md:leading-[17.0px] sm:w-[139.0px] sm:h-[44.39px] sm:rounded-[14.8px] sm:text-[14.06px] sm:leading-[17.0px] xsm:w-[85.73px] xsm:h-[27.45px] xsm:text-[11.06px] xsm:leading-[12.75px] xsm:rounded-[9.75px]"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
