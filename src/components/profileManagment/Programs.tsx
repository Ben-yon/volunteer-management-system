/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { media } from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useCallback, useEffect, useState } from "react";
import { allPrograms } from "../../features/programs/programsActions";
import { ProgramsPayloadInterface } from "../../interfaces/ProgramsInterface";

export const Programs = () => {
  const navigate = useNavigate();

  const [programs, setPrograms] = useState<ProgramsPayloadInterface[]>([]);

  const { success, error, programInfo } = useSelector(
    (state: RootState) => state.programsSlice
  );

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const fetchPrograms = useCallback(() => {
    dispatch(allPrograms());
  }, [dispatch]);

  useEffect(() => {
    fetchPrograms();
  }, [fetchPrograms]);

  useEffect(() => {
    if (success) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-expect-error
      setPrograms(programInfo);
    } else {
      console.log(error);
    }
  }, [success, programInfo, error]);

  const viewProgramDetails = (id: string) => {
    navigate(`${id}`);
  };

  return (
    <div className="flex flex-col">
      <p className="text-[#D9D9D9] text-[15px] font-[700] leading-[18.15px]">
        MCSS Programs
      </p>
      <h2 className="text-black font-[700] text-[27px] leading-[32.68px] pb-6">
        Programs
      </h2>
      <div>
        <div className="w-[1244px] h-[840px] border-[0.5px] rounded-[39px] programs-gradient grid grid-cols-3 gap-x-2">
          {programs.map((program) => (
            <div className="w-[310px] h-[310px] rounded-[53px] relative top-[89px] left-[45px]" key={program.id}>
              <img
                src={`${program.programmeImages[0]?.image}`}
                alt=""
                className="object-fit opacity-[70%] rounded-[53px]"
              />
              <p
                className="w-[210px] h-[59px] rounded-[20px] bg-primary text-[15px] font-[700] leading-[18.15px] relative -top-[90px] left-12 flex items-center justify-center hover:cursor-pointer"
                onClick={() => viewProgramDetails(program?.id)}
              >
                {program.name}
              </p>
            </div>
          ))}
          <div
            className="flex flex-col items-center justify-center w-[199px] h-[199px] rounded-full bg-black hover:cursor-pointer relative top-[129px] left-[100px]"
            onClick={() => navigate("create")}
          >
            <img
              src={`${media.add}`}
              alt="add icon"
              className="h-[83.43px] w-[83.43px]"
            />
            <p className="text-primary font-[800] text-[11.48px] leading-[13.89px]">
              Add Program
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
