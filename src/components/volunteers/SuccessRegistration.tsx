import { useNavigate } from "react-router-dom";
import { media } from "../../assets";
import { LanguageSelect } from "../LanguageSelect";

export const SuccessfulRegistration = () => {

  const navigate = useNavigate();

  return (
    <div className="lg:relative bg-details bg-no-repeat bg-cover lg:filter md:filter-none z-0 lg:w-[100%] lg:h-[100vh] md:w-[100vw] md:h-[100vh] sm:w-[100vw] sm:[100vh] sm:overflow-none ">
      <div className="red-gradient bg-no-repeat bg-cover w-[100%] h-[100vh] sm:relative xsm:h-[100vh]">
        <div className="absolute top-8 right-16 z-10 text-primary hidden space-x-1">
          <img
            src={media.lang_white}
            alt="language"
            className="w-[31px] h-[29.1px] lg:w-[31px] lg:h-[29.1px] md:w-[31px] md:h-[29.1px] sm:w-[31px] sm:h-[29.1px] xsm:w-[14.2px] xsm:h-[14.0px]"
          />
          <LanguageSelect />
        </div>
        <div>
          <img
            src={`${media.whiteLogo}`}
            alt="LOGO"
            className="lg:absolute lg:w-[221px] lg:h-[90px] lg:bottom-[39px] lg:right-[35px] sm:absolute sm:w-[133px] sm:h-[55px] sm:bottom-[32px] sm:right-[31px] xsm:absolute xsm:w-[133px] xsm:h-[55px] xsm:bottom-[2%] xsm:right-[31px]"
          />
        </div>
        <div className="relative flex flex-col items-center justify-center top-[245px] w-[1040px] h-[654px] bg-primary lg:relative lg:flex lg:flex-col lg:items-center lg:top-[245px] lg:w-[1040px] lg:h-[654px]  lg:rounded-[67.49px] lg:opacity-100 m-auto md:w-[428px] md:h-[473.59px] md:m-auto md:top-[140px] md:rounded-[50.65px] sm:w-[428px] sm:h-[473.59px] sm:top-[140px] sm:rounded-[50.65px] xsm:w-[240px] xsm:h-auto xsm:relative xsm:p-8 xsm:flex xsm:flex-col xsm:top-24 xsm:m-auto xsm:rounded-[20px] xsm:items-center">
          <h2 className="text-black text-[91px] lg:text-black lg:text-[91px] leading-[91px] font-[700] lg:mt-28 xsm:text-xl xsm:font-extrabold xsm:mt-6 xsm:text-primary">
            Great!
          </h2>
          <p className="text-center text-black text-[25px] leading-[30.26px] mt-[57.73px] lg:text-center lg:text-black lg:leading-[30.26px] lg:text-[25px] lg:mt-[57.73px] xsm:text-xs xsm:mt-[10.63px] xsm:text-primary xsm:text-center">
            You have successfully Registered. <br />
            You will receive a Confirmation <br />
            Email from MCSS
          </p>
          <button
            className="bg-secondary w-[729px] h-[70px] lg:text-[25px] leading-[30.26px] lg:text-primary font-[700] lg:mt-[84px] lg:text-center lg:rounded-[16px] lg:leading-[30.26px] xsm:rounded-[5.24px] xsm:text-xs xsm:px-3 xsm:py-2 xsm:text-center xsm:text-primary"
            onClick={() => navigate('/')}
          >
            Return to MCSS
          </button>
        </div>
      </div>
    </div>
  );
};
