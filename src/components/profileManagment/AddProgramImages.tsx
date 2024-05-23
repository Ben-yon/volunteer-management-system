import { useLocation, useNavigate } from "react-router-dom";
import { media } from "../../assets";
import { useRef, useState } from "react";
import Modal from "../../widgets/Modal";

export const AddProgramImages = () => {
  const navigate = useNavigate();
  const { state } = useLocation()
  const values = state?.values

  const [thumbnailModalOpen, setThumbnailModalOpen] = useState(false);
  const [descriptionModalOpen, setDescriptionModalOpen] = useState(false);
  const [ error, setError ] = useState<string>("")

  const thumbnailRef = useRef<string | undefined>();
  const descriptionImageRef = useRef<string | undefined>();

  const updateThumbnail = (imgSrc: string | undefined): void => {
      thumbnailRef.current = imgSrc;
  }

  const updateDescriptionImage = (imgSrc: string | undefined): void => {
    descriptionImageRef.current = imgSrc;
  };

  const nextPage = () => {
    if(thumbnailRef.current && descriptionImageRef.current){
        navigate("/profile-management/programs/details", {state: {thumbnail: thumbnailRef, descriptionImage: descriptionImageRef, values: values}});
    }else{
        setError("Upload the Pictures for the Programs")
    }
  };

  return (
    <div className="flex flex-col justify-center">
      <h2 className="w-[172px] h-[116px] text-[48.16px] font-[700] leading-[58.29px] mb-[18px]">
        Add Images
      </h2>
      <div className="flex items-center justify-center space-x-[25px]">
        <div className="bg-admin-accent w-[431px] h-[488px] rounded-[30px] flex flex-col items-center justify-center" onClick={() => setThumbnailModalOpen(true)}>
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
        {thumbnailModalOpen && (
          <Modal
            updateAvatar={updateThumbnail}
            closeModal={() => setThumbnailModalOpen(false)}
          />
        )}
        <div
          className="bg-admin-accent w-[431px] h-[488px] rounded-[30px] flex flex-col items-center justify-center"
          onClick={() => setDescriptionModalOpen(true)}
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
        {descriptionModalOpen && (
          <Modal
            updateAvatar={updateDescriptionImage}
            closeModal={() => setDescriptionModalOpen(false)}
          />
        )}
      </div>
      {
        error ? <p className="text-red-500 text-[10px]">{error}</p> : ""
      }
      <button
        className="bg-admin-secondary text-[30px] leading-[36.31px] font-[700] text-primary w-[181.95px] h-[68.5px] rounded-[21.41px] mt-[28px]"
        onClick={() => nextPage()}
      >
        Next
      </button>
    </div>
  );
};
