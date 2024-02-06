import React, { FormEvent, useEffect, useRef, useState } from "react";
import { styles } from "../styles";
import { ImageUploadStore } from "../interfaces/ImageUploadInterface";
import { FormDataInterface } from "../interfaces/FormDataInterface";
import { useNavigate } from "react-router-dom";
import { ImageSlideshow } from "../widgets/ImageSlideshow";
import { media } from "../assets";
import { db } from "../utils/db";
import { useTranslation } from "react-i18next";
import { LanguageSelect } from "./LanguageSelect";
import { useFormValidation } from "../utils/validate";

export const UserRegistration = () => {
  const imageUploader = useRef<HTMLInputElement>(null);
  const uploadedImageRef = useRef<HTMLImageElement | null>(null);
  const [imageState, setImageState] = useState<ImageUploadStore>({
    file: null,
    previewSrc: undefined,
  });
  

  const firstNameRef = useRef<HTMLInputElement>(null);

  const { t } = useTranslation();

  const validationRules = {
    firstName: { required: true, minLength: 5 },
    lastName: { required: true, minLength: 2 },
    date: { required: true },
    daysPerWeek: { required: true, isNumber: true },
    address: { required: true },
    streetAddress: { required: true },
    city: { required: true },
    province: { required: true },
    postalCode: { required: true },
    occupation: { required: true },
    skills: { required: true },
    interest: { required: true },
  };

  let { values, errors, handleChange, validate } =
    useFormValidation<FormDataInterface>(
      {
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
      },
      validationRules
    );

  const storeUserDetails = () => {
    const details = db.transaction('rw', db.userDetails, async () => {
        if (await db.userDetails.where('id').equals(1).count()){
          await db.userDetails.update(1, values)
        }else{
          await db.userDetails.add({...values})
        }
        }).catch((error) => {
        console.error('Dexie error', error)
      });
    return details;
  };

  const navigate = useNavigate();

  useEffect(() => {
    db.userDetails.toArray()
    .then((data) => {
      if ( data.length > 0){
        console.log(data)
        values = data[0]; 
      }
    })
  })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validate()) {
      // if (firstNameRef.current) firstNameRef.current.focus();
      // console.log(values); 
      storeUserDetails();
      navigate("/view-user-details", { state: { values, imageState } });
    }else{
      throw new DOMException("Validation failed.")
    }
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
    <div className="relative filter flex items-center justify-center min-h-screen w-[100vw] lg:h-[850px] md:h-[1200px] sm:h-[100%] xsm:h-[100%] bg-hero bg-no-repeat bg-cover lg:filter md:filter-none z-0 sm:overflow-none">
      <div className="red-gradient bg-no-repeat bg-cover w-[100vw] h-full">
        <div className="absolute top-8 right-16 z-10 text-primary flex space-x-1">
          <img
            src={media.lang_white}
            alt="language"
            className=" w-[31px] h-[29.1px] lg:w-[31px] lg:h-[29.1px]"
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
        <div className="flex items-center justify-center min-h-screen  lg:flex lg:items-center m-auto lg:justify-center">
          <div className="relative flex items-center justify-center lg:relative lg:flex lg:left-92 lg:justify-center lg:items-center md:absolute md:top-0 sm:block sm:w-[100vw] sm:top-0">
            <div className="lg:flex sm:block md:block xsm:hidden">
              <ImageSlideshow
                images={[
                  `${media.slide1}`,
                  `${media.slide2}`,
                  `${media.slide3}`,
                ]}
              />
            </div>
            <div className="flex items-center justify-center lg:flex md:flex sm:p-10 sm:ml-[43px] xsm:p-8 xsm:items-center">
              <form onSubmit={handleSubmit}>
                <strong className="text-primary mt-15 text-[50px] leading-[60.51px] lg:text-[50px] lg:leading-[60.51px] md:text-[34.63px] md:leading-[41.91px] sm:text-[34.63px] sm:leading-[41.91px] xsm:text-[20.48px] xsm:leading-[23.57px] xsm:mt-0">
                  {t("Register")}
                </strong>
                <p className="text-primary text-[19px] leading-[22.99px] lg:text-[19px] lg:leading-[22.99px] md:text-[12.99px] md:leading-[15.72px] md:mt-[1.29px] sm:text-[12.99px] sm:leading-[15.72px] sm:mt-[1.29px] xsm:text-[12.3px]">
                  {t("Fill out this form to become a Volunteer")}
                </p>
                <div className="absolute mt-[35px] flex flex-col mr-[32px] sm:mt-[30.75px] sm:space-y-">
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
                    <div className="flex flex-col">
                      <input
                        type="text"
                        name="firstName"
                        value={values.firstName}
                        onChange={handleChange}
                        ref={firstNameRef}
                        className="lg:w-[295px] focus:outline-none lg:h-[54px] border lg:rounded-[15px] lg:text-[20px] lg:leading-[24.2px] lg:pl-[16px] text-white placeholder-gray-300 md:w-[204.84px] md:h-[37.5px] md:rounded-[10.42px] md:text-[13.89px] md:leading-[16.81px] md:pl-[11.11px] sm:w-[204.84px] sm:h-[37.5px] sm:rounded-[10.42px] sm:text-[13.89px] sm:leading-[16.81px] sm:pl-[11.11px] xsm:h-[35.5px] xsm:w-[200.84px] xsm:rounded-[8px] xsm:text-[10.81px] xsm:pl-[9px]"
                        placeholder={t("First Name")}
                      />
                      {errors.firstName && (
                        <span className="text-gray-100 text-[10px]">
                          {errors.firstName}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col mb-[34px]">
                      <input
                        type="text"
                        name="lastName"
                        value={values.lastName}
                        onChange={handleChange}
                        className="lg:w-[295px] lg:h-[54px] focus:outline-none border lg:rounded-[15px] mt-[15px] lg:text-[20px] lg:leading-[24.2px] lg:pl-[16px] text-white placeholder-gray-300 md:w-[204.84px] md:h-[37.5px] md:rounded-[10.42px] md:text-[13.89px] md:leading-[16.81px] md:pl-[11.11px] sm:w-[204.84px] sm:h-[37.5px] sm:rounded-[10.42px] sm:text-[13.89px] sm:leading-[16.81px] sm:pl-[11.11px] sm:mt-[10.42px] xsm:h-[35.5px] xsm:w-[200.84px] xsm:rounded-[8px] xsm:text-[10.81px] xsm:pl-[9px]"
                        placeholder={t("Last Name")}
                      />
                      {errors.lastName && (
                        <span className="text-gray-100 text-[10px]">
                          {errors.lastName}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex">
                    <div className="flex flex-col">
                      <input
                        type="date"
                        name="date"
                        value={values.date}
                        onChange={handleChange}
                        className="lg:w-[181px] lg:h-[54px] focus:outline-none border lg:rounded-[15px] lg:text-[18px] lg:leading-[24.2px] lg:pl-[16px] lg:mt-44 text-white uppercase placeholder-gray-300 pr-2 mr-[24px] md:w-[141.12px] md:h-[37.23px] md:rounded-[10.42px] md:text-[13.89px] md:leading-[16.81px] md:pl-[11.11px] sm:w-[141.12px] sm:h-[37.23px] sm:rounded-[10.42px] sm:text-[13.89px] sm:leading-[16.81px] sm:pl-[11.11px] sm:mt-40 xsm:w-[141.12px] xsm:h-[36.23px] xsm:rounded-[8px] xsm:text-[10.81px] xsm:pl-[9px] xsm:mt-36"
                        placeholder="DD/MM/YYYY"
                      />
                      {errors.date && (
                        <span className="text-gray-100 text-[10px]">
                          {errors.date}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <input
                        type="text"
                        name="daysPerWeek"
                        value={values.daysPerWeek}
                        onChange={handleChange}
                        className="text-white placeholder-gray-300 leading-[24.2px] lg:w-[253px] lg:h-[54px] focus:outline-none border lg:rounded-[15px] lg:text-[20px] lg:leading-[24.2px] lg:pl-[16px] lg:mt-44 md:w-[148.05px] md:h-[37.5px] md:text-[13.89px] md:leading-[16.81px] md:rounded-[10.42px] md:pl-[11.11px] sm:w-[148.05px] sm:h-[37.5px] sm:text-[13.89px] sm:leading-[16.81px] sm:rounded-[10.42px] sm:pl-[11.11px] sm:mt-40 xsm:w-[148.05px] xsm:h-[35.5px] xsm:text-xs xsm:rounded-[8px] xsm:text-[10.81px] xsm:pl-[9px] xsm:mt-36"
                        placeholder={t("Days per week")}
                      />
                      {errors.daysPerWeek && (
                        <span className="text-gray-100 text-[10px]">
                          {errors.daysPerWeek}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      className="border text-white placeholder-gray-300 text-[20px] leading-[24.2px] focus:outline-none lg:w-[716px] lg:h-[54px] lg:rounded-[15px] mt-[15px] lg:text-[20px] lg:leading-[24.2px] lg:pl-[16px] md:w-[514.27px] md:h-[37.23px] md:rounded-[10.42px] md:text-[13.89px] md:leading-[16.81px] md:pl-[11.11px] sm:w-[514.27px] sm:h-[37.23px] sm:rounded-[10.42px] sm:text-[13.89px] sm:leading-[16.81px] sm:pl-[11.11px] xsm:w-[314.27px] xsm:h-[35.23px] xsm:rounded-[8px] xsm:text-[10.81px] xsm:pl-[9px]"
                      placeholder={t("Address")}
                      name="address"
                      value={values.address}
                      onChange={handleChange}
                    />
                    {errors.address && (
                      <span className="text-gray-100 text-[10px]">
                        {errors.address}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      className="border text-white placeholder-gray-300  focus:outline-none rounded-[15px] mt-[15px] text-[20px] leading-[24.2px] lg:w-[716px] lg:h-[54px] lg:rounded-[15px] lg:text-[20px] lg:leading-[24.2px] lg:pl-[16px] md:w-[514.27px] md:h-[37.23px] md:rounded-[10.42px] md:text-[13.89px] md:leading-[16.81px] md:pl-[11.11px] sm:w-[514.27px] sm:h-[37.23px] sm:rounded-[10.42px] sm:text-[13.89px] sm:leading-[16.81px] sm:pl-[11.11px] xsm:w-[314.27px] xsm:h-[35.23px] xsm:rounded-[8px] xsm:text-[10.81px] xsm:pl-[9px]"
                      placeholder={t("Street Address")}
                      name="streetAddress"
                      value={values.streetAddress}
                      onChange={handleChange}
                    />
                    {errors.streetAddress && (
                      <span className="text-gray-100 text-[10px]">
                        {errors.streetAddress}
                      </span>
                    )}
                  </div>
                  <div className="flex">
                    <div className="flex flex-col">
                      <input
                        type="text"
                        className="text-white placeholder-gray-300 focus:outline-none border rounded-[15px] mt-[15px] mr-[20px] text-[20px] leading-[24.2px] lg:w-[282px] lg:h-[54px] lg:text-[20px] lg:leading-[24.2px] lg:pl-[16px] md:w-[243.28px] md:h-[37.23px] md:rounded-[10.42px] md:text-[13.89px] md:leading-[16.81px] md:pl-[11.11px] sm:w-[243.28px] sm:h-[37.23px] sm:rounded-[10.42px] sm:text-[13.89px] sm:leading-[16.81px] sm:pl-[11.11px] xsm:w-[143.28px] xsm:h-[35.23px] xsm:rounded-[8px] xsm:text-[10.81px] xsm:pl-[9px]"
                        placeholder={t("City")}
                        name="city"
                        value={values.city}
                        onChange={handleChange}
                      />
                      {errors.city && (
                        <span className="text-gray-100 text-[10px]">
                          {errors.city}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <input
                        type="text"
                        className="text-white placeholder-gray-300 border focus:outline-none text-[20px] leading-[24.2px] mt-[15px] lg:w-[412px] lg:h-[54px] lg:border lg:rounded-[15px] lg:text-[20px] lg:leading-[24.2px] md:h-[37.23px] md:w-[259.73px] md:rounded-[10.42px] md:text-[13.89px] md:leading-[16.81px] md:pl-[11.11px] sm:h-[37.23px] sm:rounded-[10.42px] sm:text-[13.89px] sm:leading-[16.81px] sm:pl-[11.11px] sm:w-[259.73px] xsm:h-[35.23px] xsm:rounded-[8px] xsm:text-[10.81px] xsm:pl-[9px] xsm:w-[157.73px]"
                        placeholder="State/Province/Region"
                        name="province"
                        value={values.province}
                        onChange={handleChange}
                      />
                      {errors.province && (
                        <span className="text-gray-100 text-[10px]">
                          {errors.province}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex flex-col">
                      <input
                        type="text"
                        className="text-white placeholder-gray-300 text-[20px] leading-[24.2px] lg:w-[282px] lg:h-[54px] border focus:outline-none rounded-[15px] mt-[15px] mr-[20px] lg:text-[20px] lg:leading-[24.2px] md:h-[37.23px] md:w-[243.28px] md:rounded-[10.42px] md:text-[13.89px] md:leading-[16.81px] md:pl-[11.11px] sm:h-[37.23px] sm:rounded-[10.42px] sm:text-[13.89px] sm:leading-[16.81px] sm:pl-[11.11px] sm:w-[259.73px] xsm:w-[143.28px] xsm:h-[35.23px] xsm:rounded-[8px] xsm:text-[10.81px] xsm:pl-[9px]"
                        placeholder={t("ZIP / Postal Code")}
                        name="postalCode"
                        value={values.postalCode}
                        onChange={handleChange}
                      />
                      {errors.postalCode && (
                        <span className="text-gray-100 text-[10px]">
                          {errors.postalCode}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <input
                        type="text"
                        className="text-white placeholder-gray-300 text-[20px] leading-[24.2px] focus:outline-none border rounded-[15px] mt-[15px] lg:w-[412px] lg:h-[54px] lg:rounded-[15px] lg:text-[20px] lg:leading-[24.2px] md:h-[37.23px] md:w-[259.73px] md:rounded-[10.42px] md:text-[13.89px] md:leading-[16.81px] md:pl-[11.11px] sm:h-[37.23px] sm:rounded-[10.42px] sm:text-[13.89px] sm:leading-[16.81px] sm:pl-[11.11px] sm:w-[259.73px] xsm:h-[35.23px] xsm:rounded-[8px] xsm:text-[10.81px] xsm:pl-[9px] xsm:w-[159.73px]"
                        placeholder={t("Occupation")}
                        name="occupation"
                        value={values.occupation}
                        onChange={handleChange}
                      />
                      {errors.occupation && (
                        <span className="text-gray-100 text-[10px]">
                          {errors.occupation}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex flex-col">
                      <input
                        type="text"
                        className="text-white placeholder-gray-300 text-[20px] leading-[24.2px] lg:w-[282px] lg:h-[54px] border focus:outline-none rounded-[15px] mt-[15px] mr-[20px] lg:text-[20px] lg:leading-[24.2px] md:h-[37.23px] md:w-[243.28px] md:rounded-[10.42px] md:text-[13.89px] md:leading-[16.81px] md:pl-[11.11px] sm:h-[37.23px] sm:rounded-[10.42px] sm:text-[13.89px] sm:leading-[16.81px] sm:pl-[11.11px] sm:w-[259.73px] xsm:w-[143.28px] xsm:h-[37.23px] xsm:rounded-[10.42px] xsm:text-[10.81px] xsm:pl-[9px]"
                        placeholder={t("Skills")}
                        name="skills"
                        value={values.skills}
                        onChange={handleChange}
                      />
                      {errors.skills && (
                        <span className="text-gray-100 text-[10px]">
                          {errors.skills}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <input
                        type="text"
                        className="text-white placeholder-gray-300 text-[20px] leading-[24.2px] focus:outline-none border rounded-[15px] mt-[15px] lg:w-[412px] lg:h-[54px] lg:rounded-[15px] lg:text-[20px] lg:leading-[24.2px] md:h-[37.23px] md:w-[259.73px] md:rounded-[10.42px] md:text-[13.89px] md:leading-[16.81px] md:pl-[11.11px] sm:h-[37.23px] sm:rounded-[10.42px] sm:text-[13.89px] sm:leading-[16.81px] sm:pl-[11.11px] sm:w-[259.73px] xsm:w-[159.73px] xsm:h-[35.23px] xsm:rounded-[8px] xsm:text-[10.81px] xsm:pl-[9px]"
                        placeholder={t("Interests")}
                        name="interest"
                        value={values.interest}
                        onChange={handleChange}
                      />
                      {errors.interest && (
                        <span className="text-gray-100 text-[10px]">{errors.interest}</span>
                      )}
                    </div>
                  </div>
                </div>
                <button className="bg-primary rounded-[15px] border lg:text-[25px] text-secondary mt-[28px] lg:leading-[30.26px] font-bold sm:text-xs sm:mb-7 sm:mt-[22px] sm:py-[7.55px] sm:px-[17.1px] sm:rounded-[9.4px] xsm:text-xs xsm:mb-7 xsm:mt-2 xsm:py-[7.55px] xsm:px-[17.1px] xsm:rounded-[9.4px]">
                  {t("Next")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
