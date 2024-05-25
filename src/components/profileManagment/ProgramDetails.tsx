/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { RootState } from "../../features/store";
import { Spinner } from "../../widgets/Spinner";
import { createProgram } from "../../features/programs/createProgramAction";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { extractBase64 } from "../../utils/imageConverter";

export const ProgramDetails: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const values = state?.values;
  const thumbnail = state?.thumbnail?.current;
  const descriptionImage = state?.descriptionImage?.current;

  const [programImages] = useState([]);

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const { loading, error, success, programInfo } = useSelector(
    (state: RootState) => state.createProgramSlice
  );

  const formData = new FormData();
  const submit = () => {
    formData.append("Name", values?.name);
    formData.append("Description", values?.description);
    programImages.forEach(async (_image: any, index: any) => {
      formData.append(
        `ProgrammeImages[${index}].ImageFile`,
        extractBase64(thumbnail)
      );
      formData.append(
        `ProgrammeImages[${index}].Description`,
        extractBase64(descriptionImage)
      );
    });
    dispatch(createProgram(formData));
    console.log(typeof extractBase64(thumbnail));
    if (success) {
      console.log(programInfo);
      navigate("/profile-management/programs/");
    }
    if (error) {
      console.log(state?.thumbnail);
    }
  };

  return (
    <div className="flex flex-col justify-center">
      <p className="text-[#D9D9D9] text-[15px] font-[700] leading-[18.15px]">
        MCSS Volunteers
      </p>
      <h2 className="text-black font-[700] text-[27px] leading-[32.68px] pb-6">
        Programs
      </h2>
      <h2 className="font-[700] text-[48.16px] leading-[58.29px] text-black">
        Overview
      </h2>
      <div className="flex items-center justify-center mt-[28px] space-x-[52px]">
        <img
          src={`${thumbnail}`}
          alt="thumbnail"
          className="w-[308px] h-[528px] rounded-[30px] object-fill"
        />
        <div className="flex flex-col justify-center">
          <h2 className="font-[500] text-[45px] leading-[54.46px] w-auto ">
            {values?.name}
          </h2>
          <p className="font-[500] text-[25px] leading-[30.26px] mt-[6px] w-[628px] h-[280px]">
            {values?.description}
          </p>
        </div>
      </div>
      <div className="flex space-x-[28px] mt-[25px] justify-end">
        <button
          className="w-[181.95px] h-[68.5px] bg-black text-primary text-[30px] leading-[36.31px] rounded-[21.41px]"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
        <button
          className="w-[181.95px] h-[68.5px] bg-admin-secondary text-primary text-[30px] leading-[36.31px] rounded-[21.41px]"
          onClick={() => submit()}
        >
          {loading ? <Spinner /> : "Submit"}
        </button>
      </div>
    </div>
  );
};
