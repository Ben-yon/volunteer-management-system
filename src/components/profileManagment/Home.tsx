/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import { media } from "../../assets";
import { CustomPieChart } from "../../widgets/CustomPieChart";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../features/store";
import { useCallback, useEffect, useState } from "react";
import { VolunteerRegisterPayload } from "../../interfaces/AuthInterface";
import { Value } from "../../interfaces/CalendarTypes";

import {
  getUpcomingPrograms,
  newVolunteerSincePreviousMonth,
  numberOfAdminsSincePreviousMonth,
  totalNumberOfVolunteers,
  volunteersNotMoreThanAWeek,
  usersAvailableOnline,
} from "../../features/dashboard/dashboardAction";
import {
  getCurrentMonthName,
  getPreviousMonthName,
} from "../../utils/specificMonth";
import { ProgramInterface } from "../../interfaces/ProgramsInterface";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const {
    success,
    volunteersAWeekOld,
    totalNumberVolunteers,
    numberOfAdminsPreviousMonth,
    newVolunteersPreviousMonth,
    upcomingPrograms,
    usersOnline,
  } = useSelector((state: RootState) => state.dashboardSlice);
  // const [volunteersWithinAWeek, setVolunteersWithinAWeek] =
  //   useState<VolunteerRegisterPayload[]>();
  const [totalVolunteers, setTotalVolunteers] = useState(null);
  const [adminsSincePreviousMonth, setAdminsSincePreviousMonth] =
    useState(null);
  const [newVolunteers, setNewVolunteers] =
    useState<VolunteerRegisterPayload[]>();
  const [upcomingProgramList, setUpcomingProgramList] =
    useState<ProgramInterface[]>();

  const [onlineUsers, setOnlineUsers] = useState<VolunteerRegisterPayload[]>(
    []
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Calculate total pages
  const totalPages = Math.ceil(onlineUsers.length / itemsPerPage);

  // Get the users to be displayed on the current page
  const paginatedUsers = onlineUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const navigate = useNavigate();

  const sendVolunteerMessage = () => {
    navigate("messages", { state: { userId: onlineUsers } });
  };

  const previousMonth = getPreviousMonthName();
  const currentMonth = getCurrentMonthName();

  const dashboardDetails = useCallback(() => {
    dispatch(volunteersNotMoreThanAWeek());
    dispatch(totalNumberOfVolunteers());
    dispatch(numberOfAdminsSincePreviousMonth());
    dispatch(newVolunteerSincePreviousMonth());
    dispatch(getUpcomingPrograms());
    dispatch(usersAvailableOnline());
  }, [dispatch]);

  useEffect(() => {
    dashboardDetails();
  }, [dashboardDetails]);

  useEffect(() => {
    if (success) {
      // setVolunteersWithinAWeek(volunteersAWeekOld);
      setTotalVolunteers(totalNumberVolunteers);
      setAdminsSincePreviousMonth(numberOfAdminsPreviousMonth);
      setNewVolunteers(newVolunteersPreviousMonth);
      setUpcomingProgramList(upcomingPrograms);
      setOnlineUsers(usersOnline);
    }
  }, [
    newVolunteersPreviousMonth,
    numberOfAdminsPreviousMonth,
    success,
    totalNumberVolunteers,
    upcomingPrograms,
    usersOnline,
    volunteersAWeekOld,
  ]);
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextPage();
    }, 5000);

    return () => clearInterval(interval); // Clear interval on unmount
  }, [currentPage, goToNextPage]);

  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="flex flex-col">
      <p className="text-[#D9D9D9] text-[15px] font-[700] leading-[18.15px]">
        MCSS Volunteers
      </p>
      <h2 className="text-black font-[700] text-[27px] leading-[32.68px] pb-6">
        Home
      </h2>
      <div className="flex">
        <div className="flex flex-col">
          <div className="flex justify-normal items-center w-[757px] h-[106px] rounded-[20px] bg-admin-secondary dashboard-shadow">
            <div className="flex items-center justify-center space-x-1 ml-[34px] mr-[13px]">
              <p className="text-primary w-auto h-[36px] font-[700] text-[35px] leading-[42.36px]">
                {adminsSincePreviousMonth}
              </p>
              <div className="flex flex-col text-primary">
                <p className="font-[700] text-[12px] leading-[14.52px] w-[57px] h-[20px]">
                  Admins
                </p>
                <p className="font-[500] text-[10px] leading-[12.1px] w-auto">
                  Since {previousMonth}
                </p>
              </div>
            </div>
            <div className="divider"></div>
            <div className="flex items-center justify-center w-[171px] h-[41px] space-x-1 ml-[26px] mr-[23px]">
              <p className="text-primary w-auto h-[36px] font-[700] text-[35px] leading-[42.36px]">
                {totalVolunteers}
              </p>
              <div className="flex flex-col text-primary">
                <p className="font-[700] text-[12px] leading-[14.52px] w-[101px] h-[20px]">
                  Total Voluteers
                </p>
                <p className="font-[500] text-[10px] leading-[12.1px] w-auto">
                  Since {previousMonth}
                </p>
              </div>
            </div>
            <div className="divider"></div>
            <div className="flex items-center justify-center space-x-1 ml-[23px] mr-[9px]">
              <p className="text-primary w-auto h-[36px] font-[700] text-[35px] leading-[42.36px]">
                {newVolunteers?.length}
              </p>
              <div className="flex flex-col text-primary">
                <p className="font-[700] text-[12px] leading-[14.52px] w-auto h-[20px]">
                  New Volunteers
                </p>
                <p className="font-[500] text-[10px] leading-[12.1px] w-auto">
                  Since {previousMonth}
                </p>
              </div>
            </div>
            <div className="divider"></div>
            <div className="flex items-center justify-center space-x-1 ml-[26px] mr-[37px]">
              <p className="text-primary w-auto h-[36px] font-[700] text-[35px] leading-[42.36px]">
                {upcomingProgramList?.length}
              </p>
              <div className="flex flex-col text-primary">
                <p className="font-[700] text-[12px] leading-[14.52px] w-auto h-[20px]">
                  Upcoming events
                </p>
                <p className="font-[500] text-[10px] leading-[12.1px] w-auto mt-0">
                  in {currentMonth}
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center justify-center space-y-3 w-[425px] h-[248px] rounded-[20px] bg-admin-secondary dashboard-shadow mt-[24px]">
              <div className="flex items-center justify-center">
                <img
                  src={`${media.sample03}`}
                  alt=""
                  className="w-[135.69px] h-[135.69px] rounded-full object-cover ml-8"
                />
                <img
                  src={`${media.sample02}`}
                  alt=""
                  className="w-[135.69px] h-[135.69px] rounded-full object-cover relative -left-6"
                />
                <img
                  src={`${media.sample01}`}
                  alt=""
                  className="w-[135.69px] h-[135.69px] rounded-full object-cover relative -left-12"
                />
              </div>
              <p className="font-[700] text-[25px] text-primary leading-[30.26px]">
                New Volunteers
              </p>
            </div>
            <div className="w-[301px] h-[248px] rounded-[20px] bg-admin-secondary dashboard-shadow mt-[24px] ml-[24px]">
              <CustomPieChart />
              <p className="text-primary font-[700] text-[15px] leading-[18.15px] relative -top-[25px] left-[80px]">
                Active Volunteers
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-[486px] h-[379px] rounded-[20px] bg-[#F9F9F9] home-chat-shadow ml-[26px]">
          <div className="ml-[67px] mt-[34px]">
            <h2 className="text-admin-secondary text-[15px] font-[700] leading-[18.15px]">
              New Messages
            </h2>
            <div className="flex items-center justify-center mt-[25px]">
              <img
                src={`${media.slide2}`}
                alt="avatar"
                className="w-[38px] h-[38px] rounded-full mr-[16px]"
              />
              <div className="mr-[182px]">
                <p className="text-admin-secondary font-[600] text-[13px] leading-[15.73px]">
                  Elijah Tetteh
                </p>
                <span className="italic text-[9px] leading-[10.89px]">
                  typing
                </span>
              </div>
              <div className="flex flex-col space-y-1">
                <p className="text-admin-secondary font-[500] text-[9px] leading-[10.89px] ">
                  08:30 AM
                </p>
                <span className="text-primary ml-[30px] flex items-center justify-center bg-admin-secondary w-[10px] h-[10px] text-[6px] leading-[7.26px] font-[500] rounded-full">
                  2
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center mt-[25px]">
              <img
                src={`${media.sample01}`}
                alt="avatar"
                className="w-[38px] h-[38px] rounded-full mr-[16px]"
              />
              <div className="mr-[182px]">
                <p className="text-admin-secondary font-[600] text-[13px] leading-[15.73px]">
                  Gabriel Carter
                </p>
                <span className="italic text-[9px] leading-[10.89px]">
                  typing
                </span>
              </div>
              <div className="flex flex-col space-y-1">
                <p className="text-admin-secondary font-[500] text-[9px] leading-[10.89px] ">
                  12:30 PM
                </p>
                <span className="text-primary ml-[30px] flex items-center justify-center bg-admin-secondary w-[10px] h-[10px] text-[6px] leading-[7.26px] font-[500] rounded-full">
                  1
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center mt-[25px]">
              <img
                src={`${media.sample02}`}
                alt="avatar"
                className="w-[38px] h-[38px] rounded-full mr-[16px]"
              />
              <div className="mr-[182px]">
                <p className="text-admin-secondary font-[600] text-[13px] leading-[15.73px]">
                  Gabriel Carter
                </p>
                <span className="italic text-[9px] leading-[10.89px]">
                  typing
                </span>
              </div>
              <div className="flex flex-col space-y-1">
                <p className="text-admin-secondary font-[500] text-[9px] leading-[10.89px] ">
                  02:30 PM
                </p>
                <span className="text-primary ml-[30px] flex items-center justify-center bg-admin-secondary w-[10px] h-[10px] text-[6px] leading-[7.26px] font-[500] rounded-full">
                  2
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center mt-[25px]">
              <img
                src={`${media.sample03}`}
                alt="avatar"
                className="w-[38px] h-[38px] rounded-full mr-[16px]"
              />
              <div className="mr-[182px]">
                <p className="text-admin-secondary font-[600] text-[13px] leading-[15.73px]">
                  Lucas Martin
                </p>
                <span className="italic text-[9px] leading-[10.89px]">
                  typing
                </span>
              </div>
              <div className="flex flex-col space-y-1">
                <p className="text-admin-secondary font-[500] text-[9px] leading-[10.89px] ">
                  07:00 PM
                </p>
                <span className="text-primary ml-[30px] flex items-center justify-center bg-admin-secondary w-[10px] h-[10px] text-[6px] leading-[7.26px] font-[500] rounded-full">
                  2
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-[24px] space-x-[24px]">
        <div className="">
          <Calendar
            onChange={onChange}
            value={value}
            className="w-[433px] h-[431px]"
          />
          <button className="w-[311px] h-[45px] bg-[#C8A379] rounded-[12px] relative -top-[72px] left-[55px]">
            {
              upcomingProgramList?.length === 0 && <p className="text-primary font-[500] text-[15px] leading-[32.4px]">There are no upcoming events</p>
            }
          </button>
        </div>
        <div className="w-[813px] h-[431px] bg-admin-secondary dashboard-shadow  rounded-[20px] flex flex-col">
          <h2 className="capitalize text-primary text-center font-[700] text-[20px] leading-[24.2px] mt-[20px]">
            Available on site
          </h2>
          <div className="columns-2 mt-[15px] ">
            <div className="flex flex-col justify-center items-center  space-y-1">
              {paginatedUsers.map((onlineUser) => (
                <div className="flex w-[348px] h-[49px] rounded-[5px] bg-primary bg-opacity-[70%]">
                  {onlineUser?.profilePicture ? (
                    <img
                      src={onlineUser?.profilePicture}
                      alt=""
                      className="w-[28.09px] h-[29.43px] rounded-full ml-[13.44px] mr-[18.45px] mt-[10.14px]"
                    />
                  ) : (
                    <img
                      src={media.sample01}
                      alt=""
                      className="w-[28.09px] h-[29.43px] rounded-full ml-[13.44px] mr-[18.45px] mt-[10.14px]"
                    />
                  )}
                  <div className="flex flex-col justify-center">
                    <h2 className="text-[13px]font-[700] leading-[15.73px]">
                      {onlineUser.firstName} {onlineUser.lastName}
                    </h2>
                    <p className="w-[141px] h-[10px] font-[400] text-[8px] leading-[9.68px]">
                      {onlineUser.skills}
                    </p>
                  </div>
                  <div
                    className="flex flex-col items-center justify-center w-[19px] h-[19px] relative -right-[100px] top-[12px] bg-primary p-[10px] rounded-full"
                    onClick={sendVolunteerMessage}
                  >
                    <img
                      src={`${media.chat_red}`}
                      alt="chat_icon"
                      className="absolute top-[7px] w-[9.17px] h-[9.2px]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center mt-[10px] space-x-[5px] absolute top-[48] right-[390px] bottom-[85px]">
            {Array.from({ length: totalPages }).map((_, index) => (
              <div
                key={index}
                className={`w-[8px] h-[8px] rounded-full ${
                  currentPage === index + 1 ? "bg-primary" : "bg-gray-100 bg-opacity-15"
                }`}
                onClick={() => setCurrentPage(index + 1)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
