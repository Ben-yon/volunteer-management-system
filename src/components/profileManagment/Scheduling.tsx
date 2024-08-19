import { media } from "../../assets";
import { AdminCalendar } from "../../widgets/Calendar";
import { useNavigate } from "react-router-dom";

export const Scheduling = () => {
  const navigate = useNavigate();
  const addSchedule = () => {
    navigate("/profile-management/add-schedule");
  };

  return (
    <div className="flex flex-col">
      <p className="text-[#D9D9D9] text-[15px] font-[700] leading-[18.15px]">
        MCSS Scheduling
      </p>
      <h2 className="text-black font-[700] text-[27px] leading-[32.68px] pb-6">
        Scheduling
      </h2>
      <div className="flex space-x-[26px] mb-[22px]">
        <div className="w-[776px] h-[490px] rounded-[21.2px] bg-image-card bg-opacity-[30%] flex flex-col pl-[32px]">
          <div className="mt-[28px] flex items-stretch justify-between">
            <div className="flex items-stretch space-x-[12px]">
              <div className="w-[35px] h-[35px] bg-image-card rounded-full flex items-center justify-center">
                <img
                  src={media.calendar}
                  alt=""
                  className="w-[21px] h-[21px] "
                />
              </div>
              <p className="text-[18px] font-[600] leading-[21.78px] flex items-center justify-center ">
                Today Tasks
              </p>
            </div>
            <div className="flex">
              <button
                className="bg-admin-secondary w-[101px] h-[31px] rounded-[11px] mr-[30px] flex items-center justify-center"
                onClick={() => addSchedule()}
              >
                <span className="text-primary text-[12px] leading-[14.52px] font-[600]">
                  Add Task
                </span>
                <img src={media.add_task} alt="" />
              </button>
            </div>
          </div>
          <div className="flex mt-[29px]">
            <div className="w-[239px] h-[161px] rounded-[21.2px] shadow-mid bg-primary pt-[21px] pl-[21px]">
              <h2 className="font-[400] text-[12px] leading-[14.52px] mb-[6px]">
                Admin Cordination{" "}
              </h2>
              <p className="w-[183px] h-[49px] font-[400] text-[9px] leading-[10.89px] text-justify">
                All necessary permissions are secured, and resources are
                confirmed available for the workshop.
              </p>
              <label htmlFor="">
              <progress
                value={60}
                max={100}
                className="w-[193px] h-[14.43px] rounded-[6px] rounded-b-[6px] bg-brown"
              ></progress>
              </label>
            </div>
          </div>
        </div>
        <div className="">
          <AdminCalendar width={459} height={450} />
        </div>
      </div>
      <div className="w-[1268px] h-[308px] bg-image-card bg-opacity-40 rounded-[21.1px]">
        <div className="mt-[30px] ml-[41px]">
          <div className="flex items-stretch space-x-[12px]">
            <img
              src={media.completed_task}
              alt=""
              className="w-[21px] h-[21px] "
            />
            <p className="text-[18px] font-[600] leading-[21.78px] flex items-center justify-center ">
              Completed Tasks
            </p>
          </div>
          <div className="flex mt-[29px]">
            <div className="w-[239px] h-[161px] rounded-[21.2px] shadow-mid bg-primary pt-[21px] pl-[21px]">
              <h2 className="font-[400] text-[12px] leading-[14.52px] mb-[6px]">
                Admin Cordination{" "}
              </h2>
              <p className="w-[183px] h-[49px] font-[400] text-[9px] leading-[10.89px] text-justify">
                All necessary permissions are secured, and resources are
                confirmed available for the workshop.
              </p>
              <label htmlFor="">
              <progress
                value={60}
                max={100}
                className="w-[193px] h-[14.43px] rounded-[6px] rounded-b-[6px] bg-brown"
              ></progress>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
