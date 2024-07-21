import { useDispatch, useSelector } from "react-redux";
import { media } from "../../assets";
import { RootState } from "../../features/store";
import { useCallback, useEffect, useState } from "react";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { fetchAdmins } from "../../features/admins/adminAction";
import { AdminRegisterPayload } from "../../interfaces/AuthInterface";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Admins = () => {
  const [admins, setAdmins] = useState<AdminRegisterPayload[]>();
  const { success, loading, adminsInfo, error } = useSelector(
    (state: RootState) => state.fetchAdminsSlice
  );

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const navigate = useNavigate()

  const fetchAdminsDetails = useCallback(() => {
    dispatch(fetchAdmins());
  }, [dispatch]);

  useEffect(() => {
    fetchAdminsDetails();
  }, [fetchAdminsDetails]);

  useEffect(() => {
    if (success) {
      setAdmins(adminsInfo);
    } else {
      console.log(error);
      toast.error("Error fetching Admins");
    }
    if (loading) {
      toast.loading("Admins are loading");
    }
  });

  const addAdmin = () => {
    navigate('/admins/add')
  }

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
          {admins?.map((admin) => (
            <div
              className="w-[227px] h-[264px] rounded-[22.62px] bg-image-card bg-opacity-[29%] message-box-shadow mr-[22px]"
              key={admin.email}
            >
              <div className="flex items-end hover:cursor-pointer">
                <img
                  src={media.chat_black}
                  alt=""
                  className="relative top-[15px] left-[29px] hover:cursor-pointer"
                />
                <img
                  src={media.options}
                  alt="options-icon"
                  className="relative top-[15px] left-[180.32px]"
                />
              </div>
              <div className="flex flex-col items-center justify-center mt-[20.24px]">
                {admin?.profilePicture ? (
                  <img
                    src={admin?.profilePicture}
                    alt=""
                    className="w-[92.64px] h-[92.64px] rounded-full"
                  />
                ) : (
                  <img
                    src={media.upload}
                    alt=""
                    className="w-[92.64px] h-[92.64px] rounded-full"
                  />
                )}
                <p className="text-[16.16px] font-[600] leading-[19.55px] mt-[21.54px]">
                  {admin?.firstName} {admin?.lastName}
                </p>
                <div className="bg-image-card bg-opacity-[52%] w-[56.01px] h-[11.67px] rounded-[3.89px] mt-[2px] flex items-center justify-center">
                  <p className="text-[5.85px] leading-[7.08px] font-[500] text-center ">
                    {admin?.roles[0]?.name}
                  </p>
                </div>
                <div className="flex items-center justify-center mt-[27.41px]">
                  <img src={media.role_bind} alt="" />
                  <img src={media.phone_black} alt="" />
                  <img src={media.email_black} alt="" />
                </div>
                {admin?.contact ? (
                  <span className="text-[8.62px] font-[500] leading-[10.43px] mt-[3px]">
                    {admin?.contact}
                  </span>
                ) : (
                  <span className="text-[8.62px] font-[500] leading-[10.43px] mt-[3px]">
                    Number yet to be updated
                  </span>
                )}
                <span className="text-[8.62px] font-[500] leading-[10.43px] mt-[2px]">
                  {admin?.email}
                </span>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-center ml-[65.71px] hover:cursor-pointer" onClick={() => addAdmin()}>
            <img src={media.add_admin} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
