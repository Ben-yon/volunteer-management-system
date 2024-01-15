import { media } from "../../assets";

export const AdminRegistration = () => {
  return (
    <div className="relative bg-admin bg-no-repeat bg-cover filter md:filter-none z-0 w-[100%] sm:w-[758px] md:w-[100%] h-[1170px] sm:h-[auto]">
      <div className="bg-primary opacity-90 bg-no-repeat bg-cover w-[100%] md:w-[100%] h-[100%] sm:w-[758px] md:h-[100%]">
        <img
          src={`${media.redLogo}`}
          alt=""
          className="lg:absolute lg:top-10 left-2 lg:h-[90px] lg:w-[220px] sm:w-[136px] sm:h-[56px]"
        />
        <div className="flex flex-col justify-left items-center lg:relative lg:-top-9">
          <h2 className="lg:relative lg:-left-40 lg:top-52 lg:font-bold lg:text-4xl sm:w-[231px] sm:h-[94px] sm:left-60 sm:text-7xl">
            Create your <br /> account
          </h2>
          <form className="flex flex-col">
            <input
              type="text"
              className="lg:relative lg:top-60 border lg:w-[546px] h-[69px] rounded-[22px] bg-gray-100 leading-6 text-black text-2xl px-4 sm:w-[437.39px]"
              placeholder="First Name"
            />
            <input
              type="text"
              className="relative top-60 border w-[546px] h-[69px] rounded-[22px] bg-gray-100 leading-6 text-black text-2xl px-4 mt-[11px]"
              placeholder="Surname"
            />
            <input
              type="email"
              className="relative top-60 border w-[546px] h-[69px] rounded-[22px] bg-gray-100 leading-6 text-black text-2xl px-4 mt-[11px]"
              placeholder="Email"
            />
            <input
              type="password"
              className="relative top-60 border w-[304px] h-[69px] rounded-[22px] bg-gray-100 leading-6 text-black text-2xl px-4 mt-[11px]"
              placeholder="Password"
            />
            <div></div>
            <p className="relative top-72 text-black text-xs">
              By clicking "Sign Up" you agree to{" "}
              <a href="#">
                <b>MCSS Terms</b> and <b>Privacy Policy</b>
              </a>
            </p>
            <button className="relative top-72 bg-tertiary text-white px-1 py-3 rounded-[21.41px] w-[182px] mt-[22px] font-bold text-xl">
              Sign Up
            </button>
          </form>
          <p className="relative top-72 -left-48 mt-[26px] text-xs">Already have an account? <a href="#"><b>Sign In</b></a> </p>
        </div>
      </div>
    </div>
  );
};
