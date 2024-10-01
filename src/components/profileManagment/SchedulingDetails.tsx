import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../features/store";
import { useEffect, useState } from "react";
import { Task } from "../../interfaces/TaskScheduleInterface";

export const SchedulingDetails = () => {
  const { id } = useParams();

  const { tasks } = useSelector((state: RootState) => state.getTasksSlice);
  const [ taskDetails, setTaskDetails ] = useState<Task>()
  

  useEffect(() => {
    const scheduledTask = tasks.find((task) =>  task?.id == id);
    setTaskDetails(scheduledTask)
  }, [id, taskDetails, tasks])

  return (
    <div className="flex flex-col">
      <p className="text-[#D9D9D9] text-[15px] font-[700] leading-[18.15px]">
        MCSS Scheduling
      </p>
      <h2 className="text-black font-[700] text-[27px] leading-[32.68px] pb-6">
        Scheduling
      </h2>
      <div className="flex items-center justify-center space-x-[29px]">
        <div className="w-[535px] h-[822px] rounded-[21.2px] bg-schedule-details pt-[42px] pl-[41px]">
          <div className="mb-[20px]">
            <h2 className="font-[400] text-[20px] leading-[24.2px]">
              Task Name
            </h2>
            <p className="font-[500] text-[25px] leading-[30.26px]">
              {taskDetails?.name}
            </p>
          </div>
          <div className="h-auto mb-[20px]">
            <h3 className="font-[500] text-[20px] leading-[24.2px] mb-[18px]">
              Task Description
            </h3>
            <p className="font-[400] leading-[24.2px] text-[20px]">
              {taskDetails?.description}
            </p>
          </div>
          <div className="">
            <h3 className="font-[500] text-[20px] leading-[24.2px] mb-[19px]">Note</h3>
            <p className="font-[400] leading-[24.2px] text-[20px]">{taskDetails?.notes}</p>
          </div>
        </div>
        <div className="w-[688px] h-[820px] rounded-[20px] bg-schedule-details pl-[33px] pt-[49px]">
            <div>
                <h1 className="font-[600] text-[25px] leading-[30.26px]">Assigned Volunteers</h1>
                <div>
                    {}
                </div>
            </div>
            <div></div>
        </div>
      </div>
    </div>
  );
};
