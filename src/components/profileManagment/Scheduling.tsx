import { AdminCalendar } from "../../widgets/Calendar";

export const Scheduling = () => {
  return (
    <div className="flex flex-col">
      <p className="text-[#D9D9D9] text-[15px] font-[700] leading-[18.15px]">
        MCSS Scheduling
      </p>
      <h2 className="text-black font-[700] text-[27px] leading-[32.68px] pb-6">
        Scheduling
      </h2>
      <div className="flex space-x-[26px] mb-[22px]">
          <div className="w-[776px] h-[490px] rounded-[21.2px] bg-image-card bg-opacity-[30%]"></div>
          <div className="h-[490px]">
            <AdminCalendar/>
          </div>
        </div>
        <div className="w-[1268px] h-[308px] bg-image-card bg-opacity-40 rounded-[21.1px]">

        </div>
    </div>
  );
};
