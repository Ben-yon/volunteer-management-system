import { media } from "../../assets";

export const AdminCreateNewPassword = () => {
  return (
    <div className="relative bg-admin bg-no-repeat bg-cover filter md:filter-none z-0 w-[100%] h-[100vh]">
      <div className="bg-primary opacity-95 bg-no-repeat bg-cover w-[100%] h-[100vh]">
        <img
          src={`${media.redLogo}`}
          alt=""
          className="absolute top-[37px] left-[73px] h-[90px] w-[219.87px] lg:top-[37px] lg:left-[73px] lg:h-[90px] lg:w-[219.87px]"
        />
        <div className="flex lg:flex-row justify-center items-center min-h-screen md:flex-col">
          <img
            src={`${media.addPassword}`}
            alt=""
            className="w-[306.13px] h-[306.13px] lg:w-[306.13px] lg:h-[306.13px] md:w-[159px] md:h-[159px]"
          />
          <div className="center">
            <span className="text-[45px] w-[284.5px] leading-[54.46px] font-bold lg:text-[45px] lg:w-[284.5px] lg:leading-[54.46px]">
              Create new <br /> Password{" "}
            </span>
            <p className="text-[20px] leading-[24.2px] mt-[10.82px] lg:text-[20px] lg:leading-[24.2px] lg:mt-[10.82px]">
              Your new password must be different from <br />
              previous used passwords.
            </p>
            <form action="" className="flex flex-col mt-4">
              <input
                type="text"
                name=""
                className="bg-gray-100 w-[551.68px] h-[69.23px] rounded-[20px] px-4 text-[22px] leading-[26.63px] pl-[37.86px] lg:w-[551.68px] lg:h-[69.23px] lg:rounded-[20px] lg:px-4 lg:text-[22px] lg:leading-[26.63px] lg:pl-[37.86px]"
                placeholder="New Password"
              />
              <input
                type="text"
                name=""
                className="bg-gray-100 w-[551.68px] h-[69.23px] rounded-[20px] px-4 text-[22px] leading-[26.63px] pl-[37.86px] mt-[10.82px] lg:w-[551.68px] lg:h-[69.23px] lg:rounded-[20px] lg:px-4 lg:text-[22px] lg:leading-[26.63px] lg:pl-[37.86px]"
                placeholder="Confirm Password"
              />
              <button className="bg-tertiary w-[249.88px] h-[69.23px] rounded-[20px] text-[20px] leading-[24.2px] mt-[22.71px] text-primary font-bold lg:w-[249.88px] lg:h-[69.23px] lg:rounded-[20px] lg:text-[20px] lg:leading-[24.2px] lg:mt-[22.71px]">
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
