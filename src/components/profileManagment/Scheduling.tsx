/* eslint-disable @typescript-eslint/no-explicit-any */
import { media } from "../../assets";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../widgets/ProgessBar";
import Calendar from "react-calendar";
import { Value } from "../../interfaces/CalendarTypes";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { Task } from "../../interfaces/TaskScheduleInterface";
import { getTasks } from "../../features/task/taskActions";
import { toast, ToastContainer } from "react-toastify";


export const Scheduling = () => {
  const navigate = useNavigate();

  const { success, tasks, loading, error } = useSelector((state: RootState) => state.getTasksSlice);

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const [ allTasks, setAllTasks ] = useState<Array<Task>>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;


  const handleNext = () => {
    if ((currentPage + 1) * itemsPerPage < allTasks.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = currentPage * itemsPerPage;
  const currentTasks = allTasks.slice(startIndex, startIndex + itemsPerPage);



  const getAllTasks = useCallback(() => {
    dispatch(getTasks())
  }, [dispatch])

  useEffect(() => {
    getAllTasks();
  }, [getAllTasks])

  useEffect(() => {
    if(success){
      setAllTasks(tasks);
    }
  }, [success, tasks]);

  useEffect(() => {
    if(error){
      toast.error(error);
    }
  });

  useEffect(() => {
    if(loading) {
      toast.success("Task loading...")
    }
  });

  const addSchedule = () => {
    navigate("/profile-management/add-schedule");
  };

  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="flex flex-col">
      <p className="text-[#D9D9D9] text-[15px] font-[700] leading-[18.15px]">
        MCSS Scheduling
      </p>
      <h2 className="text-black font-[700] text-[27px] leading-[32.68px] pb-6">
        Scheduling
      </h2>
      <div className="relative flex space-x-[26px] mb-[22px]">
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
          <div className="flex flex-wrap space-x-2 space-y-2 mt-[29px]">
            {currentTasks.map((task) => (
              <div className="w-[239px] h-[161px] rounded-[21.2px] shadow-mid bg-primary pt-[21px] pl-[21px]">
                <h2 className="font-[400] text-[12px] leading-[14.52px] mb-[6px]">
                  {task.name}
                </h2>
                <p className="w-[183px] h-[49px] font-[400] text-[9px] leading-[10.89px] text-justify">
                  {task.description}
                </p>
                <label htmlFor="">
                  <label htmlFor="">
                    <ProgressBar
                      progress={70}
                      maxValue={100}
                      color="bg-admin-secondary"
                      width="w-[193px]"
                      height="h-[14px]"
                    />
                  </label>
                </label>
              </div>
            ))}
          </div>
          <div className="absolute top-[440px] left-[670px]">
            <button
              onClick={handlePrevious}
              className=""
              disabled={currentPage === 0}
            >
                <img src={media.previous_red} alt="" />
            </button>
            <button onClick={handleNext}>
              {startIndex + itemsPerPage >= allTasks?.length ? (
                <img
                  src={media.next_red}
                  alt=""
                  className="w-[25px] h-[25px]"
                />
              ) : (
                <img
                  src={media.next_red}
                  alt=""
                  className="w-[25px] h-[25px]"
                />
              )}
            </button>
          </div>
        </div>
        <div className="">
          <Calendar
            onChange={onChange}
            value={value}
            className="w-[459px] h-[486px] align-center"
          />
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
                <ProgressBar
                  progress={100}
                  maxValue={100}
                  color="bg-progressbar-complete"
                  width="w-[193px]"
                  height="h-[14px]"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};
