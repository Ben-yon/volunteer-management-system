import  { media }  from "../../assets"

export const AdminSignIn = () => {
    return (
      <div className="relative bg-admin bg-no-repeat bg-cover filter md:filter-none z-0 w-[100%] h-[1117px]">
        <div className="bg-primary opacity-90 bg-no-repeat bg-cover w-[100%] h-[1117px]">
          <img
            src={`${media.redLogo}`}
            alt=""
            className="absolute top-10 left-2 h-[90px] w-[220px]"
          />
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-bold text-4xl text-black relative top-[251px] -left-40">
              Welcome back <br /> to MCSS Admin
            </h2>
            <p className="relative top-64 -left-40 text-xl leading-6">Sign in to your account below</p>
            <form className="flex flex-col flex-1">
              <input 
                type="email"
                className="relative top-72 bg-gray-100 w-[651px] h-[81px] rounded-[26px] leading-6 px-4 text-xl"
                placeholder="Email"
              />
              <input 
                type="password"
                className="relative top-72 bg-gray-100 w-[651px] h-[81px] rounded-[26px] leading-6 px-4 text-xl mt-[22px]"
                placeholder="Password"
              />
              <span className="relative top-80">Forgot Password?</span>
              <button className="relative top-80 bg-tertiary text-white px-1 py-3 rounded-[21.41px] w-[182px] mt-[22px] font-bold text-xl">Sign In</button>
            </form>
          </div>
        </div>
      </div>
    );
}