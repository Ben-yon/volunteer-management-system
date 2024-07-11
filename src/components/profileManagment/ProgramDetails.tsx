/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { RootState } from "../../features/store";
import { Spinner } from "../../widgets/Spinner";
import { createProgram } from "../../features/programs/createProgramAction";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { extractBase64 } from "../../utils/imageConverter";
import { ProgramInterface } from "../../interfaces/ProgramsInterface";
import { useEffect } from "react";

export const ProgramDetails: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const values = state?.values;
  const thumbnail = state?.programImages[0];
  const descriptionImage = state?.programImages[1];

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const { loading, error, success, programInfo } = useSelector(
    (state: RootState) => state.createProgramSlice
  );

  const submit = () => {
    // console.log(programImages)
    const programDetails: ProgramInterface = {
      name: values?.name,
      description: values?.description,
      programmeImages: [
        {
          image: extractBase64(thumbnail),
          description: values?.name + values?.description,
        },
        {
          image: extractBase64(descriptionImage),
          description: values?.name + values?.description,
        },
      ],
    };
    console.log(programDetails)
    dispatch(createProgram(programDetails));
  };

  useEffect(() => {
    if (success) {
      console.log(programInfo);
      navigate("/profile-management/programs/");
    }
    if (error) {
      console.log(state?.thumbnail);
    }
  });

  return (
    <div className="flex flex-col justify-center">
      <p className="text-[#D9D9D9] text-[15px] font-[700] leading-[18.15px]">
        MCSS Volunteers
      </p>
      <h2 className="text-black font-[700] text-[27px] leading-[32.68px] pb-6">
        Programs
      </h2>
      <div className="w-[1244px] h-[840px] border-[0.5px] rounded-[39px] flex flex-col items-center justify-center">
        <h2 className="font-[700] text-[48.16px] leading-[58.29px] text-black relative -left-[380px]">
          Overview
        </h2>
        <div className="flex justify-center mt-[28px] space-x-[52px]">
          <img
            src={`${thumbnail}`}
            alt="thumbnail"
            className="w-[308px] h-[528px] rounded-[30px] object-fill"
          />
          <div className="flex flex-col">
            <h2 className="font-[500] text-[45px] leading-[54.46px] w-auto ">
              {values?.name}
            </h2>
            <p className="font-[500] text-[25px] leading-[30.26px] mt-[6px] w-[628px] h-[280px]">
              {values?.description}
            </p>
          </div>
        </div>
        <div className="flex space-x-[28px] mt-[25px] justify-end relative -right-[350px]">
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
    </div>
  );
};
