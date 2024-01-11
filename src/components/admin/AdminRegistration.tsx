import { media } from "../../assets";

export const AdminRegistration = () => {
  return (
    <div className="relative bg-admin bg-no-repeat bg-cover filter md:filter-none z-0 w-[100%] h-[1117px]">
      <div className="bg-primary opacity-90 bg-no-repeat bg-cover w-[100%] h-[1117px]">
        <img
          src={`${media.redLogo}`}
          alt=""
          className="absolute top-10 left-2 h-[90px] w-[220px]"
        />
        <div className="flex flex-col justify-center items-center">
          <h2 className="relative -left-40 top-52 font-bold text-4xl ">
            Create your <br /> account
          </h2>
          <form className="flex flex-col">
            <input
              type="text"
              className="relative top-60 border w-[546px] h-[69px] rounded-[22px] bg-gray-100 leading-6 text-black text-2xl px-4"
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
