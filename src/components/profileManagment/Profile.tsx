import { media } from "../../assets";

export const Profile = () => {
  return (
    <>
    
    <div className="flex  flex-col justify-center">
      <p className="text-[#D9D9D9] text-[15px] font-extrabold leading-[18.15px]">
        MCSS Volunteers
      </p>
      <h2 className="text-black font-extrabold text-[27px] leading-[32.68px] pb-6">
        Profile
      </h2>
    </div>
    <div className="flex justify-center space-x-[9px]">
        <div className="w-[336px]">
            <img src={media.upload} alt="" className="w-[109px] h-[109px]"/>
            <div className="mt-[45px]">
                <p className="font-[600] text-[21px] leading-[25.41px]">
                    The user goes here
                </p>
                <span className="font-[500] text-[15px] leading-[18.15px] text-gray-400">
                    Last sign in 5 minutes ago
                </span>
            </div>
            <div className="flex flex-col space-y-[16px] mt-[60px]">
                <div className="flex items-center space-x-[14px] hover:cursor-pointer">
                    <img src={media.change_profile} alt="" />
                    <p className="font-[600] text-[14px] leading-[16.94px]">Change Profile </p>
                </div>
                <div className="flex items-center space-x-[14px] hover:cursor-pointer">
                    <img src={media.change_password} alt="" />
                    <p className="font-[600] text-[14px] leading-[16.94px]">Change Password</p>
                </div>
                <div className="flex items-center space-x-[14px] hover:cursor-pointer">
                    <img src={media.user_logout} alt="" />
                    <p className="font-[600] text-[14px] leading-[16.94px]">Log Out</p>
                </div>
                <div className="flex items-center space-x-[14px] hover:cursor-pointer">
                    <img src={media.bin} alt="" />
                    <p className="text-secondary font-[600] text-[14px] leading-[16.94px]">Delete Account</p>
                </div>
            </div>
        </div>
        <div className="w-[873px] h-[797px] rounded-[21px] border-[2px] ">

        </div>
    </div>
    </>
  );
};
