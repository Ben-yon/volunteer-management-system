/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../features/store";
import { useEffect } from "react";

export const ViewProgram: React.FC = () => {
  const { id } = useParams();
  const { programInfo } = useSelector(
    (state: RootState) => state.programsSlice
  );

  const navigate = useNavigate();
  
  const schedule = () => {
    navigate("/profile-management/scheduling");
  }

  useEffect(() => {
    localStorage.setItem('activeLink', 'scheduling')
  }, [])

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-expect-error
  const program = programInfo.find((program: any) => program.id === id);

  return (
    <div className="flex flex-col justify-center">
      <p className="text-[#D9D9D9] text-[15px] font-[700] leading-[18.15px]">
        MCSS Volunteers
      </p>
      <h2 className="text-black font-[700] text-[27px] leading-[32.68px] pb-6">
        Programs
      </h2>
      <div className="flex space-x-[48px]">
        <div className="flex">
          <img
            src={program.programmeImages[0].image}
            alt="Image"
            className="h-[840px] w-[490px] rounded-[29px] object-fit"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="font-[500] text-[45px] leading-[54.46px] w-auto ">
            {program?.name}
          </h2>
          <p>{program.description}</p>
          <button
            className="w-[332px] h-[75px] rounded-[27px] bg-black text-primary text-[25px] font-[500] leading-[30.26px] mt-[50px] justify-end"
            onClick={() => schedule() }
          >
            Schedule for Program
          </button>
        </div>
      </div>
    </div>
  );
};
