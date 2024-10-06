/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { VolunteersPayload } from "../../interfaces/AuthInterface";
import { media } from "../../assets";

export const ConfirmSchedulingDetails = () => {
  const { state } = useLocation();
  const [assignedVolunteers, setAssignedVolunteers] =
    useState<VolunteersPayload[]>();

  const getAssignedVolunteerDetails = useCallback(() => {
    const selectedIds = state?.volunteers.filter((volunteer: { id: any }) =>
      state?.scheduleVolunteerIds?.includes(volunteer.id)
    );
    setAssignedVolunteers(selectedIds);
  }, [state, setAssignedVolunteers]);

  useEffect(() => {
    getAssignedVolunteerDetails();
  }, [getAssignedVolunteerDetails]);

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
              {state?.taskName}
            </p>
          </div>
          <div className="h-auto mb-[20px]">
            <h3 className="font-[500] text-[20px] leading-[24.2px] mb-[18px]">
              Task Description
            </h3>
            <p className="font-[400] leading-[24.2px] text-[20px]">
              {state?.description}
            </p>
          </div>
          <div className="">
            <h3 className="font-[500] text-[20px] leading-[24.2px] mb-[19px]">
              Note
            </h3>
            <p className="font-[400] leading-[24.2px] text-[20px]">
              {state?.notes}
            </p>
          </div>
        </div>
        <div className="w-[374px] h-[820px] rounded-[20px] bg-schedule-details pt-[44px] pl-[42px]">
          <h2 className="text-[25px] font-[600] leading-[30.26px]">
            Assigned Volunteers
          </h2>
          <div className="flex flex-col items-start">{assignedVolunteers?.map((volunteer: VolunteersPayload) => (
            <div className="flex items-center">
                {
                    volunteer?.profilePicture ? 
                    <img src={volunteer.profilePicture} alt="profile"  className="w-[53px] h-[53px]"/>
                    :
                    <img src={media.upload} alt="profile" className="w-[53px] h-[53px]"/>
                }
                <div>
                    <p>{volunteer?.firstName} {volunteer?.lastName}</p>
                </div>
            </div>
          ))}</div>
        </div>
      </div>
    </div>
  );
};
