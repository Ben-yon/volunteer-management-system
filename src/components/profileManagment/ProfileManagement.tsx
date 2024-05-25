import { NavLink, Outlet } from "react-router-dom";
import { media } from "../../assets";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { LoginPayload } from "../../interfaces/AuthInterface";

export const ProfileManagement = () => {
  const [activeLink, setActiveLink] = useState<string | null>("");
  const [ userInfo, setUserInfo ]  = useState<LoginPayload>();

  const { state } = useLocation();
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const handleClick = (path: string) => {
    setActiveLink(path);
  };

  const token = localStorage.getItem('token')

  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo){
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, [state])

  const userLogout = () => {
    dispatch(logout());
    if (!token) {
      navigate('/admin/sigin-in');
    }
  };

  return (
    <div className="w-[100%] flex overflow-x-clip">
      <div className="absolute top-[25px] left-[33px] w-[206px] h-[85px]">
        <img src={`${media.redLogo}`} alt="" />
      </div>
      <div className="absolute top-[49px] right-[67.4px] flex space-x-6">
        <div className="flex">
          <img
            src={media.upload}
            alt=""
            className="w-[50px] h-[50px] mr-[12px] relative -top-1"
          />
          <p className="text-[15px] leading-[18.5px] flex flex-col font-[600]">
            {userInfo?.firstName} {userInfo?.lastName} 
            <span className="text-[10px] leading-[12.1px] font-bold">
              {userInfo?.roles[0]?.name}
            </span>
          </p>
        </div>
        <div className="hover:cursor-pointer">
          <img src={media.data_upload} alt="" className="w-[28px] h-[28px]" onClick={() => userLogout()}/>
        </div>
        <div className="hover:cursor-pointer">
          <img
            src={media.notification}
            alt=""
            className="w-[30px] h-[27.27px]"
          />
        </div>
      </div>
      <div className="relative top-24 left-14 flex mt-[60px]">
        <div className="relative flex flex-col space-y-5 mr-[40px]">
          <div className="flex font-extrabold text-[20px] leading-[21.78px]">
            <img
              src={media.admin_icon}
              alt=""
              className="w-[25.93px] h-[25.93px]"
            />
            <p className="text-admin-secondary p-1">Admin Panel</p>
          </div>
          <nav className="primary-gradient w-[308px] h-[378px] rounded-[23px] mt-[17.5px] flex flex-col space-y-2 text-primary">
            <NavLink
              to=""
              className={`flex ${
                activeLink === "" ? "bg-menu-focus" : " "
              }  pt-[8px] pb-[3.14px] mt-[40px] text-[13px] leading-[15.73px] font-[600]`}
              onClick={() => handleClick("")}
            >
              <img
                src={media.home}
                alt="home icon"
                className="pl-[46px] pr-3"
              />
              Home
            </NavLink>
            <NavLink
              to="notification"
              className={`flex space-x-[13px] focus:filter ${
                activeLink === "notification" ? "bg-menu-focus" : ""
              } pt-[12px] pb-[3.14px] text-[13px] leading-[15.73px] font-[600]`}
              onClick={() => handleClick("notification")}
            >
              <img
                src={media.menu_notification}
                alt=""
                className="pl-[46px] pr-3"
              />
              Notifications
            </NavLink>
            <NavLink
              to="messages"
              className={`flex space-x-[13px] focus:filter ${
                activeLink === "messages" ? "bg-menu-focus" : ""
              } pt-[12px] pb-[3.14px] text-[13px] leading-[15.73px] font-[600]`}
              onClick={() => handleClick("messages")}
            >
              <img src={media.chat_white} alt="" className="pl-[46px] pr-3" />
              Messages
              <div className="bg-primary relative -right-12 top-1 w-[10px] h-[10px]">
                <p className="text-black text-[6.36px] leading-[7.7px] text-center pt-[2px]">
                  4
                </p>
              </div>
            </NavLink>
            <NavLink
              to="training"
              className={`flex space-x-[13px] focus:filter ${
                activeLink === "training" ? "bg-menu-focus" : ""
              } pt-[12px] pb-[3.14px] text-[13px] leading-[15.73px] font-[600]`}
              onClick={() => handleClick("training")}
            >
              <img src={media.giving} alt="" className="pl-[46px] pr-3" />
              Training
            </NavLink>
            <NavLink
              to="scheduling"
              className={`flex space-x-[13px] focus:filter ${
                activeLink === "scheduling" ? "bg-menu-focus" : ""
              } pt-[12px] pb-[3.14px] text-[13px] leading-[15.73px] font-[600]`}
              onClick={() => handleClick("scheduling")}
            >
              <img src={media.menu_events} alt="" className="pl-[46px] pr-3" />
              Scheduling
            </NavLink>
            <NavLink
              to="volunteers"
              className={`flex space-x-[13px] focus:filter ${
                activeLink === "volunteers" ? "bg-menu-focus" : ""
              } pt-[12px] pb-[3.14px] text-[13px] leading-[15.73px] font-[600]`}
              onClick={() => handleClick("volunteers")}
            >
              <img src={media.volunteers} alt="" className="pl-[46px] pr-3" />
              Volunteers
            </NavLink>
            <NavLink
              to="programs"
              className={`flex space-x-[13px] focus:filter ${
                activeLink === "programs" ? "bg-menu-focus" : ""
              } pt-[12px] pb-[3.14px] text-[13px] leading-[15.73px] font-[600]`}
              onClick={() => handleClick("programs")}
            >
              <img
                src={media.menu_programs}
                alt=""
                className="pl-[46px] pr-3"
              />
              Programs
            </NavLink>
          </nav>
          <nav className="secondary-gradient w-[308px] h-[448px] rounded-[23px] flex flex-col space-y-2 text-primary">
            <NavLink
              to="admins"
              className={`flex space-x-[13px] focus:filter ${
                activeLink === "admins" ? "bg-menu-focus" : ""
              } pt-[12px] pb-[3.14px] mt-[50px] text-[13px] leading-[15.73px] font-[600]`}
              onClick={() => handleClick("admins")}
            >
              <img src={media.admins} alt="" className="pl-[46px] pr-3" />
              Admins
            </NavLink>
            <NavLink
              to="profile"
              className={`flex space-x-[13px] focus:filter ${
                activeLink === "profile" ? "bg-menu-focus" : ""
              } pt-[12px] pb-[3.14px] text-[13px] leading-[15.73px] font-[600]`}
              onClick={() => handleClick("profile")}
            >
              <img src={media.profile} alt="" className="pl-[46px] pr-3" />
              Profile
            </NavLink>
            <NavLink
              to="support"
              className={`flex space-x-[13px] focus:filter ${
                activeLink === "support" ? "bg-menu-focus" : ""
              } pt-[12px] pb-[3.14px] text-[13px] leading-[15.73px] font-[600]`}
              onClick={() => handleClick("support")}
            >
              <img src={media.support} alt="" className="pl-[46px] pr-3" />
              Support
            </NavLink>
            <NavLink
              to="settings"
              className={`flex space-x-[13px] focus:filter ${
                activeLink === "settings" ? "bg-menu-focus" : ""
              } pt-[12px] pb-[3.14px] text-[13px] leading-[15.73px] font-[600]`}
              onClick={() => handleClick("settings")}
            >
              <img src={media.settings} alt="" className="pl-[46px] pr-3" />
              Settings
            </NavLink>
            <NavLink
              to="integrations"
              className={`flex space-x-[13px] focus:filter ${
                activeLink === "integrations" ? "bg-menu-focus" : ""
              } pt-[12px] pb-[3.14px] text-[13px] leading-[15.73px] font-[600]`}
              onClick={() => handleClick("integrations")}
            >
              <img src={media.integrations} alt="" className="pl-[46px] pr-3" />
              Integrations
            </NavLink>
            <div className="w-[308px] h-[97px] bg-menu-focus flex items-center space-x-3 item top-margin">
              <img
                src={media.upload}
                alt=""
                className="w-[60px] h-[60px] mt-[5px] ml-[40px]"
              />
              <div className="flex flex-col">
                <p className="font-[600] text-[15px] leading-[18.15px]">{userInfo?.firstName} {userInfo?.lastName}</p>
                <span className="text-[10px] leading-[12.1px]">
                  {userInfo?.email}
                </span>
                <span className="text-[10px] leading-[12.1px]">{userInfo?.roles[0]?.name}</span>
              </div>
            </div>
          </nav>
        </div>
        <div className="relative -top-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
