import { FormEvent, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { styles } from "../../styles";
import { media } from "../../assets";
// import { db } from "../../utils/db";
import { useTranslation } from "react-i18next";
import { LanguageSelect } from "../LanguageSelect";
import { useFormValidation } from "../../utils/validate";
import Modal from "../../widgets/Modal";

export const VolunteerRegisterOther = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  const uploadedImageRef = useRef<string | undefined>(media.upload);

  const { state } = useLocation();
  const { info, profilePicture, dateOfBirth } = state;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const updateAvatar = (imgSrc: string | undefined): void => {
    uploadedImageRef.current = imgSrc;
  };

  const { t } = useTranslation();

  const validationRules = {
    streetAddress: { required: true },
    region: { required: true },
    zipCode: { required: true },
    occupation: { required: true },
    skills: { required: true },
    interests: { required: true },
  };

  // eslint-disable-next-line prefer-const
  let { values, errors, handleChange, validate } =
    useFormValidation(
      { 
        streetAddress: "",
        region: "",
        zipCode: "",
        occupation: "",
        skills: "",
        interests: "",
        profilePicture: "",
      },
      validationRules
    );

  // const storeUserDetails = async () => {
  //   const details = db
  //     .transaction("rw", db.userDetails, async () => {
  //       await db.userDetails.add({ ...values });
  //     })
  //     .catch((error) => {
  //       console.error("Dexie error", error);
  //     });
  //   return details;
  // };


  const navigate = useNavigate();

 

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // setFormData(values);
    if (validate()) {
      // await storeUserDetails();
      const finalValue = {...info, ...values}
      console.log(dateOfBirth)
      console.log(finalValue)
      finalValue['dateOfBirth'] = dateOfBirth;
      console.log(finalValue)
      navigate("/view-user-details", { state: { volunteerInfo : finalValue, profilePicture: profilePicture } });
    } else {
      throw new DOMException("Validation failed.");
    }
  };
  const formSubmitMobile = async () => {
    // setFormData(values);
    // await clearData();
    navigate("/view-user-details", { state: { values, uploadedImageRef } });
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const [modalOpen, setModalOpen] = useState(false);

  const formSection = [
    {
      title: "landing page",
      content: (
        <div className="xsm:flex xsm:flex-col xsm:items-center xsm:justify-center">
          <h2 className="text-[29.09px] leading-[35.21px] font-extrabold text-primary">
            Welcome
          </h2>
          <img src={`${media.mcss}`} className="w-[150.12px] h-[150.12px]" />
          <p className="text-primary text-center w-[261.84px] h-[107.06px] text-[11.64px] leading-[14.08px] font-bold">
            We’re an incorporated Black and Racialized-led and serving
            community-based multi-services agency that delivers a continuum of
            programs and services in the Lower Mainland of British Columbia.
          </p>
          <button
            className="w-[261.84px] h-[32.58px] rounded-[7.1px] border-[0.71px] bg-primary text-secondary font-[700] text-[11.83px] leading-[14.32px]"
            onClick={nextPage}
          >
            {t("Register as a Volunteer")}
          </button>
        </div>
      ),
    },
    {
      title: "Profile picture upload",
      content: (
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-[29px] leading-[35.1px] font-[700] text-primary">
            Profile
          </h2>
          <p className="text-[10px] leading-[12.1px] text-primary mt-[3px] font-[400]">
            Upload Your Profile Picture
          </p>
          <div className="sm:relative sm:bottom-2 xsm:relative xsm:bottom-2 mt-[79px]">
            <div
              onClick={() => {
                setModalOpen(true);
              }}
            >
              <img
                src={uploadedImageRef.current}
                className={`${styles.imageUploader} w-[153px] h-[153px]`}
              />
            </div>
            {modalOpen && (
              <Modal
                updateAvatar={updateAvatar}
                closeModal={() => setModalOpen(false)}
              />
            )}
          </div>
          <button
            className="w-[261.84px] h-[32.58px] rounded-[6.1px] bg-primary text-secondary font-[700] mt-[101px] text-[11.83px] leading-[14.32px]"
            onClick={nextPage}
          >
            Next
          </button>
        </div>
      ),
    },
    {
      title: "User Register 1",
      content: (
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-primary font-[700] text-[29px] leading-[35.1px]">
            Register
          </h2>
          <p className="text-primary text-[10px] leading-[12.px] mt-[5.79px] font-[400] text-center w-[98px] h-[24px]">
            Fill out this form to become a volunteer
          </p>
          <div className="mt-[60.99px]">
            <label
              htmlFor="firstname"
              className="text-primary text-[13.6px] leading-[16.46px] font-[700] block"
            >
              First Name
            </label>
            <div className="flex flex-col">
              <input
                type="text"
                onChange={handleChange}
                placeholder="enter first name"
                name="firstName"
                className="text-primary placeholder-gray-300 uppercase focus:capitalize border-b-2 text-[7.93px] leading-[9.6px] font-[700] w-[254.97px] h-[45.33px] rounded-[1.13px] focus:outline-none"
              />
              {errors.firstName && (
                <span className="text-gray-100 text-[10px]">
                  {errors.firstName}
                </span>
              )}
            </div>
            <label
              htmlFor="lastname"
              className="text-primary text-[13.6px] leading-[16.46px] font-[700] block mt-[34px]"
            >
              Last Name
            </label>
            <div className="flex flex-col">
              <input
                type="text"
                onChange={handleChange}
                placeholder="enter last name"
                name="lastName"
                className="text-primary placeholder-gray-300 uppercase focus:capitalize border-b-2 text-[7.93px] leading-[9.6px] font-[700] w-[254.97px] h-[45.33px] rounded-[1.13px] focus:outline-none"
              />
              {errors.lastName && (
                <span className="text-gray-100 text-[10px]">
                  {errors.lastName}
                </span>
              )}
            </div>
            <label
              htmlFor="date"
              className="text-primary text-[13.6px] leading-[16.46px] font-[700] block mt-[34px]"
            >
              Date of Birth
            </label>
            <div className="flex flex-col">
              <input
                type="date"
                onChange={handleChange}
                placeholder="DD/MM/YYYY"
                name="dateOfBirth"
                className="text-primary placeholder-gray-300 uppercase border-b-2 text-[7.93px] leading-[9.6px] font-[700] w-[254.97px] h-[45.33px] rounded-[1.13px] focus:outline-none"
              />
              {errors.date && (
                <span className="text-gray-100 text-[10px]">{errors.date}</span>
              )}
            </div>
            <label
              htmlFor="daysOfWeek"
              className="text-primary text-[13.6px] leading-[16.46px] font-[700] block mt-[34px]"
            >
              Days available per week
            </label>
            <div className="flex flex-col">
              <input
                type="text"
                onChange={handleChange}
                placeholder="enter number of days available"
                name="daysAvailable"
                className="text-primary placeholder-gray-300 uppercase focus:capitalize border-b-2 text-[7.93px] leading-[9.6px] font-[700] w-[254.97px] h-[45.33px] rounded-[1.13px] focus:outline-none"
              />
              {errors.daysAvailable && (
                <span className="text-gray-100 text-[10px]">
                  {errors.daysAvailable}
                </span>
              )}
            </div>
          </div>
          <button
            className="w-[261.84px] h-[32.58px] rounded-[6.1px] bg-primary text-secondary font-[700] mt-[32.86px] text-[11.83px] leading-[14.32px]"
            onClick={nextPage}
          >
            Next
          </button>
        </div>
      ),
    },
    {
      title: "User Register 2",
      content: (
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-primary font-[700] text-[29px] leading-[35.1px]">
            Register
          </h2>
          <p className="text-primary text-[10px] leading-[12.px] mt-[5.79px] font-[400] text-center w-[98px] h-[24px]">
            Fill out this form to become a volunteer
          </p>
          <div className="mt-[60.99px]">
            <label
              htmlFor="contact"
              className="text-primary text-[13.6px] leading-[16.46px] font-[700] block"
            >
              Contact
            </label>
            <div className="flex flex-col">
              <input
                type="text"
                onChange={handleChange}
                placeholder="enter your contact number"
                name="contact"
                className="text-primary placeholder-gray-300 uppercase focus:capitalize border-b-2 text-[7.93px] leading-[9.6px] font-[700] w-[254.97px] h-[45.33px] rounded-[1.13px] focus:outline-none"
              />
              {errors.contact && (
                <span className="text-gray-100 text-[6.1px]">
                  {errors.contact}
                </span>
              )}
            </div>
            <label
              htmlFor="Email"
              className="text-primary text-[13.6px] leading-[16.46px] font-[700] block mt-[34px]"
            >
              Email
            </label>
            <div className="flex flex-col">
              <input
                type="email"
                onChange={handleChange}
                placeholder="enter your email address"
                name="email"
                className="text-primary placeholder-gray-300 uppercase focus:capitalize border-b-2 text-[7.93px] leading-[9.6px] font-[700] w-[254.97px] h-[45.33px] rounded-[1.13px] focus:outline-none"
              />
              {errors.email && (
                <span className="text-gray-100 text-[6.1px]">
                  {errors.email}
                </span>
              )}
            </div>
            <label
              htmlFor="address"
              className="text-primary text-[13.6px] leading-[16.46px] font-[700] block mt-[34px]"
            >
              Address
            </label>
            <div className="flex flex-col">
              <input
                type="address"
                onChange={handleChange}
                placeholder="enter your address"
                name="address"
                className="text-primary placeholder-gray-300 uppercase focus:capitalize border-b-2 text-[7.93px] leading-[9.6px] font-[700] w-[254.97px] h-[45.33px] rounded-[1.13px] focus:outline-none"
              />
              {errors.address && (
                <span className="text-gray-100 text-[6.1px]">
                  {errors.address}
                </span>
              )}
            </div>
            <label
              htmlFor="streetAddress"
              className="text-primary text-[13.6px] leading-[16.46px] font-[700] block mt-[34px]"
            >
              Street Address
            </label>
            <div className="flex flex-col">
              <input
                type="text"
                value={values.streetAddress}
                onChange={handleChange}
                placeholder="enter your street address"
                name="streetAddress"
                className="text-primary placeholder-gray-300 uppercase focus:capitalize border-b-2 text-[7.93px] leading-[9.6px] font-[700] w-[254.97px] h-[45.33px] rounded-[1.13px] focus:outline-none"
              />
              {errors.streetAddress && (
                <span className="text-gray-100 text-[6.1px]">
                  {errors.streetAddress}
                </span>
              )}
            </div>
          </div>
          <button
            className="w-[261.84px] h-[32.58px] rounded-[6.1px] bg-primary text-secondary font-[700] mt-[32.86px] text-[11.83px] leading-[14.32px]"
            onClick={nextPage}
          >
            Next
          </button>
        </div>
      ),
    },
    {
      title: "User Register 3",
      content: (
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-primary font-[700] text-[29px] leading-[35.1px]">
            Register
          </h2>
          <p className="text-primary text-[10px] leading-[12.px] mt-[5.79px] font-[400] text-center w-[98px] h-[24px]">
            Fill out this form to become a volunteer
          </p>
          <div className="mt-[60.99px]">
            <label
              htmlFor="city"
              className="text-primary text-[13.6px] leading-[16.46px] font-[700] block"
            >
              City
            </label>
            {/* <div className="flex flex-col">
              <input
                type="text"
                value={values.city}
                onChange={handleChange}
                placeholder="enter your city"
                name="city"
                className="text-primary placeholder-gray-300 uppercase focus:capitalize border-b-2 text-[7.93px] leading-[9.6px] font-[700] w-[254.97px] h-[45.33px] rounded-[1.13px] focus:outline-none"
              />
              {errors.city && (
                <span className="text-gray-100 text-[6.1px]">
                  {errors.city}
                </span>
              )}
            </div> */}
            <label
              htmlFor="state"
              className="text-primary text-[13.6px] leading-[16.46px] font-[700] block mt-[34px]"
            >
              State/region/Region
            </label>
            <div className="flex flex-col">
              <input
                type="text"
                value={values.region}
                onChange={handleChange}
                placeholder="enter your state/region/region"
                name="region"
                className="text-primary placeholder-gray-300 uppercase focus:capitalize border-b-2 text-[7.93px] leading-[9.6px] font-[700] w-[254.97px] h-[45.33px] rounded-[1.13px] focus:outline-none"
              />
              {errors.region && (
                <span className="text-gray-100 text-[6.1px]">
                  {errors.region}
                </span>
              )}
            </div>
            <label
              htmlFor="zipcode"
              className="text-primary text-[13.6px] leading-[16.46px] font-[700] block mt-[34px]"
            >
              ZIP/Postal Code
            </label>
            <div className="flex flex-col">
              <input
                type="text"
                value={values.zipCode}
                onChange={handleChange}
                placeholder="enter your zip/postal code"
                name="zipCode"
                className="text-primary placeholder-gray-300 uppercase focus:capitalize border-b-2 text-[7.93px] leading-[9.6px] font-[700] w-[254.97px] h-[45.33px] rounded-[1.13px] focus:outline-none"
              />
              {errors.zipCode && (
                <span className="text-gray-100 text-[6.1px]">
                  {errors.zipCode}
                </span>
              )}
            </div>
            <label
              htmlFor="occupation"
              className="text-primary text-[13.6px] leading-[16.46px] font-[700] block mt-[34px]"
            >
              Occupation
            </label>
            <div className="flex flex-col">
              <input
                type="text"
                value={values.occupation}
                onChange={handleChange}
                placeholder="enter your occupation"
                name="occupation"
                className="text-primary placeholder-gray-300 uppercase focus:capitalize border-b-2 text-[7.93px] leading-[9.6px] font-[700] w-[254.97px] h-[45.33px] rounded-[1.13px] focus:outline-none"
              />
              {errors.occupation && (
                <span className="text-gray-100 tex-[6.1px]">
                  {errors.occupation}
                </span>
              )}
            </div>
          </div>
          <button
            className="w-[261.84px] h-[32.58px] rounded-[6.1px] bg-primary text-secondary font-[700] mt-[32.86px] text-[11.83px] leading-[14.32px]"
            onClick={nextPage}
          >
            Next
          </button>
        </div>
      ),
    },
    {
      title: "User Register 4",
      content: (
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-primary font-[700] text-[29px] leading-[35.1px]">
            Register
          </h2>
          <p className="text-primary text-[10px] leading-[12.px] mt-[5.79px] font-[400] text-center w-[98px] h-[24px]">
            Fill out this form to become a volunteer
          </p>
          <form className="mt-[60.99px]">
            <label
              htmlFor="skills"
              className="text-primary text-[13.6px] leading-[16.46px] font-[700] block"
            >
              Skills
            </label>
            <input
              type="text"
              value={values.skills}
              onChange={handleChange}
              placeholder="enter your skills"
              name="skills"
              className="text-primary placeholder-gray-300 uppercase focus:capitalize border-b-2 text-[7.93px] leading-[9.6px] font-[700] w-[254.97px] h-[45.33px] rounded-[1.13px] focus:outline-none"
            />
            <label
              htmlFor="interests"
              className="text-primary text-[13.6px] leading-[16.46px] font-[700] block mt-[34px]"
            >
              interests
            </label>
            <input
              type="text"
              value={values.interests}
              onChange={handleChange}
              placeholder="enter your interests"
              name="interests"
              className="text-primary placeholder-gray-300 uppercase focus:capitalize border-b-2 text-[7.93px] leading-[9.6px] font-[700] w-[254.97px] h-[45.33px] rounded-[1.13px] focus:outline-none"
            />
          </form>
          <button
            className="w-[261.84px] h-[32.58px] rounded-[6.1px] bg-primary text-secondary font-[700] mt-[32.86px] text-[11.83px] leading-[14.32px]"
            onClick={formSubmitMobile}
          >
            Register
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="relative filter min-h-screen w-[100vw] lg:h-[950px] md:h-[1285px] sm:h-[100%] xsm:h-[100%] lg:bg-hero md:bg-hero sm:bg-hero xsm:bg-hero-xsm bg-no-repeat bg-cover lg:filter md:filter-none z-0 sm:overflow-none">
      <div className="red-gradient bg-no-repeat bg-cover w-[100vw] h-full">
        <div className="absolute top-8 right-16 z-10 text-primary flex space-x-1">
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
        <div className="flex flex-col items-center justify-center relative top-[85px]">
          <h1 className="text-primary font-[700] text-[43.05px] leading-[52.09px]">
            {t("Register")}
          </h1>
          <p className="text-primary font-[500] mt-[5px] text-[25px] leading-[30.26px] text-center">
            {t("Fill out this form to become a Volunteer")}
          </p>
          <form onSubmit={handleSubmit} className="w-[894px] h-[791px] rounded-[33px] bg-primary mt-[25px] flex flex-col items-center">
            <div className="flex flex-col mt-[123px]">
              <label
                htmlFor="StreetAddress"
                className="text-[20px] font-[500] leading-[24.2px]"
              >
                {t("Street Address")}
              </label>
              <input
                type="text"
                name="streetAddress"
                placeholder="Street Address"
                value={values.streetAddress}
                onChange={handleChange}
                className="w-[729px] h-[58px] rounded-[16px] mt-[4px] bg-image-card text-[20px] text-input-color font-[600] leading-[24.2px] focus:outline-none pl-[15px]"
              />
              {errors.streetAddress && (
                <span className="text-secondary text-[10px]">
                  {errors.streetAddress}
                </span>
              )}
            </div>
            <div className="flex mt-[32px] space-x-[36px]">
              <div className="flex flex-col">
                <label
                  htmlFor="region"
                  className="text-[20px] font-[500] leading-[24.2px]"
                >
                  {t("State/Province/Region")}
                </label>
                <input
                  type="text"
                  className="w-[336px] h-[58px] rounded-[16px] mt-[4px] bg-image-card text-[20px] text-input-color font-[600] leading-[24.2px] focus:outline-none pl-[15px]"
                  placeholder="State/Province/Region"
                  value={values.region}
                  name="region"
                  onChange={handleChange}
                />
                {errors.region && (
                  <span className="text-secondary text-[10px]">
                    {errors.region}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="city"
                  className="text-[20px] font-[500] leading-[24.2px]"
                >
                 {t("ZIP/Postal Code")}
                </label>
                <input
                  type="text"
                  className="w-[358px] h-[58px] rounded-[16px] mt-[4px] bg-image-card text-[20px] text-input-color font-[600] leading-[24.2px] focus:outline-none pl-[15px]"
                  placeholder="ZIP/Postal Code"
                  name="zipCode"
                  value={values.zipCode}
                  onChange={handleChange}
                />
                {errors.zipCode && (
                  <span className="text-secondary text-[10px]">
                    {errors.zipCode}
                  </span>
                )}
              </div>
            </div>
            <div className="flex mt-[29px] space-x-[36px]">
              <div className="flex flex-col">
                <label
                  htmlFor="occupation"
                  className="text-[20px] font-[500] leading-[24.2px]"
                >
                  {t("Occupation")}
                </label>
                <input
                  type="text"
                  className="w-[337px] h-[58px] rounded-[16px] mt-[4px] bg-image-card text-[20px] text-input-color font-[600] leading-[24.2px] focus:outline-none pl-[15px]"
                  placeholder="Occupation"
                  value={values.occupation}
                  name="occupation"
                  onChange={handleChange}
                />
                {errors.occupation && (
                  <span className="text-secondary text-[10px]">
                    {errors.occupation}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="skills"
                  className="text-[20px] font-[500] leading-[24.2px]"
                >
                  {t("Skills")}
                </label>
                <input
                  type="text"
                  className="w-[356px] h-[58px] rounded-[16px] mt-[4px] bg-image-card text-[20px] text-input-color font-[600] leading-[24.2px] focus:outline-none pl-[15px]"
                  placeholder="Skills"
                  name="skills"
                  value={values.skills}
                  onChange={handleChange}
                />
                {errors.skills && (
                  <span className="text-secondary text-[10px]">
                    {errors.skills}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col relative -left-[190px] mt-[29px]">
              <label
                htmlFor="interests"
                className="text-[20px] font-[500] leading-[24.2px]"
              >
                {t("Interests")}
              </label>
              <input
                type="text"
                className="w-[337px] h-[58px] rounded-[16px] mt-[4px] bg-image-card text-[20px] text-input-color font-[600] leading-[24.2px] focus:outline-none pl-[15px]"
                placeholder="Interests"
                value={values.interests}
                name="interests"
                onChange={handleChange}
              />
              {errors.interests && (
                <span className="text-secondary text-[10px]">
                  {errors.interests}
                </span>
              )}
            </div>
            <button
              className="w-[729px] h-[58px] mt-[30px] rounded-[16px] bg-secondary text-primary text-[25px] font-[700] leading-[30.26px] text-center"
              
            >
              {t("Register")}
            </button>
          </form>
        </div>

        <div className="lg:hidden md:hidden sm:hidden">
          {formSection[currentPage].content}
          <div className="flex justify-center mt-4">
            {formSection.slice(2).map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index + 2)}
                className={`mr-2 text-[9.07px] leading-[10.97px] ${
                  currentPage === index + 2 ? "text-white" : "text-gray-400"
                } ${currentPage >= 2 ? "block" : "hidden"}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    // </div>
  );
};
