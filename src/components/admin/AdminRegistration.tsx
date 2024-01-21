import { media } from "../../assets";
import { Link, useNavigate } from "react-router-dom";

export const AdminRegistration = () => {

  const navigate = useNavigate()

  const signUp = () => {
    navigate('/admin/register-confirm')
  }

  return (
    <div className="bg-admin bg-no-repeat bg-cover filter md:filter-none z-0 w-[100vw] h-[100vh] lg:h-[100vh] lg:w-[100vw] sm:w-[100vw] md:w-[100vw] md:h-[100vh] sm:h-[100vh] xsm:w-[100vw] xsm:h-[100vh]">
      <div className="bg-primary opacity-95 bg-no-repeat bg-cover w-[100vw] h-[100vh] lg:w-[100vw] lg:h-[100vh] sm:w-[100vw] md:w-[100vw] md:h-[100vh] sm:h-[100vh] xsm:w-[100vw] xsm:h-[100vh]">
        <img
          src={`${media.redLogo}`}
          alt=""
          className="absolute top-[29px] lg:absolute lg:top-[29px] left-[27px] lg:h-[90px] lg:w-[220px] md:w-[90px] md:h-[37px] md:absolute md:top-[11px] sm:w-[90px] sm:h-[37px] xsm:w-[90px] xsm:h-[37px] xsm:absolute xsm:top-[11px]"
        />
        <div className="flex flex-col justify-center items-center min-h-screen">
          <form className=" flex flex-col justify-center items-start">
            <h2 className="lg:font-bold lg:text-4xl md:w-[231px] md:h-[94px] md:left-60 md:text-3xl md:font-bold sm:w-[231px] sm:h-[94px] sm:left-60 sm:text-3xl sm:font-bold xsm:h-[52px] xsm:w-[129px] xsm:font-bold">
              Create your <br /> account
            </h2>
            <input
              type="text"
              className="border focus:outline-none w-[545.86px] h-[68.5px] lg:w-[545.86px] lg:h-[68.5px] lg:rounded-[21.41px] rounded-[21.41px] bg-gray-100 leading-6 text-black text-2xl px-4 md:w-[437.39px] md:h-[54.88px] md:rounded-[17.15px] md:text-xl sm:w-[437.39px] sm:h-[54.88px] sm:rounded-[17.15px] sm:text-xl xsm:w-[243.77px] xsm:h-[30.59px] xsm:rounded-[9.5px] xsm:text-xs"
              placeholder="First Name"
            />
            <input
              type="text"
              className="border focus:outline-none w-[545.86px] h-[68.5px] lg:w-[545.86px] lg:h-[68.5px] lg:rounded-[21.41px] rounded-[21.41px] bg-gray-100 leading-6 text-black text-2xl px-4 md:w-[437.39px] md:h-[54.88px] md:rounded-[17.15px] md:text-xl sm:w-[437.39px] sm:h-[54.88px] sm:rounded-[17.15px] sm:text-xl xsm:w-[243.77px] xsm:h-[30.59px] xsm:rounded-[9.5px] xsm:text-xs mt-[11px]"
              placeholder="Surname"
            />
            <input
              type="email"
              className="border focus:outline-none w-[545.86px] h-[68.5px] lg:w-[545.86px] lg:h-[68.5px] lg:rounded-[21.41px] rounded-[21.41px] bg-gray-100 leading-6 text-black text-2xl px-4 md:w-[437.39px] md:h-[54.88px] md:rounded-[17.15px] md:text-xl sm:w-[437.39px] sm:h-[54.88px] sm:rounded-[17.15px] sm:text-xl xsm:w-[243.77px] xsm:h-[30.59px] xsm:rounded-[9.5px] xsm:text-xs mt-[11px]"
              placeholder="Email"
            />
            <input
              type="password"
              className="border focus:outline-none w-[303.97px] h-[68.5px] lg:w-[303.97px] lg:h-[68.5px] lg:rounded-[21.41px] rounded-[21.41px] bg-gray-100 leading-6 text-black text-2xl px-4 md:w-[243.51px] md:h-[54.88px] md:rounded-[17.15px] md:text-xl sm:w-[243.51px] sm:h-[54.88px] sm:rounded-[17.15px] sm:text-xl xsm:w-[135.75px] xsm:h-[30.59px] xsm:rounded-[9.5px] xsm:text-xs mt-[11px]"
              placeholder="Password"
            />
            <div></div>
            <p className=" text-black text-xs mt-[42.81px]">
              By clicking "Sign Up" you agree to{" "}
              <a href="#">
                <b>MCSS Terms</b> and <b>Privacy Policy</b>
              </a>
            </p>
            <button 
              onClick={signUp }
              className="bg-tertiary text-white px-1 py-3 rounded-[21.41px] w-[182px] mt-[21.67px] lg:rounded-[21.41px] lg:w-[182px] lg:mt-[21.67px] lg:text-[23.55px] lg:leading-[28.5px] md:w-[145.76px] md:h-[54.88px] md:rounded-[17.15px] md:mt-[16.58px] md:text-[18.86px] md:leading-[22.83px] sm:w-[145.76px] sm:h-[54.88px] sm:rounded-[17.15px] sm:mt-[16.58px] sm:text-[18.86px] sm:leading-[22.83px] xsm:w-[81.26px] xsm:h-[30.59px] xsm:rounded-[9.56px] xsm:text-xs xsm:px-2 xsm:py-2 xsm:text-[10.52px] xsm:leading-[12.73px] font-bold text-[23.55px]">
              Sign Up
            </button>
            <p className="mt-[21.67px] text-xs">
              Already have an account?{" "}
              <Link to="/admin/sign-in">
                <b>Sign In</b>
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
