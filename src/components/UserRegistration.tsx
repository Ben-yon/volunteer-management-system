import React, { FormEvent, useRef, useState } from "react";
import { styles } from "../styles";
import { ImageUploadStore } from "../interfaces/ImageUploadInterface";
import { FormDataInterface } from "../interfaces/FormDataInterface";
import { useNavigate } from "react-router-dom";
import { ImageSlideshow } from "../widgets/ImageSlideshow";
import { media } from "../assets";
import { db } from "../utils/db";

import { useTranslation } from "react-i18next";

export const UserRegistration = () => {
  const imageUploader = useRef<HTMLInputElement>(null);
  const uploadedImageRef = useRef<HTMLImageElement | null>(null);
  const [imageState, setImageState] = useState<ImageUploadStore>({
    file: null,
    previewSrc: undefined,
  });

  const storeUserDetails = () => {
    const details = db.userDetails.add({
      firstName: formData.firstName,
      lastName: formData.lastName,
      date: formData.date,
      daysPerWeek: formData.daysPerWeek,
      address: formData.address,
      streetAddress: formData.streetAddress,
      city: formData.city,
      province: formData.province,
      postalCode: formData.postalCode,
      occupation: formData.occupation,
      skills: formData.skills,
      interest: formData.interest,
    });

    return details
  }
  
  const { t } = useTranslation()

  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormDataInterface>({
    firstName: "",
    lastName: "",
    date: "",
    daysPerWeek: "",
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
    storeUserDetails();
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
    <div className="relative filter w-[100vw] h-[100%] lg:relative bg-hero bg-no-repeat bg-cover lg:filter md:filter-none z-0 md:w-[100vw] md:h-[100%] sm:overflow-none">
      <div className="red-gradient bg-no-repeat bg-cover w-[100vw] h-[100vh] lg:w-[100%] lg:h-[100%] md:w-[100vw] md:h-[100vh] sm:relative xsm:h-[100%] xsm:relative">
        <div className="">
          <img
            src={`${media.whiteLogo}`}
            alt="LOGO"
            className="lg:absolute lg:w-[221px] lg:h-[90px] lg:bottom-[30px] lg:right-[35px] md:absolute md:w-[133px] md:h-[55px] md:bottom-[32px] md:right-[31px]  sm:absolute sm:w-[133px] sm:h-[55px] sm:bottom-[32px] sm:right-[31px] xsm:absolute xsm:w-[133px] xsm:h-[55px] xsm:bottom-[2%] xsm:right-[31px]"
          />
        </div>
        <div className="flex items-center justify-center min-h-screen lg:flex lg:items-center m-auto lg:justify-center">
          <div className="lg:flex lg:left-92 lg:justify-center lg:items-center md:block md:w-[100vw] md:top-0 sm:block sm:w-[100vw] sm:top-0">
            <div className="lg:flex sm:block md:block xsm:hidden">
              <ImageSlideshow
                images={[`${media.slide1}`, `${media.slide2}`, `${media.slide3}`]}
              />
            </div>
            <div className="flex items-center justify-center lg:flex md:flex sm:p-10 sm:ml-[43px] xsm:p-8 xsm:items-center">
            <form onSubmit={handleSubmit}>
              <strong className="text-primary mt-15 text-[50px] leading-[60.51px] lg:text-[50px] lg:leading-[60.51px] md:text-[34.63px] md:leading-[41.91px] sm:text-[34.63px] sm:leading-[41.91px] xsm:text-[20.48px] xsm:leading-[23.57px]">
                Register
              </strong>
              <p className="text-primary text-[19px] leading-[22.99px] lg:text-[19px] lg:leading-[22.99px] md:text-[12.99px] md:leading-[15.72px] md:mt-[1.29px] sm:text-[12.99px] sm:leading-[15.72px] sm:mt-[1.29px] xsm:text-[12.3px]">
                Fill out this form to become a Volunteer
              </p>
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
                      className={`${styles.imageUploader} absolute md:w-[80.52px] md:h-[80.52px] sm:w-[80.52px] sm:h-[80.52px] xsm:w-[80.52px] xsm:h-[80.52px]`}
                    />
                    <img
                      ref={uploadedImageRef}
                      src={imageState.previewSrc}
                      // alt="Upload Image"
                      className={`${styles.imageUploader} absolute md:w-[80.52px] md:h-[80.52px] sm:w-[80.52px] sm:h-[80.52px] xsm:w-[80.52px] xsm:h-[80.52px]`}
                    />
                  </div>
                </div>
                <div className="lg:ml-40 sm:flex sm:flex-col sm:ml-28 xsm:flex xsm:flex-col xsm:ml-28">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="lg:w-[295px] focus:outline-none lg:h-[54px] border lg:rounded-[15px] lg:text-[20px] lg:leading-[24.2px] lg:pl-[16px] text-white placeholder-gray-300 md:w-[204.84px] md:h-[37.5px] md:rounded-[10.42px] md:text-[13.89px] md:leading-[16.81px] md:pl-[11.11px] sm:w-[204.84px] sm:h-[37.5px] sm:rounded-[10.42px] sm:text-[13.89px] sm:leading-[16.81px] sm:pl-[11.11px] xsm:h-[35.5px] xsm:w-[200.84px] xsm:rounded-[8px] xsm:text-[10.81px] xsm:pl-[9px]"
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="lg:w-[295px] lg:h-[54px] focus:outline-none border lg:rounded-[15px] mt-[15px] lg:text-[20px] lg:leading-[24.2px] lg:pl-[16px] text-white placeholder-gray-300 md:w-[204.84px] md:h-[37.5px] md:rounded-[10.42px] md:text-[13.89px] md:leading-[16.81px] md:pl-[11.11px] sm:w-[204.84px] sm:h-[37.5px] sm:rounded-[10.42px] sm:text-[13.89px] sm:leading-[16.81px] sm:pl-[11.11px] sm:mt-[10.42px] xsm:h-[35.5px] xsm:w-[200.84px] xsm:rounded-[8px] xsm:text-[10.81px] xsm:pl-[9px]"
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
                    className="lg:w-[181px] lg:h-[54px] focus:outline-none border lg:rounded-[15px] lg:text-[18px] lg:leading-[24.2px] lg:pl-[16px] lg:mt-44 text-white uppercase placeholder-gray-300 pr-2 mr-[24px] md:w-[141.12px] md:h-[37.23px] md:rounded-[10.42px] md:text-[13.89px] md:leading-[16.81px] md:pl-[11.11px] sm:w-[141.12px] sm:h-[37.23px] sm:rounded-[10.42px] sm:text-[13.89px] sm:leading-[16.81px] sm:pl-[11.11px] sm:mt-32 xsm:w-[141.12px] xsm:h-[36.23px] xsm:rounded-[8px] xsm:text-[10.81px] xsm:pl-[9px] xsm:mt-36"
                    placeholder="DD/MM/YYYY"
                  />
                  <input
                    type="text"
                    name="daysPerWeek"
                    value={formData.daysPerWeek}
                    onChange={handleChange}
                    className="text-white placeholder-gray-300 leading-[24.2px] lg:w-[253px] lg:h-[54px] focus:outline-none border lg:rounded-[15px] lg:text-[20px] lg:leading-[24.2px] lg:pl-[16px] lg:mt-44 md:w-[148.05px] md:h-[37.5px] md:text-[13.89px] md:leading-[16.81px] md:rounded-[10.42px] md:pl-[11.11px] sm:w-[148.05px] sm:h-[37.5px] sm:text-[13.89px] sm:leading-[16.81px] sm:rounded-[10.42px] sm:pl-[11.11px] sm:mt-32 xsm:w-[148.05px] xsm:h-[35.5px] xsm:text-xs xsm:rounded-[8px] xsm:text-[10.81px] xsm:pl-[9px] xsm:mt-36"
                    placeholder="Days per week"
                  />
                </div>

                <input
                  type="text"
                  className="border text-white placeholder-gray-300 text-[20px] leading-[24.2px] focus:outline-none lg:w-[716px] lg:h-[54px] lg:rounded-[15px] mt-[15px] lg:text-[20px] lg:leading-[24.2px] lg:pl-[16px] md:w-[514.27px] md:h-[37.23px] md:rounded-[10.42px] md:text-[13.89px] md:leading-[16.81px] md:pl-[11.11px] sm:w-[514.27px] sm:h-[37.23px] sm:rounded-[10.42px] sm:text-[13.89px] sm:leading-[16.81px] sm:pl-[11.11px] xsm:w-[314.27px] xsm:h-[35.23px] xsm:rounded-[8px] xsm:text-[10.81px] xsm:pl-[9px]"
                  placeholder="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  className="border text-white placeholder-gray-300  focus:outline-none rounded-[15px] mt-[15px] text-[20px] leading-[24.2px] lg:w-[716px] lg:h-[54px] lg:rounded-[15px] lg:text-[20px] lg:leading-[24.2px] lg:pl-[16px] md:w-[514.27px] md:h-[37.23px] md:rounded-[10.42px] md:text-[13.89px] md:leading-[16.81px] md:pl-[11.11px] sm:w-[514.27px] sm:h-[37.23px] sm:rounded-[10.42px] sm:text-[13.89px] sm:leading-[16.81px] sm:pl-[11.11px] xsm:w-[314.27px] xsm:h-[35.23px] xsm:rounded-[8px] xsm:text-[10.81px] xsm:pl-[9px]"
                  placeholder="Street Address"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleChange}
                />
                <div className="flex">
                  <input
                    type="text"
                    className="text-white placeholder-gray-300 focus:outline-none border rounded-[15px] mt-[15px] mr-[20px] text-[20px] leading-[24.2px] lg:w-[282px] lg:h-[54px] lg:text-[20px] lg:leading-[24.2px] lg:pl-[16px] md:w-[243.28px] md:h-[37.23px] md:rounded-[10.42px] md:text-[13.89px] md:leading-[16.81px] md:pl-[11.11px] sm:w-[243.28px] sm:h-[37.23px] sm:rounded-[10.42px] sm:text-[13.89px] sm:leading-[16.81px] sm:pl-[11.11px] xsm:w-[143.28px] xsm:h-[35.23px] xsm:rounded-[8px] xsm:text-[10.81px] xsm:pl-[9px]"
                    placeholder="City"
                    name="city"
                    value={formData.city}

                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    className="text-white placeholder-gray-300 border focus:outline-none text-[20px] leading-[24.2px] mt-[15px] lg:w-[412px] lg:h-[54px] lg:border lg:rounded-[15px] lg:text-[20px] lg:leading-[24.2px] md:h-[37.23px] md:w-[259.73px] md:rounded-[10.42px] md:text-[13.89px] md:leading-[16.81px] md:pl-[11.11px] sm:h-[37.23px] sm:rounded-[10.42px] sm:text-[13.89px] sm:leading-[16.81px] sm:pl-[11.11px] sm:w-[259.73px] xsm:h-[35.23px] xsm:rounded-[8px] xsm:text-[10.81px] xsm:pl-[9px] xsm:w-[157.73px]"
                    placeholder="State/Province/Region"
                    name="province"
                    value={formData.province}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex">
                  <input
                    type="text"
                    className="text-white placeholder-gray-300 text-[20px] leading-[24.2px] lg:w-[282px] lg:h-[54px] border focus:outline-none rounded-[15px] mt-[15px] mr-[20px] lg:text-[20px] lg:leading-[24.2px] md:h-[37.23px] md:w-[243.28px] md:rounded-[10.42px] md:text-[13.89px] md:leading-[16.81px] md:pl-[11.11px] sm:h-[37.23px] sm:rounded-[10.42px] sm:text-[13.89px] sm:leading-[16.81px] sm:pl-[11.11px] sm:w-[259.73px] xsm:w-[143.28px] xsm:h-[35.23px] xsm:rounded-[8px] xsm:text-[10.81px] xsm:pl-[9px]"
                    placeholder="ZIP / Postal Code"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    className="text-white placeholder-gray-300 text-[20px] leading-[24.2px] focus:outline-none border rounded-[15px] mt-[15px] lg:w-[412px] lg:h-[54px] lg:rounded-[15px] lg:text-[20px] lg:leading-[24.2px] md:h-[37.23px] md:w-[259.73px] md:rounded-[10.42px] md:text-[13.89px] md:leading-[16.81px] md:pl-[11.11px] sm:h-[37.23px] sm:rounded-[10.42px] sm:text-[13.89px] sm:leading-[16.81px] sm:pl-[11.11px] sm:w-[259.73px] xsm:h-[35.23px] xsm:rounded-[8px] xsm:text-[10.81px] xsm:pl-[9px] xsm:w-[159.73px]"
                    placeholder="Occupation"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex">
                  <input
                    type="text"
                    className="text-white placeholder-gray-300 text-[20px] leading-[24.2px] lg:w-[282px] lg:h-[54px] border focus:outline-none rounded-[15px] mt-[15px] mr-[20px] lg:text-[20px] lg:leading-[24.2px] md:h-[37.23px] md:w-[243.28px] md:rounded-[10.42px] md:text-[13.89px] md:leading-[16.81px] md:pl-[11.11px] sm:h-[37.23px] sm:rounded-[10.42px] sm:text-[13.89px] sm:leading-[16.81px] sm:pl-[11.11px] sm:w-[259.73px] xsm:w-[143.28px] xsm:h-[37.23px] xsm:rounded-[10.42px] xsm:text-[10.81px] xsm:pl-[9px]"
                    placeholder="Skills"
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    className="text-white placeholder-gray-300 text-[20px] leading-[24.2px] focus:outline-none border rounded-[15px] mt-[15px] lg:w-[412px] lg:h-[54px] lg:rounded-[15px] lg:text-[20px] lg:leading-[24.2px] md:h-[37.23px] md:w-[259.73px] md:rounded-[10.42px] md:text-[13.89px] md:leading-[16.81px] md:pl-[11.11px] sm:h-[37.23px] sm:rounded-[10.42px] sm:text-[13.89px] sm:leading-[16.81px] sm:pl-[11.11px] sm:w-[259.73px] xsm:w-[159.73px] xsm:h-[35.23px] xsm:rounded-[8px] xsm:text-[10.81px] xsm:pl-[9px]"
                    placeholder="Interests"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button className="bg-primary rounded-[15px] border lg:text-[25px] text-secondary mt-[22px] lg:leading-[30.26px] font-bold sm:text-xs sm:mb-7 sm:mt-2 sm:py-[7.55px] sm:px-[17.1px] sm:rounded-[9.4px] xsm:text-xs xsm:mb-7 xsm:mt-2 xsm:py-[7.55px] xsm:px-[17.1px] xsm:rounded-[9.4px]">
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
