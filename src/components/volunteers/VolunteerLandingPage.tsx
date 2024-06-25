import { useNavigate } from "react-router-dom";
import { media } from "../../assets";
import { LanguageSelect } from "../LanguageSelect";

export const VolunteerLandingPage = () => {
  const navigate = useNavigate();

  const nextPage = () => {
    navigate("volunteer-upload-avatar");
  };

  return (
    <div className="relative filter min-h-screen w-[100vw] lg:h-[950px] md:h-[1285px] sm:h-[100%] xsm:h-[100%] lg:bg-hero md:bg-hero sm:bg-hero xsm:bg-hero-xsm bg-no-repeat bg-cover lg:filter md:filter-none z-0 sm:overflow-none">
      <div className="red-gradient bg-no-repeat bg-cover w-[100vw] h-full">
        <div className="absolute top-8 right-16 z-10 text-primary flex space-x-1">
          <img
            src={media.lang_white}
            alt="language"
            className="w-[31px] h-[29.1px] lg:w-[31px] lg:h-[29.1px] md:w-[31px] md:h-[29.1px] sm:w-[31px] sm:h-[29.1px] xsm:w-[14.2px] xsm:h-[14.0px]"
          />
          <LanguageSelect />
        </div>
        <div className="">
          <img
            src={`${media.whiteLogo}`}
            alt="LOGO"
            className="absolute w-[221px] h-[90px] right-[35px] bottom-[30px] lg:absolute lg:w-[221px] lg:h-[90px] lg:bottom-[30px] lg:right-[35px] md:absolute md:w-[133px] md:h-[55px] md:bottom-[32px] md:right-[31px]  sm:absolute sm:w-[133px] sm:h-[55px] sm:bottom-[32px] sm:right-[31px] xsm:absolute xsm:w-[133px] xsm:h-[55px] xsm:bottom-[2%] xsm:right-[31px]"
          />
        </div>

        <div className="flex flex-col items-center justify-center relative top-[193px]">
          <h1 className="text-primary font-[700] capitalize text-[43.05px] leading-[52.09px] h-[52px] ">
            Who we are
          </h1>
          <img
            src={media.mcss_lg}
            alt=""
            className="w-[393.32px] h-[393.32px]"
          />
          <p className="text-primary font-[600px] text-[21.94px] leading-[26.56px] text-center w-[671px] h-[134.2px]">
            We're an incorporated Black and Racialized-led and serving
            community-based multi-services agency that delivers a continuum of
            programs and services in the Lower Mainland of British Columbia.
          </p>
          <button
            className="bg-primary mt-[53.69px] w-[440px] h-[71px] rounded-[24px] text-secondary text-[27px] leading-[32.68px] font-[700]"
            onClick={() => nextPage()}
          >
            Register as a Volunteer
          </button>
        </div>
      </div>
    </div>
  );
};
