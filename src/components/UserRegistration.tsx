import { FormEvent, useEffect, useRef, useState } from "react";
import { styles } from "../styles";
import { FormDataInterface } from "../interfaces/FormDataInterface";
import { useNavigate } from "react-router-dom";
import { ImageSlideshow } from "../widgets/ImageSlideshow";
import { media } from "../assets";
import { db } from "../utils/db";
import { useTranslation } from "react-i18next";
import { LanguageSelect } from "./LanguageSelect";
import { useFormValidation } from "../utils/validate";
import Modal from "../widgets/Modal";

export const UserRegistration = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const uploadedImageRef = useRef<string | undefined>(media.upload);
  // const [formData, setFormData] = useState<FormDataInterface>({
  //   firstName: "",
  //   lastName: "",
  //   date: "",
  //   daysPerWeek: "",
  //   email: "",
  //   contact: "",
  //   address: "",
  //   streetAddress: "",
  //   city: "",
  //   province: "",
  //   postalCode: "",
  //   occupation: "",
  //   skills: "",
  //   interest: "",
  // });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const updateAvatar = (imgSrc: string | undefined): void => {
    uploadedImageRef.current = imgSrc;
  };

  const firstNameRef = useRef<HTMLInputElement>(null);

  const { t } = useTranslation();

  const validationRules = {
    firstName: { required: true, minLength: 5 },
    lastName: { required: true, minLength: 2 },
    date: { required: true },
    daysPerWeek: { required: true, isNumber: true, isDayOfWeek: true },
    contact: { required: true },
    email: { required: true, email: true },
    address: { required: true },
    streetAddress: { required: true },
    city: { required: true },
    province: { required: true },
    postalCode: { required: true },
    occupation: { required: true },
    skills: { required: true },
    interest: { required: true },
  };

  // eslint-disable-next-line prefer-const
  let { values, errors, handleChange, validate } =
    useFormValidation<FormDataInterface>(
      {
        firstName: "",
        lastName: "",
        date: "",
        daysPerWeek: "",
        address: "",
        contact: "",
        email: "",
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

  const storeUserDetails = async () => {
    const details = db
      .transaction("rw", db.userDetails, async () => {
        await db.userDetails.add({ ...values });
      })
      .catch((error) => {
        console.error("Dexie error", error);
      });
    return details;
  };

  const clearData = async () => {
    try {
      await db.userDetails.clear();
      console.log("data cleared");
    } catch (error) {
      console.error(error);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    db.userDetails.toArray().then((data) => {
      if (data.length > 0) {
        // console.log(data)
        // eslint-disable-next-line react-hooks/exhaustive-deps
        values = data[0];
        console.log(values);
      }
    });
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // setFormData(values);
    await clearData();
    if (validate()) {
      await storeUserDetails();
      navigate("/view-user-details", { state: { values, uploadedImageRef } });
    } else {
      throw new DOMException("Validation failed.");
    }
  };
  const formSubmitMobile = async () => {
    // setFormData(values);
    await clearData();
    await storeUserDetails();
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
            Register as a Volunteer
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
                value={values.firstName}
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
                value={values.lastName}
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
                value={values.date}
                onChange={handleChange}
                placeholder="DD/MM/YYYY"
                name="date"
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
                value={values.daysPerWeek}
                onChange={handleChange}
                placeholder="enter number of days available"
                name="daysPerWeek"
                className="text-primary placeholder-gray-300 uppercase focus:capitalize border-b-2 text-[7.93px] leading-[9.6px] font-[700] w-[254.97px] h-[45.33px] rounded-[1.13px] focus:outline-none"
              />
              {errors.daysPerWeek && (
                <span className="text-gray-100 text-[10px]">
                  {errors.daysPerWeek}
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
                value={values.contact}
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
                value={values.email}
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
                value={values.address}
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
            <div className="flex flex-col">
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
            </div>
            <label
              htmlFor="state"
              className="text-primary text-[13.6px] leading-[16.46px] font-[700] block mt-[34px]"
            >
              State/Province/Region
            </label>
            <div className="flex flex-col">
              <input
                type="text"
                value={values.province}
                onChange={handleChange}
                placeholder="enter your state/province/region"
                name="province"
                className="text-primary placeholder-gray-300 uppercase focus:capitalize border-b-2 text-[7.93px] leading-[9.6px] font-[700] w-[254.97px] h-[45.33px] rounded-[1.13px] focus:outline-none"
              />
              {errors.province && (
                <span className="text-gray-100 text-[6.1px]">
                  {errors.province}
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
                value={values.postalCode}
                onChange={handleChange}
                placeholder="enter your zip/postal code"
                name="postalCode"
                className="text-primary placeholder-gray-300 uppercase focus:capitalize border-b-2 text-[7.93px] leading-[9.6px] font-[700] w-[254.97px] h-[45.33px] rounded-[1.13px] focus:outline-none"
              />
              {errors.postalCode && (
                <span className="text-gray-100 text-[6.1px]">
                  {errors.postalCode}
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
              Interests
            </label>
            <input
              type="text"
              value={values.interest}
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
        <div className="flex items-center justify-center min-h-screen lg:flex lg:items-center m-auto lg:justify-center">
          <div className="relative flex items-center justify-center lg:relative lg:flex lg:left-92 lg:justify-center lg:items-center md:absolute md:top-0 sm:block sm:w-[100vw] sm:top-0 xsm:hidden">
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
                <div className="absolute mt-[35px] flex flex-col mr-[32px] sm:mt-[30.75px] sm:space-y-0">
                  <div className="sm:relative sm:bottom-2 xsm:relative xsm:bottom-2">
                    <div
                      onClick={() => {
                        setModalOpen(true);
                      }}
                    >
                      <img
                        src={uploadedImageRef.current}
                        className={`${styles.imageUploader} absolute md:w-[80.52px] md:h-[80.52px] sm:w-[80.52px] sm:h-[80.52px] xsm:w-[80.52px] xsm:h-[80.52px]`}
                      />
                    </div>
                    {modalOpen && (
                      <Modal
                        updateAvatar={updateAvatar}
                        closeModal={() => setModalOpen(false)}
                      />
                    )}
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
                        className="lg:w-[181px] lg:h-[54px] focus:outline-none border lg:rounded-[15px] lg:text-[16px] lg:leading-[24.2px] lg:pl-[16px] lg:mt-48 text-white uppercase placeholder-gray-300 pr-2 mr-[24px] md:w-[141.12px] md:h-[37.23px] md:rounded-[10.42px] md:text-[12.9px] md:leading-[16.81px] md:pl-[11.11px] sm:w-[141.12px] sm:h-[37.23px] sm:rounded-[10.42px] sm:text-[12.90px] sm:leading-[16.81px] sm:pl-[11.11px] sm:mt-40 xsm:w-[141.12px] xsm:h-[36.23px] xsm:rounded-[8px] xsm:text-[10.81px] xsm:pl-[9px] xsm:mt-40"
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
                        className="text-white placeholder-gray-300 leading-[24.2px] lg:w-[253px] lg:h-[54px] focus:outline-none border lg:rounded-[15px] lg:text-[20px] lg:leading-[24.2px] lg:pl-[16px] lg:mt-48  md:w-[148.05px] md:h-[37.5px] md:text-[13.89px] md:leading-[16.81px] md:rounded-[10.42px] md:pl-[11.11px] sm:w-[148.05px] sm:h-[37.5px] sm:text-[13.89px] sm:leading-[16.81px] sm:rounded-[10.42px] sm:pl-[11.11px] sm:mt-40 xsm:w-[148.05px] xsm:h-[35.5px] xsm:text-xs xsm:rounded-[8px] xsm:text-[10.81px] xsm:pl-[9px] xsm:mt-40"
                        placeholder={t("Days per week")}
                      />
                      {errors.daysPerWeek && (
                        <span className="text-gray-100 text-[10px]">
                          {errors.daysPerWeek}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex flex-col">
                      <input
                        type="text"
                        className="text-white placeholder-gray-300 text-[20px] leading-[24.2px] lg:w-[282px] lg:h-[54px] border focus:outline-none rounded-[15px] mt-[15px] mr-[20px] lg:text-[20px] lg:leading-[24.2px] md:h-[37.23px] md:w-[243.28px] md:rounded-[10.42px] md:text-[13.89px] md:leading-[16.81px] md:pl-[11.11px] sm:h-[37.23px] sm:rounded-[10.42px] sm:text-[13.89px] sm:leading-[16.81px] sm:pl-[11.11px] sm:w-[259.73px] xsm:w-[143.28px] xsm:h-[37.23px] xsm:rounded-[10.42px] xsm:text-[10.81px] xsm:pl-[9px]"
                        placeholder={t("Contact")}
                        name="contact"
                        value={values.contact}
                        onChange={handleChange}
                      />
                      {errors.contact && (
                        <span className="text-gray-100 text-[10px]">
                          {errors.contact}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <input
                        type="text"
                        className="text-white placeholder-gray-300 text-[20px] leading-[24.2px] focus:outline-none border rounded-[15px] mt-[15px] lg:w-[412px] lg:h-[54px] lg:rounded-[15px] lg:text-[20px] lg:leading-[24.2px] md:h-[37.23px] md:w-[259.73px] md:rounded-[10.42px] md:text-[13.89px] md:leading-[16.81px] md:pl-[11.11px] sm:h-[37.23px] sm:rounded-[10.42px] sm:text-[13.89px] sm:leading-[16.81px] sm:pl-[11.11px] sm:w-[259.73px] xsm:w-[159.73px] xsm:h-[35.23px] xsm:rounded-[8px] xsm:text-[10.81px] xsm:pl-[9px]"
                        placeholder={t("Email")}
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                      />
                      {errors.interest && (
                        <span className="text-gray-100 text-[10px]">
                          {errors.interest}
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
                        <span className="text-gray-100 text-[10px]">
                          {errors.interest}
                        </span>
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
          <div className="lg:hidden md:hidden sm:hidden">
            {formSection[currentPage].content}
            <div className="flex justify-center mt-4">
              {formSection.slice(2).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index + 2)}
                  className={`mr-2 text-[9.07px] leading-[10.97px] ${
                    currentPage === index + 2
                      ? "text-white"
                      : "text-gray-400"
                  } ${currentPage >=  2 ? 'block' : 'hidden' }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
