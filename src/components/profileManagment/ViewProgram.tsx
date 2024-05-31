/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../features/store";

export const ViewProgram: React.FC = () => {
  const { id } = useParams();
  const { programInfo } = useSelector(
    (state: RootState) => state.programsSlice
  );

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
      <div className="flex flex-col justify-center">
        <h2 className="font-[500] text-[45px] leading-[54.46px] w-auto ">
          {program?.name}
        </h2>
        <div className="flex">
          <img src={`${program.thumbnail}`} alt="" className="h-[582px]" />
          <div>{program.description}</div>
        </div>
      </div>
    </div>
  );
};
