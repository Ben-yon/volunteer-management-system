import { Link } from "react-router-dom";
import  { media }  from "../../assets"

export const AdminSignIn = () => {
    return (
      <div className="flex justify-center items-center min-h-screen bg-admin bg-no-repeat bg-cover filter md:filter-none z-0 w-[100%] lg:h-[100vh] lg:w-[100vw] sm:w-[100vw] md:w-[100vw] md:h-[100vh] sm:h-[100vh] xsm:w-[100vw] xsm:h-[100vh]">
        <div className="bg-primary opacity-95 bg-no-repeat bg-cover w-[100%] md:w-[100%] h-[100%]">
          <img
            src={`${media.redLogo}`}
            alt=""
            className="absolute top-[29px] lg:absolute lg:top-[29px] left-[27px] lg:h-[90px] lg:w-[220px] md:w-[90px] md:h-[37px] md:absolute md:top-[11px] sm:w-[90px] sm:h-[37px] xsm:w-[90px] xsm:h-[37px] xsm:absolute xsm:top-[11px]"
          />
          <div className="flex flex-col justify-center items-center min-h-screen">
            <form className="flex flex-col justify-center items-start">
              <h2 className="text-[49.44px] leading-[60.53px] font-bold lg:text-[49.44px] lg:leading-[60.53px] md:text-[37.2px] md:leading-[45.03px] sm:text-[37.2px] sm:leading-[45.03px] xsm:text-[21.33px] xsm:leading-[25.81px]">
                Welcome back <br /> to MCSS Admin
              </h2>
              <p className="text-black text-[25.53px] lg:text-[25.53px] lg:mt-[10.6px] md:text-[16.5px] md:leading-[20.01px] md:mt-[7.56px] sm:mt-[7.56px] leading-6 xsm:text-[9.48px] xsm:leading-[11.47px]">
                Sign in to your account below
              </p>
              <input
                type="email"
                className="border focus:outline-none w-[545.86px] h-[68.5px] mt-[35.38px] lg:w-[545.86px] lg:h-[68.5px] lg:rounded-[21.41px] rounded-[21.41px] bg-gray-100 leading-6 text-black text-2xl px-4 md:w-[437.39px] md:h-[54.88px] md:rounded-[17.15px] md:text-xl sm:w-[437.39px] sm:h-[54.88px] sm:rounded-[17.15px] sm:text-xl xsm:w-[243.77px] xsm:h-[30.59px] xsm:rounded-[9.5px] xsm:text-xs xsm:mt-[13.65px}"
                placeholder="Email"
              />
              <input
                type="password"
                className="border focus:outline-none w-[545.86px] h-[68.5px] mt-[21.7px] lg:w-[545.86px] lg:h-[68.5px] lg:rounded-[21.41px] rounded-[21.41px] bg-gray-100 text-black text-[28.08px] leading-[33.99px] px-4 md:w-[437.39px] md:h-[54.88px] md:rounded-[17.15px] md:text-xl sm:w-[437.39px] sm:h-[54.88px] sm:rounded-[17.15px] sm:text-xl xsm:w-[243.77px] xsm:h-[30.59px] xsm:rounded-[9.5px] xsm:text-xs xsm:mt-[8.06px]"
                placeholder="Password"
              />
              <span className="mt-[21.7px] lg:mt-[21.7px] lg:text-[19.15px] lg:leading-[23.17px] md:text-[12.4px] md:leading-[15.01px] sm:text-[12.4] sm:leading-[15.01px] xsm:text-[7.11px] xsm:leading-[8.6px] xsm:mt-[8.06px]">Forgot Password?</span>
              <button className=" bg-tertiary text-white px-1 py-3 rounded-[25.53px] w-[167.22px] h-[81.69px] text-[28.08px] leading-[33.99px] lg:text-[28.08px] lg:leading-[33.99px] lg:rounded-[25.53px] lg:w-[167.22px] lg:h-[81.69px] mt-[43.28px] font-bold md:text-[18.19px] md:leading-[22.01px] md:w-[108.31px] md:h-[52.91px] md:mt-[27.99px] xsm:w-[62.09px] xsm:h-[30.33px] xsm:rounded-[9.48px] xsm:text-[10.43px] xsm:leading-[12.6px] xsm:mt-[15.65px] xsm:py-2">
                Sign In
              </button>
              <p className="text-[19.15px] leading-[23.17px] lg:text-[19.15px] lg:leading-[23.17px] mt-[21.7px] lg:mt-[21.7px] md:text-[12.4px] md:leading-[15.01px] md:mt-[14.06px] xsm:mt-[11.43px] xsm:text-[7.11px] xsm:leading-[8.6px]">Dont' have an account? <Link to="/admin/sign-up"><b>Sign Up</b></Link></p>
            </form>
          </div>
        </div>
      </div>
    );
}