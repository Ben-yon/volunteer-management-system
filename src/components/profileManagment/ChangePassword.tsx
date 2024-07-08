export const ChangePassword = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center relative top-[53px]">
        <form action="">
          <h1 className="font-[600] text-[20px] leading-[24.2px] text-center">
            Change Password
          </h1>
          <div className="flex flex-col mb-[5px] mt-[21px]">
            <label
              htmlFor="Old Password"
              className="font-[600] text-[17px] leading-[20.57px] text-gray-500"
            >
              Old Password
            </label>
            <input
              type="text"
              className="w-[360px] h-[40px] border-[1px] rounded-[8px] bg-image-card text-[15px] font-[500] leading-[18.15px] pl-[9px]"
            />
          </div>
          <div className="flex flex-col mt-[33px]">
            <label
              htmlFor="New Password"
              className="font-[600] text-[17px] leading-[20.57px] text-gray-500"
            >
              New Password
            </label>
            <input
              type="text"
              className="w-[360px] h-[40px] border-[1px] rounded-[8px] bg-image-card text-[15px] font-[500] leading-[18.15px] pl-[9px]"
            />
          </div>
          <span className="text-gray-300 font-[500] text-[11.76px] leading-[14.23px] tracking-[-3%]">Please add all necessary characters to create safe password.</span>
          <ul className="list-disc flex flex-col mt-[20px] text-gray-400 font-[500] text-[11.76px] leading-[14.23px] tracking-[-3%] relative left-[15px]">
            <li>Minimum characters 7</li>
            <li>One uppercase character </li>
            <li>One lowercase character </li>
            <li>One special character </li>
            <li>One number </li>
          </ul>
          <div className="flex flex-col mt-[26.36px]">
            <label
              htmlFor="Confirm Password"
              className="font-[600] text-[17px] leading-[20.57px]"
            >
              Confirm Password
            </label>
            <input
              type="text"
              className="w-[360px] h-[40px] border-[1px] rounded-[8px] bg-image-card text-[15px] font-[500] leading-[18.15px] pl-[9px]"
            />
          </div>
        </form>
        <button className="w-[360px] h-[40px] bg-admin-secondary text-primary rounded-[8px] mt-[58px] font-[600] text-[15px] leading-[18.15px]">
            Change Password
        </button>
        <a href="" className="text-[17px] font-[600] leading-[20.57px] mt-[123px] text-admin-secondary underline">Forgot Password?</a>
      </div>
    </div>
  );
};
