import React, { useRef, useState } from "react";
import { CloseIcon } from "./CloseIcon";
import { ChangeProfileModalProps } from "../interfaces/ModalProps";
import { media } from "../assets";
import Modal from "./Modal";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../features/store";
// import { ThunkDispatch } from "@reduxjs/toolkit";
// import { updateUser } from "../features/users/userActions";
// import { extractBase64 } from "../utils/imageConverter";

export const ChangeProfileModal: React.FC<ChangeProfileModalProps> = ({
  setAvatar,
  closeModal,
}) => {
  const uploadedImageRef = useRef<string | undefined>(media.upload);
  const [modalOpen, setModalOpen] = useState(false);

  const updateAvatar = (imgSrc: string | undefined): void => {
    uploadedImageRef.current = imgSrc;
  };

  // const dispatch = useDispatch<ThunkDispatch<any, any, any>>();


  // const { userInfo } = useSelector(
  //   (state: RootState) => state.userSlice
  // );
  // const userDetails = localStorage.getItem("userInfo");

  

  const uploadProfile = () => {
    setAvatar(uploadedImageRef.current); 
    //@ts-ignore
    localStorage.setItem("profilePicture", JSON.stringify(uploadedImageRef))
    closeModal()
  };

  return (
    <div
      className="relative z-10"
      aria-labelledby="change-profile-dialog"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0  bg-opacity-75 transition-all backdrop-blur-sm"></div>
      <div className="fixed top-44 inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex h-[600px] justify-center px-2 py-12 text-center ">
          <div className="relative w-[95%] sm:w-[25%] min-h-[58vh] rounded-[80px] border-[2px] bg-primary text-black text-left shadow-md transition-all">
            <div className="px-5 py-4 flex flex-col items-center justify-center">
              <h2 className="font-[700] text-[34.35px] leading-[41.57px] mt-[98px]">
                Change Profile
              </h2>
              <div
                className="hover:cursor-pointer mt-[31.45px]"
                onClick={() => setModalOpen(true)}
              >
                <img
                  src={uploadedImageRef.current}
                  alt=""
                  className="w-[211.09px] h-[211.09px] rounded-full"
                />
              </div>
              {modalOpen && (
                <Modal
                  updateAvatar={updateAvatar}
                  closeModal={() => setModalOpen(false)}
                />
              )}
              <button
                type="button"
                className="rounded-md p-1 inline-flex items-center justify-center text-gray-400 focus:outline-none absolute -top-1 -right-1"
                onClick={closeModal}
              >
                <span className="sr-only">Close menu</span>
                <CloseIcon />
              </button>
              <button
                className="bg-admin-secondary text-primary w-[203.59px] h-[56.4px] rounded-[17.63px] font-[700] text-[17.63px] leading-[21.33px] mt-[52.06px]"
                onClick={() => uploadProfile()}
              >
                Upload Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
