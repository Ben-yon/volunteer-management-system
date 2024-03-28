import { useParams } from "react-router-dom";
import data from "./../../utils/MOCK_DATA.json";
import { useEffect, useState } from "react";
import { TableData } from "../../interfaces/TablePropsInterface";
import { media } from "../../assets";
import { useNavigate } from "react-router-dom";

import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";

export const VolunteerDetails = () => {
  const [userDetails, setUserDetails] = useState<TableData | undefined>({
    id: 0,
    fullname: "",
    jobTitle: "",
    date_of_birth: "",
    address: "",
    interests: "",
    days_available_per_week: 0,
    availability: "",
    skills: ""
  });
  const { id } = useParams();
  const navigate = useNavigate()

  const userDetailsSet = data;
  const daysOfWeek = [
    { name: "Sunday", worked: 0 },
    { name: "Monday", worked: 5 },
    { name: "Tuesday", worked: 7 },
    { name: "Wednesday", worked: 2 },
    { name: "Thursday", worked: 4 },
    { name: "Friday", worked: 0 },
    { name: "Saturday", worked: 4 },
  ];

  useEffect(() => {
    let convertedId = parseInt(id!);
    const user = userDetailsSet.find((user) => user.id == convertedId);
    console.log(user);
    setUserDetails(user);
  }, [userDetailsSet, id]);

  console.log(id);
  return (
    <div className="block center">
      <p className="text-[#D9D9D9] text-[15px] font-extrabold leading-[18.15px]">
        MCSS Volunteers
      </p>
      <h2 className="flex text-black font-extrabold text-[27px] leading-[32.68px] pb-6">
        {userDetails?.fullname}
        <button onClick={() =>  navigate('/profile-management/inbox')}>
          <img src={`${media.chat}`} className="w-[33px] h-[33px] ml-[8px]" />
        </button>
      </h2>
      <div className="flex">
        <div className="w-[776px] h-[572px] rounded-[20px] details-card relative">
          <span className="text-[10px] flex ml-[33px] relative top-[22px] left-[33px]">
            <img
              src={media.birthday}
              alt=""
              className="mr-[2.12px] -mt-[2px]"
            />
            {userDetails?.date_of_birth}
          </span>
          <p className="text-[35px] absolute right-[60px] top-[0px] hover:cursor-pointer">
            ...
          </p>
          <div className="flex items-center justify-center space-x-[76px] relative top-[142px]">
            <img
              src={media.upload}
              alt="profile"
              className="w-[218px] h-[218px]"
            />
            <div>
              <p className="text-[34.4px] leading-[41.63px] font-[700] mt-[28px]">
                {userDetails?.fullname}
              </p>
              <p className="text-[16.5px] leading-[19.98px] font-[700] mt-[8px]">
                {userDetails?.jobTitle}
              </p>
              <p className="text-[16.5px] leading-[19.98px] font-[400] mt-[8px]">
                {userDetails?.skills}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col relative top-12 ml-[63px]">
          <div className="w-[374px] h-[213px] rounded-[20px] mb-[30px] flex flex-col items-center justify-center details-availability-card">
            <h2 className="text-[16px] leading-[19.36px] font-bold -ml-48 mb-4">
              Availability
            </h2>
            <label className="relative">
              <progress
                value={userDetails!.days_available_per_week / 10}
                max={0.7}
                className="w-[290.56px] h-[48.43px] rounded-t-[6px] rounded-b-[6px] bg-red-300"
              ></progress>
              <p className="absolute top-[12px] left-[18px] text-primary">
                {userDetails?.days_available_per_week} Days
              </p>
            </label>
            <p className="text-[12px] leading-[14.52px] mt-[10.57px] font-bold">
              Out of a week
            </p>
          </div>
          <div className="w-[374px] h-[237px] rounded-[20px] details-availability-card">
            <div></div>
            <ResponsiveContainer>
              <BarChart
                width={150}
                data={daysOfWeek}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                style={{ stroke: "#fff", strokeWidth: 10 }}
              >
                <XAxis
                  stroke="#E80000B2"
                  tick={false}
                  padding="no-gap"
                  style={{ borderRadius: "10px" }}
                />
                <Bar dataKey="worked" fill="#E80000" />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-[12px] leading-[14.52px] mt-[10.57px] text-secondary font-bold relative -top-[38px] text-center">
              Out of a week
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[35px] flex items-center space-x-5">
      <div className="flex flex-col space-y-4 w-[248px] h-[237px] rounded-[20px] justify-center items-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_60px_-18px_rgba(0,0,0.1,0.5)]">
          <div className="bg-black rounded-full p-4">
            <img src={media.skills} alt="" className="w-[57px] h-[57px]" />
          </div>
          <p className="text-black flex flex-col text-[12px] text-center leading-[14.52px]">
            <span className="font-bold ">Skills</span>
            <span>{userDetails?.skills}</span>
          </p>
        </div>
        <div className="flex flex-col space-y-4 w-[248px] h-[237px] rounded-[20px] justify-center items-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_60px_-18px_rgba(0,0,0.1,0.5)]">
          <div className="bg-black rounded-full p-4">
            <img src={media.bookLove} alt="" className="w-[57px] h-[57px]" />
          </div>
          <p className="text-black flex flex-col text-[12px] text-center leading-[14.52px]">
            <span className="font-bold ">Interests</span>
            <span>{userDetails?.interests}</span>
          </p>
        </div>
        <div className="flex flex-col space-y-4 w-[248px] h-[237px] rounded-[20px] justify-center items-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_60px_-18px_rgba(0,0,0.1,0.5)]">
          <div className="bg-black rounded-full p-4">
            <img src={media.location} alt="" className="w-[68px] h-[68px]" />
          </div>
          <div className="text-black flex flex-col items-center">
            <h2 className="font-bold text-[12px]">Location</h2>
            <span className="text-[12px]">{userDetails?.address}</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center space-x-[14px]">
            <div className="bg-[#EA0000] rounded-full p-[11px]">
              <img src={`${media.phone}`} />
            </div>
              <p className="w-[259px] h-[37px] rounded-[17px] bg-[#E6E6E6] pl-[24px] pt-[10px] pb-[6px] text-[13px] leading-[16.73px] font-[700]">
                knsdklfjakdj
              </p>
          </div>
          <div className="flex justify-center items-center space-x-[14px] mt-[10px]">
            <div className="bg-[#EA0000] rounded-full p-[11px]">
              <img src={`${media.envelope}`} className="w-[24px] h-[24px]"/>
            </div>
              <p className="w-[259px] h-[37px] rounded-[17px] bg-[#E6E6E6] pl-[24px] pt-[10px] pb-[6px] text-[13px] leading-[16.73px] font-[700]">
                knsdklfjakdj
              </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};
