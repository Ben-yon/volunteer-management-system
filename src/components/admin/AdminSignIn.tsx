import  { media }  from "../../assets"

export const AdminSignIn = () => {
    return (
      <div className="flex justify-center items-center min-h-screen bg-admin bg-no-repeat bg-cover filter md:filter-none z-0 w-[100%] lg:h-[100vh] lg:w-[100vw] sm:w-[100vw] md:w-[100vw] md:h-[100vh] sm:h-[100vh] xsm:w-[100vw] xsm:h-[100vh]">
        <div className="bg-primary opacity-90 bg-no-repeat bg-cover w-[100%] md:w-[100%] h-[100%]">
          <img
            src={`${media.redLogo}`}
            alt=""
            className="absolute top-[29px] lg:absolute lg:top-[29px] left-[27px] lg:h-[90px] lg:w-[220px] md:w-[90px] md:h-[37px] md:absolute md:top-[11px] sm:w-[90px] sm:h-[37px] xsm:w-[90px] xsm:h-[37px] xsm:absolute xsm:top-[11px]"
          />
          <div className="flex flex-col relative top-[251px] justify-center items-center xsm:p-10 xsm:relative xsm:top-[190px]">
            <form className="flex flex-col justify-center items-start">
              <h2 className="">
                Welcome back <br /> to MCSS Admin
              </h2>
              <p className="text-black mt-[10.6px] md:text-xs md:mt-[7.56px] sm:mt-[7.56px] leading-6 ">
                Sign in to your account below
              </p>
              <input
                type="email"
                className="border focus:outline-none w-[545.86px] h-[68.5px] lg:w-[545.86px] lg:h-[68.5px] lg:rounded-[21.41px] rounded-[21.41px] bg-gray-100 leading-6 text-black text-2xl px-4 md:w-[437.39px] md:h-[54.88px] md:rounded-[17.15px] md:text-xl sm:w-[437.39px] sm:h-[54.88px] sm:rounded-[17.15px] sm:text-xl xsm:w-[243.77px] xsm:h-[30.59px] xsm:rounded-[9.5px] xsm:text-xs"
                placeholder="Email"
              />
              <input
                type="password"
                className="border focus:outline-none w-[545.86px] h-[68.5px] lg:w-[545.86px] lg:h-[68.5px] lg:rounded-[21.41px] rounded-[21.41px] bg-gray-100 leading-6 text-black text-2xl px-4 md:w-[437.39px] md:h-[54.88px] md:rounded-[17.15px] md:text-xl sm:w-[437.39px] sm:h-[54.88px] sm:rounded-[17.15px] sm:text-xl xsm:w-[243.77px] xsm:h-[30.59px] xsm:rounded-[9.5px] xsm:text-xs"
                placeholder="Password"
              />
              <span className="">Forgot Password?</span>
              <button className=" bg-tertiary text-white px-1 py-3 rounded-[21.41px] w-[182px] mt-[22px] font-bold text-xl">
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    );
}