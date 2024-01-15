import { media } from "../assets";
import gsap from "gsap";

export const SuccessfulRegistration = () => {
  return (
    <div className="lg:relative bg-details bg-no-repeat bg-cover lg:filter md:filter-none z-0 lg:w-[100%] lg:h-[100vh] sm:w-[654px] sm:overflow-none ">
      <div className="red-gradient bg-no-repeat bg-cover lg:w-[100%] lg:h-[100vh] sm:relative xsm:h-[100vh]">
        <div>
          <img
            src={`${media.whiteLogo}`}
            alt="LOGO"
            className="lg:absolute lg:w-[221px] lg:h-[90px] lg:bottom-[39px] lg:right-[35px] sm:absolute sm:w-[133px] sm:h-[55px] sm:bottom-[32px] sm:right-[31px] xsm:absolute xsm:w-[133px] xsm:h-[55px] xsm:bottom-[2%] xsm:right-[31px]"
          />
        </div>
        <div className="lg:relative lg:flex lg:flex-col lg:items-center lg:top-28 lg:w-[493px] lg:h-[556.7px] white-gradient lg:rounded-[67.49px] lg:opacity-100 m-auto xsm:w-[240px] xsm:h-auto xsm:relative xsm:p-8">
          <h2 className="lg:text-primary lg:text-4xl font-bold lg:mt-28 xsm:text-xl xsm:font-extrabold xsm:mt-6">
            Great!
          </h2>
          <p className="lg:text-center lg:text-primary lg:mt-[21.52px] lg:text-xm xsm:text-xs xsm:mt-[10.63px] xsm:">
            You have successfully Registered. <br />
            You will receive a Confirmation <br />
            Email from MCSS
          </p>
          <img
            src={`${media.checkmark}`}
            alt=""
            className="lg:mt-[18.44px]  xsm:w-[107.85px] xsm:h-[107.85px]"
          />
          <button className="register-form-submit lg:text-primary lg:font-bold lg:mt-[28.7px] lg:text-center lg:rounded-[12.7px] lg:leading-5 lg:py-3 lg:px-6 xsm:rounded-[5.24px] xsm:text-xs xsm:px-3 xsm:py-2 xsm:text-center">
            MCSS
          </button>
        </div>
      </div>
    </div>
  );
};
