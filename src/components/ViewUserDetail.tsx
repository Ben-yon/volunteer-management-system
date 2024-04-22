/* eslint-disable @typescript-eslint/no-explicit-any */
//import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { styles } from "../styles";
import { media } from "../assets";
import { LanguageSelect } from "./LanguageSelect";
import {  useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../features/store";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { registerVolunteer } from "../features/auth/authAction";
import { Spinner } from "../widgets/Spinner";
import { useEffect } from "react";



export const ViewUserDetail = () => {
  const { state } = useLocation();
  const { values, uploadedImageRef } = state;

  const { t } = useTranslation();

  const { loading, userInfo, error, success } = useSelector(
    (state: RootState) => state.auth
  );

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  useEffect(() => {
    console.log(userInfo, success);
  }, [userInfo, success])


  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(registerVolunteer(values))
    navigate("/successful-registration");
  };

  return (
    <div className="lg:relative bg-details bg-no-repeat bg-cover lg:filter md:filter-none z-0 lg:w-[100%] lg:h-[130vh] md:w-[100vw] md:h-[120%] sm:w-[100vw] sm:overflow-none ">
      <div className="red-gradient bg-no-repeat bg-cover lg:w-[100vw] lg:h-[130vh] md:h-[130vh] sm:h-[100vh] sm:relative xsm:h-[100vh]">
        <div className="absolute top-8 right-16 z-10 text-primary flex space-x-1">
          <img
            src={media.lang_white}
            alt="language"
            className="w-[31px] h-[29.1px] lg:w-[31px] lg:h-[29.1px] md:w-[31px] md:h-[29.1px] sm:w-[31px] sm:h-[29.1px] xsm:w-[14.2px] xsm:h-[14.0px]"
          />
          <LanguageSelect />
        </div>
        <div>
          <img
            src={`${media.whiteLogo}`}
            alt="LOGO"
            className="lg:absolute lg:w-[221px] lg:h-[90px] lg:bottom-[39px] lg:right-[35px] sm:absolute sm:w-[133px] sm:h-[55px] sm:bottom-[32px] sm:right-[31px] xsm:absolute xsm:w-[133px] xsm:h-[55px] xsm:bottom-[2%] xsm:right-[31px]"
          />
        </div>
        <div className="relative flex flex-col justify-center items-center text-center lg:relative lg:flex lg:flex-col lg:items-center lg:justify-center lg:top-20 top-[182px] lg:w-[680px] lg:h-[682.56px] white-gradient rounded-[67.49px] opacity-100 m-auto md:w-[476px] md:h-[527.25px] md:top-[270px] sm:w-[476px] sm:h-[527.25px] sm:top-[270px] xsm:w-[277px] xsm:h-[342px] xsm:rounded-[47.1px] xsm:relative xsm:top-[163.43px] xsm:flex xsm:flex-col xsm:items-center">
          <div className="lg:mt-[65.54px] items-center">
            <p className="text-white  text-[33.75px] leading-[33.75px] lg:text-[33.75px] lg:leading-[33.75px] font-bold md:text-[24.35px] md:leading-[24.35px] sm:text-[24.35px] sm:leading-[24.35px] xsm:text-[15.91px] xsm:leading-[15.91px] xsm:mt-9">
              {t("Review Your")} <br /> {t("Information")}
            </p>
            <p className="text-white text-center text-[12.66px] leading-[15.32px] lg:text-[12.66px] lg:leading-[15.32px] md:text-[9.13px] md:leading-[11.05px] sm:text-[9.13px] sm:leading-[11.05px] xsm:text-[7.97px] xsm:leading-[8.22px] font-normal">
              {t("Please take a moment to review")} <br /> {t("the information you've entered")}
            </p>
          </div>
          <div className="flex flex-col items-center h-auto">
            {error}
            <div>
              <img
                src={uploadedImageRef.current}
                alt=""
                className={
                  uploadedImageRef.current
                    ? `${styles.imageUploader} mb-2 ml-14 mt-3 xsm:ml-1 xsm:w-[52.49px] xsm:h-[52.49px] border-4`
                    : ""
                }
              />
            </div>
            <p className="text-primary text-center lg:text-[15.17px] lg:leading-[17.73px] md:text-[12.17px] md:leading-[14.73px] sm:text-[12.17px] sm:leading-[14.73px] font-bold xsm:text-[7.95px] xsm:leading-[9.63px]">
              {values?.firstName} {values?.lastName}{" "}
            </p>
            <p className="text-primary text-center  lg:text-[15.17px] lg:leading-[17.73px]  md:text-[12.17px] md:leading-[14.73px] sm:text-[12.17px] sm:leading-[14.73px] xsm:text-[7.95px] xsm:leading-[9.63px]">
              {values?.date}
            </p>
            <p className="text-primary text-center  lg:text-[15.17px] lg:leading-[17.73px]  md:text-[12.17px] md:leading-[14.73px] sm:text-[12.17px] sm:leading-[14.73px] xsm:text-[7.95px] xsm:leading-[9.63px]">
              {values?.daysAvailable}{" "}
              {values.daysAvailable ? <span>Days per week</span> : ""}{" "}
            </p>
            <p className="text-primary text-center  lg:text-[15.17px] lg:leading-[17.73px]  md:text-[12.17px] md:leading-[14.73px] sm:text-[12.17px] sm:leading-[14.73px] xsm:text-[7.95px] xsm:leading-[9.63px]">
              {values?.address}
            </p>
            <p className="text-primary text-center  lg:text-[15.17px] lg:leading-[17.73px]  md:text-[12.17px] md:leading-[14.73px] sm:text-[12.17px] sm:leading-[14.73px] xsm:text-[7.95px] xsm:leading-[9.63px]">
              {values?.streetAddress} {values?.city}
            </p>
            <p className="text-primary text-center  lg:text-[15.17px] lg:leading-[17.73px]  md:text-[12.17px] md:leading-[14.73px] sm:text-[12.17px] sm:leading-[14.73px] xsm:text-[7.95px] xsm:leading-[9.63px]">
              {values?.region}
            </p>
            <p className="text-primary text-center  lg:text-[15.17px] lg:leading-[17.73px]  md:text-[12.17px] md:leading-[14.73px] sm:text-[12.17px] sm:leading-[14.73px] xsm:text-[7.95px] xsm:leading-[9.63px]">
              {values?.country}
            </p>
            <p className="text-primary text-center  lg:text-[15.17px] lg:leading-[17.73px]  font-bold md:text-[12.17px] md:leading-[14.73px] sm:text-[12.17px] sm:leading-[14.73px] xsm:text-[7.95px] xsm:leading-[9.63px]">
              {values?.skills}
            </p>
            <p className="text-primary text-center  lg:text-[15.17px] lg:leading-[17.73px]  font-bold md:text-[12.17px] md:leading-[14.73px] sm:text-[12.17px] sm:leading-[14.73px] xsm:text-[7.95px] xsm:leading-[9.63px]">
              {values?.interests}
            </p>
          </div>
          <button
            className="register-form-submit lg:text-primary lg:h-14 lg:w-32 lg:font-bold lg:mt-[28.7px] lg:text-center lg:rounded-[12.7px] lg:leading-5 lg:text-xl lg:px-8 lg:pr-4 lg:pl-4 md:text-[15.22px] md:leading-[18.42px] md:w-[94.96px] md:rounded-[9.13px] sm:text-[15.22px] sm:leading-[18.42px] sm:w-[94.96px] sm:rounded-[9.13px] xsm:rounded-[6px] xsm:w-[62.04px] xsm:text-xs xsm:px-2 xsm:py-2 xsm:text-primary xsm:font-bold xsm:mt-[18.5px]"
            onClick={handleSubmit}
          >
            { loading ? <Spinner/> : t("Submit")}
          </button>
          <button
            className="rounded-full w-[10px] h-[10px] p-4 bg-primary mt-[16.03px] font-bold flex  justify-center items-center"
            disabled={loading}
            onClick={() => navigate('/')}
          >
            &lt;
          </button>
        </div>
      </div>
    </div>
  );
};
