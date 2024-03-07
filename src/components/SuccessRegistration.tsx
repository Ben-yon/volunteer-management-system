import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { media } from "../assets";
import { gsap } from "gsap";
import { LanguageSelect } from "./LanguageSelect";
import { useGSAP } from "@gsap/react";

export const SuccessfulRegistration = () => {
  const checkmarkElement = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ paused: false, repeat: 0 });

    tl.fromTo(
      checkmarkElement.current,
      {
        y: "100%",
        duration: 3,
        rotate: "180%",
        ease: "power1.inout",
      },
      {
        y: "%",
        duration: 0.4,
        rotate: "360%",
        ease: "power1.inOut",
      }
    );
  }, []);

  const navigate = useNavigate();

  return (
    <div className="lg:relative bg-details bg-no-repeat bg-cover lg:filter md:filter-none z-0 lg:w-[100%] lg:h-[100vh] md:w-[100vw] md:h-[100vh] sm:w-[100vw] sm:[100vh] sm:overflow-none ">
      <div className="red-gradient bg-no-repeat bg-cover w-[100%] h-[100vh] sm:relative xsm:h-[100vh]">
        <div className="absolute top-8 right-16 z-10 text-primary flex space-x-1">
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
        <div className="relative flex flex-col items-center justify-center top-[100px] w-[493px] h-[506.7px] lg:relative lg:flex lg:flex-col lg:items-center lg:top-[100px] lg:w-[493px] lg:h-[506.7px] white-gradient lg:rounded-[67.49px] lg:opacity-100 m-auto md:w-[428px] md:h-[473.59px] md:m-auto md:top-[140px] md:rounded-[50.65px] sm:w-[428px] sm:h-[473.59px] sm:top-[140px] sm:rounded-[50.65px] xsm:w-[240px] xsm:h-auto xsm:relative xsm:p-8 xsm:flex xsm:flex-col xsm:top-24 xsm:m-auto xsm:rounded-[20px] xsm:items-center">
          <h2 className="lg:text-primary lg:text-4xl font-bold lg:mt-28 xsm:text-xl xsm:font-extrabold xsm:mt-6 xsm:text-primary">
            Great!
          </h2>
          <p className="lg:text-center lg:text-primary lg:text-xm xsm:text-xs xsm:mt-[10.63px] xsm:text-primary xsm:text-center">
            You have successfully Registered. <br />
            You will receive a Confirmation <br />
            Email from MCSS
          </p>
          <div>
            <img
              src={`${media.checkmark}`}
              alt=""
              className="lg:mt-[18.44px] xsm:w-[107.85px] xsm:h-[107.85px]"
              ref={checkmarkElement}
            />
          </div>
          <button
            className="register-form-submit lg:text-primary lg:font-bold lg:mt-[28.7px] lg:text-center lg:rounded-[12.7px] lg:leading-5 lg:py-3 lg:px-6 xsm:rounded-[5.24px] xsm:text-xs xsm:px-3 xsm:py-2 xsm:text-center xsm:text-primary xsm:font-bold"
            onClick={() => navigate('/')}
          >
            MCSS
          </button>
        </div>
      </div>
    </div>
  );
};
