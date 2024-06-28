import { useRef, useState } from "react";
import { media } from "../../assets";
import { ChangeProfileModal } from "../../widgets/ChangeProfileModal";
import { DeleteAdminModal } from "../../widgets/DeleteAdminAccountModal";
// import { useSelector } from "react-redux";
// import { RootState } from "../../features/store";

export const Profile = () => {
  // const [userInfo, success, error, loading] = useSelector(
  //   (state: RootState) => state.userSlice
  // );

  const userDetails = localStorage.getItem("userInfo");

  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  
  const uploadedImageRef = useRef<string | undefined>(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
    JSON.parse(userDetails)?.profilePicture
  );

  const setAvatar = (imgSrc: string | undefined) => {
    uploadedImageRef.current = imgSrc;
  };

  const deleteAdmin = (id: string | undefined) => {
    console.log(id);
  };

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
          <div className="hover:cursor-pointer">
            <img
              src={uploadedImageRef.current}
              alt=""
              className="w-[109px] h-[109px] rounded-full"
            />
          </div>
          {modalOpen && (
            <ChangeProfileModal
              closeModal={() => setModalOpen(false)}
              setAvatar={setAvatar}
            />
          )}
          <div className="mt-[45px]">
            <p className="font-[600] text-[21px] leading-[25.41px]">
              The user goes here
            </p>
            <span className="font-[500] text-[15px] leading-[18.15px] text-gray-400">
              Last sign in 5 minutes ago
            </span>
          </div>
          <div className="flex flex-col space-y-[16px] mt-[60px]">
            <div
              className="flex items-center space-x-[14px] hover:cursor-pointer"
              onClick={() => setModalOpen(true)}
            >
              <img src={media.change_profile} alt="" />
              <p className="font-[600] text-[14px] leading-[16.94px]">
                Change Profile
              </p>
            </div>
            <div className="flex items-center space-x-[14px] hover:cursor-pointer">
              <img src={media.change_password} alt="" />
              <p className="font-[600] text-[14px] leading-[16.94px] active:bg-black">
                Change Password
              </p>
            </div>
            <div className="flex items-center space-x-[14px] hover:cursor-pointer">
              <img src={media.user_logout} alt="" className="ml-[3px]" />
              <p className="font-[600] text-[14px] leading-[16.94px]">
                Log Out
              </p>
            </div>
            <div
              className="flex items-center space-x-[14px] hover:cursor-pointer"
              onClick={() => setDeleteModalOpen(true)}
            >
              <img src={media.bin} alt="" />
              <p className="text-secondary font-[600] text-[14px] leading-[16.94px]">
                Delete Account
              </p>
            </div>
            {deleteModalOpen && (
              <DeleteAdminModal
                closeModal={() => setDeleteModalOpen(false)}
                getAdminId={() => deleteAdmin("")}
              />
            )}
          </div>
        </div>
        <div className="w-[873px] h-[797px] rounded-[21px] border-[2px] flex flex-col">
          <h3 className="w-[232px] h-[32px] text-[20px] font-[600] leading-[24.2px] -tracking-[1px] mt-[46px] ml-[49px] mb-[15px]">
            Personal Information
          </h3>
          <form action="" className="ml-[49px] flex flex-col">
            <div className="flex items-center space-x-[44px] mb-[23px]">
              <div className="flex flex-col">
                <label
                  htmlFor="firstName"
                  className="text-gray-500 font-[600] text-[17px] leading-[20.57px] h-[32px]"
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="bg-image-card w-[360px] h-[40px] rounded-[8px] focus:outline-none text-[17px] leading-[20.57px] pl-[15px]"
                  name="firstName"
                  onChange={(e) => e.target.value}
                  //   value=""
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="lastName"
                  className="text-gray-500 font-[600] text-[17px] leading-[20.57px] h-[32px]"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className="bg-image-card w-[360px] h-[40px] rounded-[8px] focus:outline-none text-[17px] leading-[20.57px] pl-[15px]"
                  name="lastName"
                  onChange={(e) => e.target.value}
                  value=""
                />
              </div>
            </div>
            <div className="flex space-x-[41px] mb-[27px]">
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className="text-gray-500 font-[600] text-[17px] leading-[20.57px] h-[32px]"
                >
                  Date of Birth
                </label>
                <input
                  type="text"
                  className="bg-image-card h-[40px] w-[187px] rounded-[8px] focus:outline-none text-[17px] leading-[20.57px] pl-[15px]"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className="text-gray-500 font-[600] text-[17px] leading-[20.57px] h-[32px]"
                >
                  Gender
                </label>
                <select className="bg-image-card h-[40px] w-[132px] rounded-[8px] focus:outline-none text-[17px] leading-[20.57px] pl-[15px]">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className="text-gray-500 font-[600] text-[17px] leading-[20.57px] h-[32px]"
                >
                  Role
                </label>
                <select
                  name="role"
                  className="bg-image-card h-[40px] w-[362px] rounded-[8px] focus:outline-none text-[17px] leading-[20.57px] pl-[15px]"
                >
                  <option value="admin">Administrator</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col mb-[34px]">
              <label
                htmlFor="Email"
                className="text-gray-500 font-[600] text-[17px] leading-[20.57px] h-[32px]"
              >
                Email Address
              </label>
              <input
                type="text"
                className="bg-image-card h-[40px] w-[764px] rounded-[8px] focus:outline-none text-[17px] leading-[20.57px] pl-[15px]"
              />
            </div>
            <div className="flex flex-col mb-[28px]">
              <label
                htmlFor="Phone Number"
                className="text-gray-500 font-[600] text-[17px] leading-[20.57px] h-[32px]"
              >
                Phone Number
              </label>
              <input
                type="text"
                className="bg-image-card h-[40px] w-[764px] rounded-[8px] focus:outline-none text-[17px] leading-[20.57px] pl-[15px]"
              />
            </div>
            <div className="flex flex-col mb-[28px]">
              <label
                htmlFor="Country"
                className="text-gray-500 font-[600] text-[17px] leading-[20.57px] h-[32px]"
              >
                Country
              </label>
              <select
                name="country"
                className="bg-image-card h-[40px] w-[764px] rounded-[8px] focus:outline-none text-[17px] leading-[20.57px] pl-[15px]"
              >
                <option value="US">United States Of America</option>
              </select>
            </div>
            <div className="flex space-x-[44px]">
              <div className="flex flex-col">
                <label
                  htmlFor="Region"
                  className="text-gray-500 font-[600] text-[17px] leading-[20.57px] h-[32px]"
                >
                  Region
                </label>
                <input
                  type="text"
                  className="bg-image-card h-[40px] w-[360px] rounded-[8px] focus:outline-none text-[17px] leading-[20.57px] pl-[15px]"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="Address"
                  className="text-gray-500 font-[600] text-[17px] leading-[20.57px] h-[32px]"
                >
                  Address
                </label>
                <input
                  type="text"
                  className="bg-image-card h-[40px] w-[360px] rounded-[8px] focus:outline-none text-[17px] leading-[20.57px] pl-[15px]"
                />
              </div>
            </div>
          </form>
          <div className="flex items-end justify-end mt-[48px] mr-[60px] space-x-[28px] ">
            <button className="w-[166px] h-[40px] border-[1px] border-secondary text-secondary rounded-[8px] font-[500] text-[15px] leading-[18.15px]">
              Discard Changes
            </button>
            <button className="w-[77px] h-[40px] bg-admin-secondary rounded-[8px] text-primary font-[500] text-[15px] leading-[18.15px]">
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
