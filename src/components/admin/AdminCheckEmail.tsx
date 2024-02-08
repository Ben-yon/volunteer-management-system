import { Link } from "react-router-dom";
import { media } from "../../assets";
import { LanguageSelect } from "../LanguageSelect";

export const AdminCheckEmail = () => {
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
            src={`${media.envelope}`}
            alt=""
            className="w-[266.95px] h-[213.56px] lg:w-[266.95px] lg:h-[213.56px] md:w-[224.3px] md:h-[224.3px] sm:w-[224.3px] sm:h-[224.3px] xsm:w-[99.7px] xsm:h-[99.7px]"
          />
          <span className="text-[45px] leading-[54.46px] lg:text-[45px] lg:leading-[54.46px] font-bold mt-[21.59px] lg:mt-[21.59px] md:text-[37.11px] md:leading-[44.91px] md:mt-[18.12px] sm:text-[37.11px] sm:leading-[44.91px] sm:mt-[18.12px] xsm:text-[16.49px] xsm:leading-[19.96px] xsm:mt-[10.1px]">
            Check your mail
          </span>
          <p className="text-[15px] leading-[18.15px] mt-[10.6px] lg:text-[15px] lg:leading-[18.15px] lg:mt-[10.6px] md:text-[12.37px] md:leading-[14.96px] md:mt-[6.95px] sm:text-[12.37px] sm:leading-[14.96px] sm:mt-[6.95px] xsm:text-[5.5px] xsm:leading-[6.65px] xsm:mt-[13.2px]">
            We have sent a password recover instructions to your email
          </p>
          <button className="w-[200.21px] h-[75.37px] rounded-[20px] bg-tertiary font-bold text-[22px] leading-[26.63px] text-primary mt-3 lg:w-[200.21px] lg:h-[75.37px] lg:rounded-[20px] lg:text-[22px] lg:leading-[26.63px] md:w-[140.19px] md:h-[52.78px] md:rounded-[16.49px] md:text-[18.14px] md:leading-[21.96px] md:mt-[29.69px] sm:w-[140.19px] sm:h-[52.78px] sm:rounded-[16.49px] sm:text-[18.14px] sm:leading-[21.96px] sm:mt-[29.69px] xsm:w-[62.31px] xsm:h-[23.46px] xsm:rounded-[7.33px] xsm:text-[8.06px] xsm:leading-[9.76px] xsm:mt-[13.2px]">
            Open Email
          </button>
          <p className="text-[15px] leading-[18.15px] mt-[38.83px] lg:text-[15px] lg:leading-[18.15px] lg:mt-[38.83px] md:text-[12.37px] md:leading-[14.97px] md:mt-[12.37px] sm:text-[12.37px] sm:leading-[14.97px] sm:mt-[12.37px] xsm:text-[5.5px] xsm:leading-[6.65px] xsm:mt-[5.5px]">
            <Link to="/admin/password-reset/new-password">
              Skip, I’ll confirm later
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
