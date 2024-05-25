import { useNavigate } from "react-router-dom";
import { media } from "../../assets";

export const Programs = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <p className="text-[#D9D9D9] text-[15px] font-[700] leading-[18.15px]">
        MCSS Volunteers
      </p>
      <h2 className="text-black font-[700] text-[27px] leading-[32.68px] pb-6">
        Programs
      </h2>
      <div>
        <div className="w-[1244px] h-[840px] border-[0.5px] rounded-[39px] programs-gradient grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {/* {programs.map((program) => {
            <div key={program} className="h-[310px] w-[310px] rounded-[53px]">
              <img src={`${program?.programImages[0]?.name}`} alt="Thumbnail"/>
              <button>{ program?.name }</button>
            </div>
          })} */}
          <div
            className="flex flex-col items-center justify-center w-[199px] h-[199px] rounded-full bg-black hover:cursor-pointer relative top-6 left-6"
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
