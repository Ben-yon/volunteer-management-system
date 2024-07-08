import { useRef, useState } from "react";
import { media } from "../../assets";
import { ChangeProfileModal } from "../../widgets/ChangeProfileModal";
import { DeleteAdminModal } from "../../widgets/DeleteAdminAccountModal";
import { logout } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { Outlet, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { RootState } from "../../features/store";

export const Profile = () => {
  // const [userInfo, success, error, loading] = useSelector(
  //   (state: RootState) => state.userSlice
  // );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const navigate = useNavigate();

  const userDetails = localStorage.getItem("userInfo");

  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  
  const uploadedImageRef = useRef<string | undefined>(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
    JSON.parse(userDetails)?.profilePicture
  );

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    navigate("change-password")
    setIsActive(true);
  };


  const setAvatar = (imgSrc: string | undefined) => {
    uploadedImageRef.current = imgSrc;
  };

  const deleteAdmin = (id: string | undefined) => {
    console.log(id);
  };

  const token = localStorage.getItem('token')

  const userLogout = () => {
    dispatch(logout());
    if (!token) {
      navigate("/admin/sigin-in");
    }
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
            <div onClick={() => handleClick() } className={`${isActive ? "flex items-center space-x-[14px] hover:cursor-pointer hover:bg-slate-300 active:bg-slate-100 hover:w-[179px] hover:h-[3opx] hover:rounded-[7px]": "flex items-center space-x-[14px] hover:cursor-pointer bg-slate-300 active:bg-slate-100 w-[179px] h-[3opx] rounded-[7px]"}`}>
              <img src={media.change_password} alt="" />
              <p className="font-[600] text-[14px] leading-[16.94px] active:bg-black">
                Change Password
              </p>
            </div>
            <div className="flex items-center space-x-[14px] hover:cursor-pointer" onClick={userLogout}>
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
          <Outlet/>
        </div>
      </div>
    </>
  );
};
