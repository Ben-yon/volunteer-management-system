/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import { media } from "../../assets";
import { RootState } from "../../features/store";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { fetchAdmins } from "../../features/admins/adminAction";
import { AdminRegisterPayload } from "../../interfaces/AuthInterface";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";

export const Admins = () => {
  const [admins, setAdmins] = useState<Array<AdminRegisterPayload>>([]);
  const [ filteredAdmins, setFilteredAdmins ] = useState<Array<AdminRegisterPayload>>([]);
  const [query, setQuery] = useState("");


  const { success, loading, adminsInfo, error } = useSelector(
    (state: RootState) => state.fetchAdminsSlice
  );

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const navigate = useNavigate();

  const fetchAdminsDetails = useCallback(() => {
    dispatch(fetchAdmins());
  }, [dispatch]);

  useEffect(() => {
    fetchAdminsDetails();
  }, [fetchAdminsDetails]);

  useEffect(() => {
    if (success) {
      setAdmins(adminsInfo);
    }
  }, [adminsInfo, success]);

  useEffect(() => {
    if (loading) {
      toast.success("Admins loading successfully");
    }
  }, [loading]);

  useEffect(() => {
    if(error){
      toast.error(error);
    }
  }, [error])

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9; // Display 9 items, so the 10th spot is for the "Add New" button

  const handleNext = () => {
    if ((currentPage + 1) * itemsPerPage < admins?.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = currentPage * itemsPerPage;
  const currentAdmins = filteredAdmins?.slice(startIndex, startIndex + itemsPerPage);

  const addAdmin = () => {
    navigate("/admins/add");
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const userSearch = useCallback(
    debounce((searchTerm: string) => {
      if (searchTerm) {
        const filtered = admins?.filter((admin) => {
          return (
            admin.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            admin.lastName.toLowerCase().includes(searchTerm.toLowerCase())
          );
        });
        setFilteredAdmins(filtered);
      } else {
        setFilteredAdmins(admins);
      }
    }, 200),
    [admins]
  );

  useEffect(() => {
    userSearch(query);
    return () => {
      userSearch.cancel();
    };
  }, [query, userSearch]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

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
              value={query}
              onChange={handleChange}
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
          {currentAdmins?.map((admin) => (
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
          <div
            className="flex items-center justify-center ml-[65.71px] hover:cursor-pointer"
            onClick={() => addAdmin()}
          >
            <img src={media.add_admin} alt="" />
          </div>
        </div>
        <div className="absolute bottom-0 right-0 flex space-x-[5px]">
          <button onClick={handlePrevious} className="" disabled={currentPage === 0}>
            {
              currentPage === 0 ? (
                <img src={media.previous_gray} alt="" />
              ): (
                <img src={media.previous_black} alt="" />
              )
            }
          </button>
          <button onClick={handleNext}>
            {
              startIndex + itemsPerPage >= admins?.length ? (
                <img src={media.next_gray} alt="" className="w-[25px] h-[25px]"/>
              ) : (
                <img src={media.next_black} alt="" className="w-[25px] h-[25px]"/>
              )
            }
          </button>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
};
