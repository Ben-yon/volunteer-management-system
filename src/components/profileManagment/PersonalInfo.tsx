/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { LoginPayload } from "../../interfaces/AuthInterface";
import { updateUser } from "../../features/users/userActions";
import { RootState } from "../../features/store";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { toast, ToastContainer } from "react-toastify";
import { Spinner } from "../../widgets/Spinner";
import 'react-toastify/ReactToastify.css'


export const PersonalInfo = () => {
  const [adminDetails, setAdminDetails] = useState<LoginPayload>();
  const { userInfo, success, error, loading } = useSelector(
    (state: RootState) => state.userSlice
  );

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const userDetails = localStorage.getItem("userInfo");

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    setAdminDetails(JSON.parse(userDetails));
  }, [userDetails]);

  useEffect(() => {
    if (success){

      //@ts-ignore
      setAdminDetails(userInfo)
      toast.success("Admin Profile updated successfully")
    }
    if(error){
      toast.error("Error, Try again!!")
    }
  }, [success, error, userInfo])

  const updateAdminDetails = () => {
    dispatch(
      updateUser({
        id: adminDetails?.id,
        userInfo: {
          firstName: adminDetails?.firstName,
          lastName: adminDetails?.lastName,
          profilePicture: userInfo?.profilePicture,
          email: adminDetails?.email,
          designation: adminDetails?.roles[0]?.name,
          contact: adminDetails?.telephone
        },
      })
    );
  };

  return (
    <>
      <h3 className="w-[232px] h-[32px] text-[20px] font-[600] leading-[24.2px] -tracking-[1px] mt-[46px] ml-[49px] mb-[15px]">
        Personal Information
      </h3>
      <form action="" className="ml-[49px] flex flex-col">
        <div className="flex items-center space-x-[44px] mb-[23px]">
          <div className="flex flex-col">
            <label
              htmlFor="firstName"
              className="text-gray-500 font-[600] text-[17px] leading-[20.57px] h-[32px]"
            >
              First Name
            </label>
            <input
              type="text"
              className="bg-image-card w-[360px] h-[40px] rounded-[8px] focus:outline-none text-[17px] leading-[20.57px] pl-[15px]"
              name="firstName"
              onChange={(e) => e.target.value}
              value={adminDetails?.firstName}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="lastName"
              className="text-gray-500 font-[600] text-[17px] leading-[20.57px] h-[32px]"
            >
              Last Name
            </label>
            <input
              type="text"
              className="bg-image-card w-[360px] h-[40px] rounded-[8px] focus:outline-none text-[17px] leading-[20.57px] pl-[15px]"
              name="lastName"
              onChange={(e) => e.target.value}
              value={adminDetails?.lastName}
            />
          </div>
        </div>
        <div className="flex space-x-[41px] mb-[27px]">
          <div className="flex flex-col">
            <label
              htmlFor=""
              className="text-gray-500 font-[600] text-[17px] leading-[20.57px] h-[32px]"
            >
              Date of Birth
            </label>
            <input
              type="text"
              className="bg-image-card h-[40px] w-[187px] rounded-[8px] focus:outline-none text-[17px] leading-[20.57px] pl-[15px]"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor=""
              className="text-gray-500 font-[600] text-[17px] leading-[20.57px] h-[32px]"
            >
              Gender
            </label>
            <select className="bg-image-card h-[40px] w-[132px] rounded-[8px] focus:outline-none text-[17px] leading-[20.57px] pl-[15px]">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor=""
              className="text-gray-500 font-[600] text-[17px] leading-[20.57px] h-[32px]"
            >
              Role
            </label>
            <select
              name="role"
              className="bg-image-card h-[40px] w-[362px] rounded-[8px] focus:outline-none text-[17px] leading-[20.57px] pl-[15px]"
            >
              <option value="admin">Administrator</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col mb-[34px]">
          <label
            htmlFor="Email"
            className="text-gray-500 font-[600] text-[17px] leading-[20.57px] h-[32px]"
          >
            Email Address
          </label>
          <input
            type="text"
            name="email"
            onChange={(e) => e.target.value}
            value={adminDetails?.email}
            className="bg-image-card h-[40px] w-[764px] rounded-[8px] focus:outline-none text-[17px] leading-[20.57px] pl-[15px]"
          />
        </div>
        <div className="flex flex-col mb-[28px]">
          <label
            htmlFor="Phone Number"
            className="text-gray-500 font-[600] text-[17px] leading-[20.57px] h-[32px]"
          >
            Phone Number
          </label>
          <input
            type="text"
            className="bg-image-card h-[40px] w-[764px] rounded-[8px] focus:outline-none text-[17px] leading-[20.57px] pl-[15px]"
          />
        </div>
        <div className="flex flex-col mb-[28px]">
          <label
            htmlFor="Country"
            className="text-gray-500 font-[600] text-[17px] leading-[20.57px] h-[32px]"
          >
            Country
          </label>
          <select
            name="country"
            className="bg-image-card h-[40px] w-[764px] rounded-[8px] focus:outline-none text-[17px] leading-[20.57px] pl-[15px]"
          >
            <option value="US">United States Of America</option>
          </select>
        </div>
        <div className="flex space-x-[44px]">
          <div className="flex flex-col">
            <label
              htmlFor="Region"
              className="text-gray-500 font-[600] text-[17px] leading-[20.57px] h-[32px]"
            >
              Region
            </label>
            <input
              type="text"
              className="bg-image-card h-[40px] w-[360px] rounded-[8px] focus:outline-none text-[17px] leading-[20.57px] pl-[15px]"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="Address"
              className="text-gray-500 font-[600] text-[17px] leading-[20.57px] h-[32px]"
            >
              Address
            </label>
            <input
              type="text"
              className="bg-image-card h-[40px] w-[360px] rounded-[8px] focus:outline-none text-[17px] leading-[20.57px] pl-[15px]"
            />
          </div>
        </div>
      </form>
      <div className="flex items-end justify-end mt-[48px] mr-[60px] space-x-[28px] ">
        <button className="w-[166px] h-[40px] border-[1px] border-secondary text-secondary rounded-[8px] font-[500] text-[15px] leading-[18.15px]">
          Discard Changes
        </button>
        <button
          className="w-[77px] h-[40px] bg-admin-secondary rounded-[8px] text-primary font-[500] text-[15px] leading-[18.15px]"
          onClick={() => updateAdminDetails()}

        >
          { loading ? <Spinner/> : "Save"}
        </button>
        <ToastContainer/>
      </div>
    </>
  );
};
