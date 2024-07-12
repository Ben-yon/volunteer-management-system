import { media } from "../../assets";

export const Admins = () => {
  return (
    <>
      <div className="flex  flex-col justify-center">
        <p className="text-[#D9D9D9] text-[15px] font-extrabold leading-[18.15px]">
          MCSS Admins
        </p>
        <h2 className="text-black font-extrabold text-[27px] leading-[32.68px] pb-6">
          Admins
        </h2>
      </div>
      <div className="flex flex-col space-y-[63px]">
        <div className="flex space-x-[23px] relative -left-6">
          <div className="flex">
            <img
              src={media.search}
              alt=""
              className="relative left-[43px] top-[2px]"
            />
            <input
              type="text"
              className="w-[329px] h-[43px] rounded-[13px] border-[0.5px] leading-[14.52px] text-[12px]  pl-[48px] focus:outline-none admins-shadow"
              placeholder="Search by name, email, team, etc"
            />
          </div>
          <select
            name=""
            id=""
            className="cutom-select w-[142px] h-[43px] border-[0.5px] rounded-[13px] text-gray-300 text-[12px] leading-[14.25px] pl-[18px] focus:outline-none admins-shadow"
          >
            <option value="" disabled>
              Position
            </option>
          </select>
        </div>
        <div className="flex flex-wrap flex-1">
            <div className="w-[227px] h-[264px] rounded-[22.62px] bg-image-card opacity-[29%] message-box-shadow">
                
            </div>
        </div>
      </div>
    </>
  );
};
