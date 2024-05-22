import { useNavigate } from "react-router-dom";
import { media } from "../../assets";
import { useRef, useState } from "react";
import Modal from "../../widgets/Modal";

export const AddProgramImages = () => {
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);

  const thumbnailRef = useRef<string | undefined>();
  const descriptionImageRef = useRef<string | undefined>();

  const updateThumbnail = (imgSrc: string | undefined): void => {
      thumbnailRef.current = imgSrc;
  }

  const updateDesciptionImage = (imgSrc: string | undefined): void => {
    descriptionImageRef.current = imgSrc;
  };

  const nextPage = () => {
    navigate("#");
  };

  return (
    <div className="flex flex-col justify-center">
      <h2 className="w-[172px] h-[116px] text-[48.16px] font-[700] leading-[58.29px] mb-[18px]">
        Add Images
      </h2>
      <div className="flex items-center justify-center space-x-[25px]">
        <div className="bg-admin-accent w-[431px] h-[488px] rounded-[30px] flex flex-col items-center justify-center" onClick={() => setModalOpen(true)}>
        {thumbnailRef.current ? (
            <img
              src={
                thumbnailRef.current
              } className="object-fit"
            />
          ) : (
            <>
              <img src={`${media.add_nobg}`} />
              <p className="font-[400] text-[23.55px] leading-[28.5px] text-admin-accent w-[164px] h-[56px] text-center">
                Add Image for Description
              </p>
            </>
          )}
        </div>
        {modalOpen && (
          <Modal
            updateAvatar={updateThumbnail}
            closeModal={() => setModalOpen(false)}
          />
        )}
        <div
          className="bg-admin-accent w-[431px] h-[488px] rounded-[30px] flex flex-col items-center justify-center"
          onClick={() => setModalOpen(true)}
        >
          {descriptionImageRef.current ? (
            <img
              src={
                descriptionImageRef.current
              } className="object-fit"
            />
          ) : (
            <>
              <img src={`${media.add_nobg}`} />
              <p className="font-[400] text-[23.55px] leading-[28.5px] text-admin-accent w-[164px] h-[56px] text-center">
                Add Image for Description
              </p>
            </>
          )}
        </div>
        {modalOpen && (
          <Modal
            updateAvatar={updateDesciptionImage}
            closeModal={() => setModalOpen(false)}
          />
        )}
      </div>
      <button
        className="bg-admin-secondary text-[30px] leading-[36.31px] font-[700] text-primary w-[181.95px] h-[68.5px] rounded-[21.41px] mt-[28px]"
        onClick={() => nextPage()}
      >
        Next
      </button>
    </div>
  );
};
