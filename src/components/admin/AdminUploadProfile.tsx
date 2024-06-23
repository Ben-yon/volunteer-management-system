/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import { media } from "../../assets";
import { LanguageSelect } from "../LanguageSelect";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../features/store";
import { Spinner } from "../../widgets/Spinner";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { adminRegister } from "../../features/register/adminRegisterAction";
import Modal from "../../widgets/Modal";
import { extractBase64 } from "../../utils/imageConverter";

export const AdminUploadProfile = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const { loading, success, error } = useSelector(
    (state: RootState) => state.adminRegisterSlice
  );

  const [modalOpen, setModalOpen] = useState(false);

  const uploadImageRef = useRef<string | undefined >(media.upload);

  const { state } = useLocation();
  const { values } = state;

  const navigate = useNavigate();

  useEffect(() => {
    if (success) {
      navigate("/admin/register-confirm");
    }
  }, [success, navigate]);

  const updateAvatar = (imgSrc: string | undefined ) => {
    uploadImageRef.current = imgSrc;
  };

  const signUp = () => {
    if (values) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-expect-error
      values['profilePicture'] = extractBase64(uploadImageRef.current)
      dispatch(adminRegister(values));
    } else {
      alert(error);
    }
  };

  return (
    <div className="relative bg-admin bg-no-repeat bg-cover filter md:filter-none z-0 w-[100%] h-[100vh]">
      <div className="bg-primary opacity-95 bg-no-repeat bg-cover w-[100%] h-[100vh]">
        <div className="absolute top-8 right-16 z-10 text-black flex space-x-1 md:absolute md:top-[39px] md:right-[47px] sm:top-[33px] xsm:top-[18px] xsm:right-[32.1px]">
          <img
            src={media.lang_black}
            alt="language"
            className=" w-[31px] h-[29.1px] lg:w-[31px] lg:h-[29.1px] xsm:w-[21.05px] xsm:h-[19.76px]"
          />
          <LanguageSelect />
        </div>
        <img
          src={`${media.redLogo}`}
          alt=""
          className="absolute top-[29px] lg:absolute lg:top-[29px] left-[27px] lg:h-[90px] lg:w-[220px] md:w-[136px] md:h-[56px] md:absolute md:top-[29px] md:left[29px] sm:w-[120px] sm:h-[49px] sm:top-[24px] xsm:w-[90px] xsm:h-[37px] xsm:absolute xsm:top-[11px]"
        />
        <div className="flex flex-col items-center justify-center relative top-[268px]">
          <h2 className="w-[440px] h-[58px] font-[700] text-[48.16px] leading-[58.29px]">
            Add Profile Picture
          </h2>
          <div className="mt-[48px]" onClick={() => setModalOpen(true)}>
            <img
              src={uploadImageRef.current}
              alt=""
              className="w-[296px] h-[296px] rounded-full"
            />
          </div>
          {modalOpen && (
            <Modal
              closeModal={() => setModalOpen(false)}
              updateAvatar={updateAvatar}
            />
          )}
          <button className="w-[285.46px] h-[79.09px] rounded-[27.72px] bg-admin-secondary text-primary font-[700] text-[24.27px] leading-[29.91px] mt-[73px]" onClick={() => signUp()}>
            {loading ? <Spinner/> : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};
