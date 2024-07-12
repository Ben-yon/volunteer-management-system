import { media } from "../../assets";
import { LanguageSelect } from "../LanguageSelect";

export const AdminConfirmPasswordChange = () => {
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
          <img
            src={`${media.passwordChanged}`}
            alt=""
            className="w-[200.78px] h-[200.78px] lg:w-[200.78px] lg:h-[200.78px] md:w-[133.96px] md:h-[133.96px] sm:w-[133.96px] sm:h-[133.96px] xsm:w-[77.54px] xsm:h-[77.54px]"
          />
          <span className="text-[53.78px] leading-[65.09px] mt-[4.78px] lg:text-[53.78px] lg:leading-[65.09px] lg:mt-[4.78px] font-bold md:text-[35.88px] md:leading-[43.43px] md:mt-[3.19px] sm:text-[35.88px] sm:leading-[43.43px] sm:mt-[3.19px] xsm:text-[20.77px] xsm:leading-[25.14px] xsm:mt-[1.85px]">
            Password <br /> Changed!
          </span>
          <p className="text-[23.9px] leading-[28.93px] mt-[13.42px] lg:text-[23.9px] lg:leading-[28.93px] lg:mt-[13.42px] md:text-[15.95px] md:leading-[19.3px] md:mt-[9.69px] sm:text-[15.95px] sm:leading-[19.3px] sm:mt-[9.69px] xsm:text-[9.23px] xsm:leading-[11.17px] xsm:mt-[5.38px]">
            Your password have been changed successfully.
          </p>
          <button className="bg-admin-secondary w-[276.08px] h-[76.49px] rounded-[23.9px] text-[23.9px] leading-[28.93px] text-primary mt-[27.17px] font-bold lg:w-[276.08px] lg:h-[76.49px] lg:rounded-[23.9px] lg:text-[23.9px] lg:leading-[28.93px] md:w-[184.2px] md:h-[51.03px] md:rounded-[15.95px] md:text-[15.95px] md:leading-[19.3px] md:mt-[18.48px] sm:w-[184.2px] sm:h-[51.03px] sm:rounded-[15.95px] sm:text-[15.95px] sm:leading-[19.3px] sm:mt-[18.48px] xsm:w-[106.62px] xsm:h-[29.54px] xsm:rounded-[9.23px] xsm:text-[9.23px] xsm:leading-[11.17px] xsm:mt-[10.69px]">
            Return to MCSS
          </button>
        </div>
      </div>
    </div>
  );
};
