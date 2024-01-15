import React, { FormEvent, useRef, useState } from "react";
import { styles } from "../styles";
import { ImageUploadStore } from "../interfaces/ImageUploadInterface";
import { FormDataInterface } from "../interfaces/FormDataInterface";
import { useNavigate } from "react-router-dom";
import { ImageSlideshow } from "../widgets/ImageSlideshow";
import { media } from "../assets";

export const UserRegistration = () => {
  const imageUploader = useRef<HTMLInputElement>(null);
  const uploadedImageRef = useRef<HTMLImageElement | null>(null);
  const [imageState, setImageState] = useState<ImageUploadStore>({
    file: null,
    previewSrc: undefined,
  });

  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormDataInterface>({
    firstName: "",
    lastName: "",
    date: "",
    daysOfMonth: "",
    address: "",
    streetAddress: "",
    city: "",
    province: "",
    postalCode: "",
    occupation: "",
    skills: "",
    interest: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    navigate("/view-user-details", { state: { formData, imageState } });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      if (uploadedImageRef.current) {
        setImageState({ ...imageState, file });
      }
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (!uploadedImageRef.current) return;
        uploadedImageRef.current.src = e.target?.result as string;
        setImageState({
          ...imageState,
          previewSrc: e.target?.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInValidFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    if (!e.target.files[0].type.match(/^image\//)) {
      alert("Only image files are accepted!");
      setImageState({ ...imageState, file: null, previewSrc: undefined });
    }
  };

  return (
    <div className="relative filter w-[100vw] h-[100vh] lg:relative bg-hero bg-no-repeat bg-cover lg:filter md:filter-none z-0 lg:w-[100%] lg:h-[100%] md:w-[100vw] md:h-[100%]  sm:w-[654px] sm:overflow-none xsm:h-[100%]">
      <div className="red-gradient bg-no-repeat bg-cover w-[100vw] h-[100vh] lg:w-[100%] lg:h-[100%] sm:relative xsm:h-[100%] xsm:relative">
        <div className="">
          <img
            src={`${media.whiteLogo}`}
            alt="LOGO"
            className="lg:absolute lg:w-[221px] lg:h-[90px] lg:bottom-[39px] lg:right-[35px] sm:absolute sm:w-[133px] sm:h-[55px] sm:bottom-[32px] sm:right-[31px] xsm:absolute xsm:w-[133px] xsm:h-[55px] xsm:bottom-[2%] xsm:right-[31px]"
          />
        </div>
        <div className="lg:relative lg:flex lg:items-center lg:justify-center lg:p-12">
          <div className="lg:relative lg:m-auto lg:flex lg:flex-row lg:space-x-16 sm:flex-col sm:space-y-1">
            <div className="sm:abolute sm:top-0 lg:flex">
              <ImageSlideshow
                images={[
                  `${media.slide1}`,
                  `${media.slide2}`,
                  `${media.slide3}`,
                ]}
              />
            </div>
            <div className="flex-1 lg:flex-1 sm:p-10 sm:ml-[26px] xsm:p-8 xsm:items-center">
              <strong className="lg:text-5xl text-primary mt-15 sm:text-4xl xsm:text-3xl">
                Register
              </strong>
              <p className="text-primary mt-2 lg:text-xl sm:text-xs">
                Fill out this form to become a Volunteer
              </p>
              <form onSubmit={handleSubmit}>
                <div className="absolute mt-[35px] flex flex-col mr-[32px] sm:mt-[30.75px] sm:space-y-0">
                  <div className="sm:relative sm:bottom-2 xsm:relative xsm:bottom-2">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        handleImageUpload(e);
                        handleInValidFile(e);
                      }}
                      ref={imageUploader}
                      style={{ display: "none" }}
                    />
                    <div
                      onClick={() => {
                        if (!imageUploader.current) return;
                        imageUploader.current.click();
                      }}
                    >
                      <img
                        src={`${media.upload}`}
                        className={`${styles.imageUploader} absolute sm:w-[80.52px] sm:h-[80.52px] xsm:w-[80.52px] xsm:h-[80.52px]`}
                      />
                      <img
                        ref={uploadedImageRef}
                        src={imageState.previewSrc}
                        // alt="Upload Image"
                        className={`${styles.imageUploader} absolute sm:w-[80.52px] sm:h-[80.52px] xsm:w-[80.52px] xsm:h-[80.52px]`}
                      />
                    </div>
                  </div>
                  <div className="lg:ml-40 sm:flex sm:flex-col sm:ml-28 xsm:flex xsm:flex-col xsm:ml-28">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="lg:w-[295px] focus:outline-none lg:h-[54px] border lg:rounded-[15px] lg:text-2xl text-white placeholder-gray-300 p-3 sm:w-[204.84px] sm:h-[37.5px] sm:rounded-[10px] sm:text-xs xsm:h-[35.5px] xsm:w-[200.84px] xsm:rounded-[8px] xsm:text-xs"
                      placeholder="First Name"
                    />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="lg:w-[295px] lg:h-[54px] focus:outline-none border lg:rounded-[15px] mt-[15px] lg:text-2xl text-white placeholder-gray-300 p-3 sm:w-[204.84px] sm:h-[37.5px] sm:rounded-[10px] sm:text-xs sm:mt-[10.42px] xsm:h-[35.5px] xsm:w-[200.84px] xsm:rounded-[8px] xsm:text-xs"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex">
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="lg:w-[181px] lg:h-[54px] focus:outline-none border lg:rounded-[15px] lg:text-xl lg:mt-44 text-white uppercase placeholder-gray-300 p-2 mr-[24px] sm:w-[141.12px] sm:h-[37.23px] sm:rounded-[10.42px] sm:text-xs sm:mt-32 xsm:w-[141.12px] xsm:h-[36.23px] xsm:rounded-[8px] xsm:text-xs xsm:mt-36"
                      placeholder="DD/MM/YYYY"
                    />
                    <input
                      type="text"
                      name="daysOfMonth"
                      value={formData.daysOfMonth}
                      onChange={handleChange}
                      className="lg:w-[253px] lg:h-[54px] focus:outline-none border lg:rounded-[15px] lg:text-xl lg:mt-44 text-white placeholder-gray-300 p-3 leading-6 sm:w-[148.05px] sm:h-[37.5px] sm:text-xs sm:rounded-[10.42px] sm:mt-32 xsm:w-[148.05px] xsm:h-[35.5px] xsm:text-xs xsm:rounded-[8px] xsm:mt-36"
                      placeholder="Days per month"
                    />
                  </div>

                  <input
                    type="text"
                    className="lg:w-[716px] focus:outline-none lg:h-[54px] rounded-[15px] mt-[15px] lg:text-xl border text-white placeholder-gray-300 leading-6 p-3 sm:w-[514.27px] sm:h-[37.23px] sm:rounded-[10.42px] sm:text-xs xsm:w-[314.27px] xsm:h-[35.23px] xsm:rounded-[8px] xsm:text-xs"
                    placeholder="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    className="lg:w-[716px] focus:outline-none lg:h-[54px] rounded-[15px] mt-[15px] lg:text-xl border text-white placeholder-gray-300 leading-6 p-3 sm:w-[514.27px] sm:h-[37.23px] sm:rounded-[10.42px] sm:text-xs xsm:w-[314.27px] xsm:h-[35.23px] xsm:rounded-[8px] xsm:text-xs"
                    placeholder="Street Address"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleChange}
                  />
                  <div className="flex">
                    <input
                      type="text"
                      className="lg:w-[282px] lg:h-[54px] focus:outline-none border rounded-[15px] mt-[15px] mr-[20px] lg:text-xl text-white placeholder-gray-300 p-3 leading-6 sm:w-[243.28px] sm:h-[37.23px] sm:rounded-[10.42px] sm:text-xs xsm:w-[143.28px] xsm:h-[35.23px] xsm:rounded-[8px] xsm:text-xs"
                      placeholder="City"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      className="lg:w-[412px] lg:h-[54px] lg:border lg:rounded-[15px] border focus:outline-none mt-[15px] lg:text-xl text-white placeholder-gray-300 p-3 leading-6 sm:h-[37.23px] sm:rounded-[10.42px] sm:text-xs sm:w-[259.73px] xsm:h-[35.23px] xsm:rounded-[8px] xsm:text-xs xsm:w-[157.73px]"
                      placeholder="State/Province/Region"
                      name="province"
                      value={formData.province}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex">
                    <input
                      type="text"
                      className="lg:w-[282px] lg:h-[54px] border focus:outline-none rounded-[15px] mt-[15px] mr-[20px] lg:text-xl text-white placeholder-gray-300 p-3 leading-6 sm:w-[243.28px] sm:h-[37.23px] sm:rounded-[10.42px] sm:text-xs xsm:w-[143.28px] xsm:h-[35.23px] xsm:rounded-[8px] xsm:text-xs"
                      placeholder="ZIP / Postal Code"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      className="lg:w-[412px] lg:h-[54px] focus:outline-none border rounded-[15px] mt-[15px] lg:text-xl text-white placeholder-gray-300 p-3 leading- sm:h-[37.23px] sm:rounded-[10.42px] sm:text-xs sm:w-[259.73px] xsm:h-[35.23px] xsm:rounded-[8px] xsm:text-xs xsm:w-[159.73px]"
                      placeholder="Occupation"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex">
                    <input
                      type="text"
                      className="lg:w-[282px] lg:h-[54px] focus:outline-none border rounded-[15px] mt-[15px] mr-[20px] lg:text-xl text-white placeholder-gray-300 p-3 leading-6 sm:w-[243.28px] sm:h-[37.23px] sm:rounded-[10.42px] sm:text-xs xsm:w-[143.28px] xsm:h-[37.23px] xsm:rounded-[10.42px] xsm:text-xs"
                      placeholder="Skills"
                      name="skills"
                      value={formData.skills}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      className="lg:w-[412px] lg:h-[54px] focus:outline-none border rounded-[15px] mt-[15px] lg:text-xl text-white placeholder-gray-300 p-3 leading-6 sm:w-[259.73px] sm:h-[37.23px] sm:rounded-[10.42px] sm:text-xs xsm:w-[159.73px] xsm:h-[35.23px] xsm:rounded-[8px] xsm:text-xs"
                      placeholder="Interests"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <button className="bg-primary px-3 py-2 rounded-[15px] border lg:text-xl text-secondary mt-[30px] leading-6 font-bold sm:text-xs sm:mb-7 sm:mt-2 sm:py-[7.55px] sm:px-[17.1px] sm:rounded-[9.4px] xsm:text-xs xsm:mb-7 xsm:mt-2 xsm:py-[7.55px] xsm:px-[17.1px] xsm:rounded-[9.4px]">
                  Next
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
