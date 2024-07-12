/* eslint-disable @typescript-eslint/no-explicit-any */
//import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { media } from "../../assets";
import { LanguageSelect } from "../LanguageSelect";
import {  useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { registerVolunteer } from "../../features/register/registerVolunteerAction";
import { Spinner } from "../../widgets/Spinner";
import { useEffect } from "react";
import { extractBase64 } from "../../utils/imageConverter";



export const ViewUserDetail = () => {
  const { state } = useLocation();
  const { volunteerInfo, profilePicture } = state;

  const { t } = useTranslation();

  const { loading, userInfo, success } = useSelector(
    (state: RootState) => state.registerVolunteerSlice
  );

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const navigate = useNavigate();

  useEffect(() => {
    if (success === true){
      navigate("/successful-registration");
      console.log(userInfo, success);
    }
  }, [userInfo, success, navigate])




  const handleSubmit = () => {
    volunteerInfo['profilePicture'] = extractBase64(profilePicture?.current);
    dispatch(registerVolunteer(volunteerInfo));
  };

  return (
    <div className="lg:relative bg-details bg-no-repeat bg-cover lg:filter md:filter-none z-0 lg:w-[100%] lg:h-[130vh] md:w-[100vw] md:h-[120%] sm:w-[100vw] sm:overflow-none ">
      <div className="red-gradient bg-no-repeat bg-cover lg:w-[100vw] lg:h-[130vh] md:h-[130vh] sm:h-[100vh] sm:relative xsm:h-[100vh]">
        <div className="absolute top-8 right-16 z-10 text-white space-x-1 hidden">
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
        <div className="relative flex flex-col justify-center items-center text-center top-[132px] lg:relative lg:flex lg:flex-col lg:items-center lg:justify-center lg:top-[132px] lg:w-[680px] lg:h-[682.56px] m-auto md:w-[476px] md:h-[527.25px] md:top-[270px] sm:w-[476px] sm:h-[527.25px] sm:top-[270px] xsm:w-[277px] xsm:h-[342px] xsm:rounded-[47.1px] xsm:relative xsm:top-[163.43px] xsm:flex xsm:flex-col xsm:items-center">
          <h1 className="text-primary text-[43.05px] leading-[52.09px] font-[700] lg:text-[43.05px] lg:leading-[52.09px] md:text-[24.35px] md:leading-[24.35px] sm:text-[24.35px] sm:leading-[24.35px] xsm:text-[15.91px] xsm:leading-[15.91px] xsm:mt-9">
            {t("Review Your Information")}
          </h1>
          <p className="text-primary mt-[5px] text-center text-[25px] leading-[30.26px] w-[800px] font-[200] lg:text-[25px] lg:leading-[30.26px] md:text-[9.13px] md:leading-[11.05px] sm:text-[9.13px] sm:leading-[11.05px] xsm:text-[7.97px] xsm:leading-[8.22px]">
            {t("Please take a moment to review the information you've entered")}
          </p>
          <div className="w-[1040px] h-[654px] rounded-[101px] bg-primary flex flex-col items-center justify-center mt-[26px]">
            <div className="flex items-center justify-center">
              <img
                src={`${profilePicture?.current}`}
                alt=""
                className="w-[214px] h-[214px] mr-[52px] rounded-full border-gray-300 border-8"
              />
              <div className="flex flex-col h-auto">
                <p className="text-black text-left text-[23px] leading-[27.84px] font-[600] lg:text-[23px] lg:leading-[27.84px] md:text-[12.17px] md:leading-[14.73px] sm:text-[12.17px] sm:leading-[14.73px] xsm:text-[7.95px] xsm:leading-[9.63px]">
                  {volunteerInfo?.firstName} {volunteerInfo?.lastName}{" "}
                </p>
                <p className="text-black text-left text-[23px] leading-[27.84px] font-[600] lg:text-[23px] lg:leading-[27.84px] md:text-[12.17px] md:leading-[14.73px] sm:text-[12.17px] sm:leading-[14.73px] xsm:text-[7.95px] xsm:leading-[9.63px]">
                  {volunteerInfo?.dateOfBirth}
                </p>
                <p className="text-black  lg:text-[15.17px] lg:leading-[17.73px]  md:text-[12.17px] md:leading-[14.73px] sm:text-[12.17px] sm:leading-[14.73px] xsm:text-[7.95px] xsm:leading-[9.63px]">
                  {volunteerInfo?.date}
                </p>
                <p className="text-black text-left text-[23px] leading-[27.84px] font-[400] lg:text-[23px] lg:leading-[27.84px]  md:text-[12.17px] md:leading-[14.73px] sm:text-[12.17px] sm:leading-[14.73px] xsm:text-[7.95px] xsm:leading-[9.63px]">
                  {volunteerInfo?.daysAvailable}{" "}
                  {volunteerInfo.daysAvailable ? (
                    <span>Days per week</span>
                  ) : (
                    ""
                  )}{" "}
                </p>
                <p className="text-black text-left text-[23px] leading-[27.84px] font-[400] lg:text-[23px] lg:leading-[27.84px]  md:text-[12.17px] md:leading-[14.73px] sm:text-[12.17px] sm:leading-[14.73px] xsm:text-[7.95px] xsm:leading-[9.63px]">
                  {volunteerInfo?.address}
                </p>
                <p className="text-black text-left text-[23px] leading-[27.84px] font-[400] lg:text-[23px] lg:leading-[27.84px]  md:text-[12.17px] md:leading-[14.73px] sm:text-[12.17px] sm:leading-[14.73px] xsm:text-[7.95px] xsm:leading-[9.63px]">
                  {volunteerInfo?.email}
                </p>
                <p className="text-black text-left text-[23px] leading-[27.84px] font-[400] lg:text-[23px] lg:leading-[27.84px]  md:text-[12.17px] md:leading-[14.73px] sm:text-[12.17px] sm:leading-[14.73px] xsm:text-[7.95px] xsm:leading-[9.63px]">
                  {volunteerInfo?.streetAddress} {volunteerInfo?.city}
                </p>
                <p className="text-black text-left text-[23px] leading-[27.84px] font-[400] lg:text-[23px] lg:leading-[27.84px]  md:text-[12.17px] md:leading-[14.73px] sm:text-[12.17px] sm:leading-[14.73px] xsm:text-[7.95px] xsm:leading-[9.63px]">
                  {volunteerInfo?.region}
                </p>
                <p className="text-black text-left text-[23px] leading-[27.84px] font-[400] lg:text-[23px] lg:leading-[27.84px]  md:text-[12.17px] md:leading-[14.73px] sm:text-[12.17px] sm:leading-[14.73px] xsm:text-[7.95px] xsm:leading-[9.63px]">
                  {volunteerInfo?.contact}
                </p>
                <p className="text-black text-left text-[23px] leading-[27.84px] font-[600] lg:text-[23px] lg:leading-[27.84px] md:text-[12.17px] md:leading-[14.73px] sm:text-[12.17px] sm:leading-[14.73px] xsm:text-[7.95px] xsm:leading-[9.63px]">
                  {volunteerInfo?.skills}
                </p>
                <p className="text-black text-left text-[23px] leading-[27.84px] font-[600] lg:text-[23px] lg:leading-[27.84px] md:text-[12.17px] md:leading-[14.73px] sm:text-[12.17px] sm:leading-[14.73px] xsm:text-[7.95px] xsm:leading-[9.63px]">
                  {volunteerInfo?.interests}
                </p>
                <p className="text-black text-left text-[23px] leading-[27.84px] font-[600] lg:text-[23px] lg:leading-[27.84px] md:text-[12.17px] md:leading-[14.73px] sm:text-[12.17px] sm:leading-[14.73px] xsm:text-[7.95px] xsm:leading-[9.63px]">
                  {volunteerInfo?.occupation}
                </p>
              </div>
            </div>
            <button
              className="w-[729px] h-[64px] bg-secondary rounded-[16px] text-primary font-[700] text-[25px] leading-[30.26px] mt-[27px] lg:text-primary lg:h-[64px] lg:w-[729px] lg:mt-[28.7px] lg:text-center lg:rounded-[16px] lg:leading-[30.26px] lg:text-[25px] md:text-[15.22px] md:leading-[18.42px] md:w-[94.96px] md:rounded-[9.13px] sm:text-[15.22px] sm:leading-[18.42px] sm:w-[94.96px] sm:rounded-[9.13px] xsm:rounded-[6px] xsm:w-[62.04px] xsm:text-xs xsm:px-2 xsm:py-2 xsm:text-black xsm:font-bold xsm:mt-[18.5px]"
              onClick={handleSubmit}
            >
              {loading ? <Spinner /> : t("Submit")}
            </button>
            <button
              className="rounded-full w-[10px] h-[10px] p-4 bg-black text-primary mt-[16.03px] font-bold flex  justify-center items-center"
              disabled={loading}
              onClick={() => navigate(-1)}
            >
              &lt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
