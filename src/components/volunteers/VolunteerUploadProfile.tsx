import { useRef, useState } from "react";
import { media } from "../../assets";
import { LanguageSelect } from "../LanguageSelect";
import Modal from "../../widgets/Modal";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/ReactToastify.css'

export const VolunteerUploadProfile = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const uploadedImageRef = useRef<string | undefined>(media.upload);


  const navigate = useNavigate();

  const updateAvatar = (imgSrc: string | undefined) => {
    uploadedImageRef.current = imgSrc;
  };

  const nextPage = () => {
    if (uploadedImageRef.current === media.upload) {
      toast.error("Profile picture required")
      return
    } else {
      navigate("/volunteer-registration", {
        state: { profilePicture: uploadedImageRef },
      });
    }
  };

  return (
    <div className="relative filter min-h-screen w-[100vw] lg:h-[950px] md:h-[1285px] sm:h-[100%] xsm:h-[100%] lg:bg-hero md:bg-hero sm:bg-hero xsm:bg-hero-xsm bg-no-repeat bg-cover lg:filter md:filter-none z-0 sm:overflow-none">
      <div className="red-gradient bg-no-repeat bg-cover w-[100vw] h-full">
        <div className="absolute top-8 right-16 z-10 text-primary hidden space-x-1">
          <img
            src={media.lang_white}
            alt="language"
            className="w-[31px] h-[29.1px] lg:w-[31px] lg:h-[29.1px] md:w-[31px] md:h-[29.1px] sm:w-[31px] sm:h-[29.1px] xsm:w-[14.2px] xsm:h-[14.0px]"
          />
          <LanguageSelect />
        </div>
        <div className="">
          <img
            src={`${media.whiteLogo}`}
            alt="LOGO"
            className="absolute w-[221px] h-[90px] right-[35px] bottom-[30px] lg:absolute lg:w-[221px] lg:h-[90px] lg:bottom-[30px] lg:right-[35px] md:absolute md:w-[133px] md:h-[55px] md:bottom-[32px] md:right-[31px]  sm:absolute sm:w-[133px] sm:h-[55px] sm:bottom-[32px] sm:right-[31px] xsm:absolute xsm:w-[133px] xsm:h-[55px] xsm:bottom-[2%] xsm:right-[31px]"
          />
        </div>
        <div className="flex flex-col items-center justify-center relative top-[174px]">
          <h1 className="text-primary text-[43.05px] leading-[52.09px] font-[700]">
            Profile
          </h1>
          <div className="mt-[73px]" onClick={() => setModalOpen(true)}>
            <img
              src={`${uploadedImageRef.current}`}
              alt=""
              className="w-[376px] h-[376px] rounded-full"
            />
          </div>
          {modalOpen && (
            <Modal
              closeModal={() => setModalOpen(false)}
              updateAvatar={updateAvatar}
            />
          )}
          <button
            className="text-secondary bg-primary text-[] leading w-[260px] h-[71px] rounded-[24px] font-[700] text-[29px] leading-[35.1px] mt-[83px]"
            onClick={() => nextPage()}
          >
            Next
          </button>
          <ToastContainer/>
        </div>
      </div>
    </div>
  );
};
