import { Link } from "react-router-dom";
import { media } from "../../assets";
import { AdminRoutes } from "../../routes/AppRoute";

export const ProfileManagement = () => {
  return (
    <div className="">
      <div className="absolute flex space-x-12 top-[49px] right-[70px]">
        <div>
          <img src="" alt="" />
          <p className="text-[15px] leading-[18.5px]">
            Ken Boehm <p className="text-[10px] leading-[12.1px]">Admin</p>
          </p>
        </div>
        <img src={media.notification} alt="" className="w-[30px] h-[27.27px]" />
      </div>
      <div className="flex">
        <div className="flex flex-col space-y-5 p-20">
          <div className="flex text-secondary font-extrabold text-[20px] leading-[21.78px]">
            <img
              src={media.admin_icon}
              alt=""
              className="w-[25.93px] h-[25.93px]"
            />
            <span>Admin Panel</span>
          </div>
          <nav className="border border-red-400 admin-primary-gradient w-[308px] h-[378px] rounded-[23px] mt-[17.5px]">
            <ul className="text-primary text-[18px] font-bold leading-[15.73px] flex-col space-y-6 ml-[45px] mt-[51px] mb-[68.14px]">
              <li className="flex space-x-[13px]">
                <img src={media.home} alt="home icon" className="" />
                <Link to="#">Home</Link>
              </li>
              <li className="flex space-x-[13px]">
                <img src={media.menu_notification} alt="" />
                <Link to="#">Notification</Link>
              </li>
              <li className="flex space-x-[13px]">
                <img src={media.networks} alt="" />
                <Link to="">Networks</Link>
              </li>
              <li className="flex space-x-[13px]">
                <img src={media.menu_events} alt="" />
                <Link to="">Events</Link>
              </li>
              <li className="flex space-x-[13px]">
                <img src={media.giving} alt="" />
                <Link to="">Giving</Link>
              </li>
              <li className="flex space-x-[13px]">
                <img src={media.volunteers} alt="" />
                <Link to="volunteers">Volunteers</Link>
              </li>
              <li className="flex space-x-[13px]">
                <img src={media.menu_programs} alt="" />
                <Link to="">Programs</Link>
              </li>
            </ul>
          </nav>
          <nav className="border border-red-400 red-gradient w-[308px] h-[488px] rounded-[23px]">
            <ul className="text-primary">
              <li>life</li>
            </ul>
          </nav>
        </div>
        <div>
          <AdminRoutes />
        </div>
      </div>
    </div>
  );
};
