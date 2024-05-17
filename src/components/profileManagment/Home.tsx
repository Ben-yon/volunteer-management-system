import { media } from "../../assets";
import { AdminCalendar } from "../../widgets/Calendar";
import { CustomPieChart } from "../../widgets/CustomPieChart";

export const Home = () => {
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
                25
              </p>
              <div className="flex flex-col text-primary">
                <p className="font-[700] text-[12px] leading-[14.52px] w-[57px] h-[20px]">
                  Admins
                </p>
                <p className="font-[500] text-[10px] leading-[12.1px] w-auto">
                  Since March
                </p>
              </div>
            </div>
            <div className="divider"></div>
            <div className="flex items-center justify-center w-[171px] h-[41px] space-x-1 ml-[26px] mr-[23px]">
              <p className="text-primary w-auto h-[36px] font-[700] text-[35px] leading-[42.36px]">
                100
              </p>
              <div className="flex flex-col text-primary">
                <p className="font-[700] text-[12px] leading-[14.52px] w-[101px] h-[20px]">
                  Total Voluteers
                </p>
                <p className="font-[500] text-[10px] leading-[12.1px] w-auto">
                  Since March
                </p>
              </div>
            </div>
            <div className="divider"></div>
            <div className="flex items-center justify-center space-x-1 ml-[23px] mr-[9px]">
              <p className="text-primary w-auto h-[36px] font-[700] text-[35px] leading-[42.36px]">
                4
              </p>
              <div className="flex flex-col text-primary">
                <p className="font-[700] text-[12px] leading-[14.52px] w-auto h-[20px]">
                  New Volunteers
                </p>
                <p className="font-[500] text-[10px] leading-[12.1px] w-auto">
                  Since April
                </p>
              </div>
            </div>
            <div className="divider"></div>
            <div className="flex items-center justify-center space-x-1 ml-[26px] mr-[37px]">
              <p className="text-primary w-auto h-[36px] font-[700] text-[35px] leading-[42.36px]">
                5
              </p>
              <div className="flex flex-col text-primary">
                <p className="font-[700] text-[12px] leading-[14.52px] w-auto h-[20px]">
                  Upcoming events
                </p>
                <p className="font-[500] text-[10px] leading-[12.1px] w-auto mt-0">
                  in April
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
      <div className="flex mt-[24px]">
        <div className="">
          <AdminCalendar />
        </div>
        <div className="w-[813px] h-[431px] bg-admin-secondary dashboard-shadow ml-[24px] rounded-[20px] flex flex-col">
          <h2 className="capitalize text-primary text-center font-[700] text-[20px] leading-[24.2px] mt-[20px]">
            Available on site
          </h2>
          <div className="columns-2 mt-[15px] ">
            <div className="flex flex-col justify-center items-center  space-y-1">
              <div className="flex w-[348px] h-[49px] rounded-[5px] opacity-[70%] bg-[#D9D9D9B2]">
                <img
                  src={`${media.sample01}`}
                  alt=""
                  className="w-[28.09px] h-[29.43px] rounded-full ml-[13.44px] mr-[18.45px] mt-[10.14px]"
                />
                <div className="flex flex-col justify-center">
                  <h2 className="text-[13px]font-[700] leading-[15.73px]">
                    Peter Smith
                  </h2>
                  <p className="w-[141px] h-[10px] font-[400] text-[8px] leading-[9.68px]">
                    UX/UI Design . Adobe XD, Figma
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center w-[19px] h-[19px] relative -right-[100px] top-[12px] bg-white p-[10px] rounded-full">
                  <img
                    src={`${media.chat_red}`}
                    alt="chat_icon"
                    className="absolute top-[7px] w-[9.17px] h-[9.2px]"
                  />
                </div>
              </div>
              <div className="flex w-[348px] h-[49px] rounded-[5px] opacity-[70%] bg-[#D9D9D9B2]">
                <img
                  src={`${media.sample01}`}
                  alt=""
                  className="w-[28.09px] h-[29.43px] rounded-full ml-[13.44px] mr-[18.45px] mt-[10.14px]"
                />
                <img src="" alt="" />
                <div className="flex flex-col justify-center">
                  <h2 className="text-[13px]font-[700] leading-[15.73px]">
                    Peter Smith
                  </h2>
                  <p className="w-[141px] h-[10px] font-[400] text-[8px] leading-[9.68px]">
                    UX/UI Design . Adobe XD, Figma
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center w-[19px] h-[19px] relative -right-[100px] top-[12px] bg-white p-[10px] rounded-full">
                  <img
                    src={`${media.chat_red}`}
                    alt="chat_icon"
                    className="absolute top-[7px] w-[9.17px] h-[9.2px]"
                  />
                </div>
              </div>
              <div className="flex w-[348px] h-[49px] rounded-[5px] opacity-[70%] bg-[#D9D9D9B2]">
                <img
                  src={`${media.sample01}`}
                  alt=""
                  className="w-[28.09px] h-[29.43px] rounded-full ml-[13.44px] mr-[18.45px] mt-[10.14px]"
                />
                <img src="" alt="" />
                <div className="flex flex-col justify-center">
                  <h2 className="text-[13px]font-[700] leading-[15.73px]">
                    Peter Smith
                  </h2>
                  <p className="w-[141px] h-[10px] font-[400] text-[8px] leading-[9.68px]">
                    UX/UI Design . Adobe XD, Figma
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center w-[19px] h-[19px] relative -right-[100px] top-[12px] bg-white p-[10px] rounded-full">
                  <img
                    src={`${media.chat_red}`}
                    alt="chat_icon"
                    className="absolute top-[7px] w-[9.17px] h-[9.2px]"
                  />
                </div>
              </div>
              <div className="flex w-[348px] h-[49px] rounded-[5px] opacity-[70%] bg-[#D9D9D9B2]">
                <img
                  src={`${media.sample01}`}
                  alt=""
                  className="w-[28.09px] h-[29.43px] rounded-full ml-[13.44px] mr-[18.45px] mt-[10.14px]"
                />
                <img src="" alt="" />
                <div className="flex flex-col justify-center">
                  <h2 className="text-[13px]font-[700] leading-[15.73px]">
                    Peter Smith
                  </h2>
                  <p className="w-[141px] h-[10px] font-[400] text-[8px] leading-[9.68px]">
                    UX/UI Design . Adobe XD, Figma
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center w-[19px] h-[19px] relative -right-[100px] top-[12px] bg-white p-[10px] rounded-full">
                  <img
                    src={`${media.chat_red}`}
                    alt="chat_icon"
                    className="absolute top-[7px] w-[9.17px] h-[9.2px]"
                  />
                </div>
              </div>
              <div className="flex w-[348px] h-[49px] rounded-[5px] opacity-[70%] bg-[#D9D9D9B2]">
                <img
                  src={`${media.sample01}`}
                  alt=""
                  className="w-[28.09px] h-[29.43px] rounded-full ml-[13.44px] mr-[18.45px] mt-[10.14px]"
                />
                <img src="" alt="" />
                <div className="flex flex-col justify-center">
                  <h2 className="text-[13px]font-[700] leading-[15.73px]">
                    Peter Smith
                  </h2>
                  <p className="w-[141px] h-[10px] font-[400] text-[8px] leading-[9.68px]">
                    UX/UI Design . Adobe XD, Figma
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center w-[19px] h-[19px] relative -right-[100px] top-[12px] bg-white p-[10px] rounded-full">
                  <img
                    src={`${media.chat_red}`}
                    alt="chat_icon"
                    className="absolute top-[7px] w-[9.17px] h-[9.2px]"
                  />
                </div>
              </div>
              <div className="flex w-[348px] h-[49px] rounded-[5px] opacity-[70%] bg-[#D9D9D9B2]">
                <img
                  src={`${media.sample01}`}
                  alt=""
                  className="w-[28.09px] h-[29.43px] rounded-full ml-[13.44px] mr-[18.45px] mt-[10.14px]"
                />
                <img src="" alt="" />
                <div className="flex flex-col justify-center">
                  <h2 className="text-[13px]font-[700] leading-[15.73px]">
                    Peter Smith
                  </h2>
                  <p className="w-[141px] h-[10px] font-[400] text-[8px] leading-[9.68px]">
                    UX/UI Design . Adobe XD, Figma
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center w-[19px] h-[19px] relative -right-[100px] top-[12px] bg-white p-[10px] rounded-full">
                  <img
                    src={`${media.chat_red}`}
                    alt="chat_icon"
                    className="absolute top-[7px] w-[9.17px] h-[9.2px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center  space-y-1">
              <div className="flex w-[348px] h-[49px] rounded-[5px] opacity-[70%] bg-[#D9D9D9B2]">
                <img
                  src={`${media.sample01}`}
                  alt=""
                  className="w-[28.09px] h-[29.43px] rounded-full ml-[13.44px] mr-[18.45px] mt-[10.14px]"
                />
                <img src="" alt="" />
                <div className="flex flex-col justify-center">
                  <h2 className="text-[13px]font-[700] leading-[15.73px]">
                    Peter Smith
                  </h2>
                  <p className="w-[141px] h-[10px] font-[400] text-[8px] leading-[9.68px]">
                    UX/UI Design . Adobe XD, Figma
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center w-[19px] h-[19px] relative -right-[100px] top-[12px] bg-white p-[10px] rounded-full">
                  <img
                    src={`${media.chat_red}`}
                    alt="chat_icon"
                    className="absolute top-[7px] w-[9.17px] h-[9.2px]"
                  />
                </div>
              </div>
              <div className="flex w-[348px] h-[49px] rounded-[5px] opacity-[70%] bg-[#D9D9D9B2]">
                <img
                  src={`${media.sample01}`}
                  alt=""
                  className="w-[28.09px] h-[29.43px] rounded-full ml-[13.44px] mr-[18.45px] mt-[10.14px]"
                />
                <img src="" alt="" />
                <div className="flex flex-col justify-center">
                  <h2 className="text-[13px]font-[700] leading-[15.73px]">
                    Peter Smith
                  </h2>
                  <p className="w-[141px] h-[10px] font-[400] text-[8px] leading-[9.68px]">
                    UX/UI Design . Adobe XD, Figma
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center w-[19px] h-[19px] relative -right-[100px] top-[12px] bg-white p-[10px] rounded-full">
                  <img
                    src={`${media.chat_red}`}
                    alt="chat_icon"
                    className="absolute top-[7px] w-[9.17px] h-[9.2px]"
                  />
                </div>
              </div>
              <div className="flex w-[348px] h-[49px] rounded-[5px] opacity-[70%] bg-[#D9D9D9B2]">
                <img
                  src={`${media.sample01}`}
                  alt=""
                  className="w-[28.09px] h-[29.43px] rounded-full ml-[13.44px] mr-[18.45px] mt-[10.14px]"
                />
                <img src="" alt="" />
                <div className="flex flex-col justify-center">
                  <h2 className="text-[13px]font-[700] leading-[15.73px]">
                    Peter Smith
                  </h2>
                  <p className="w-[141px] h-[10px] font-[400] text-[8px] leading-[9.68px]">
                    UX/UI Design . Adobe XD, Figma
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center w-[19px] h-[19px] relative -right-[100px] top-[12px] bg-white p-[10px] rounded-full">
                  <img
                    src={`${media.chat_red}`}
                    alt="chat_icon"
                    className="absolute top-[7px] w-[9.17px] h-[9.2px]"
                  />
                </div>
              </div>
              <div className="flex w-[348px] h-[49px] rounded-[5px] opacity-[70%] bg-[#D9D9D9B2]">
                <img
                  src={`${media.sample01}`}
                  alt=""
                  className="w-[28.09px] h-[29.43px] rounded-full ml-[13.44px] mr-[18.45px] mt-[10.14px]"
                />
                <img src="" alt="" />
                <div className="flex flex-col justify-center">
                  <h2 className="text-[13px]font-[700] leading-[15.73px]">
                    Peter Smith
                  </h2>
                  <p className="w-[141px] h-[10px] font-[400] text-[8px] leading-[9.68px]">
                    UX/UI Design . Adobe XD, Figma
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center w-[19px] h-[19px] relative -right-[100px] top-[12px] bg-white p-[10px] rounded-full">
                  <img
                    src={`${media.chat_red}`}
                    alt="chat_icon"
                    className="absolute top-[7px] w-[9.17px] h-[9.2px]"
                  />
                </div>
              </div>
              <div className="flex w-[348px] h-[49px] rounded-[5px] opacity-[70%] bg-[#D9D9D9B2]">
                <img
                  src={`${media.sample01}`}
                  alt=""
                  className="w-[28.09px] h-[29.43px] rounded-full ml-[13.44px] mr-[18.45px] mt-[10.14px]"
                />
                <div className="flex flex-col justify-center">
                  <h2 className="text-[13px]font-[700] leading-[15.73px]">
                    Peter Smith
                  </h2>
                  <p className="w-[141px] h-[10px] font-[400] text-[8px] leading-[9.68px]">
                    UX/UI Design . Adobe XD, Figma
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center w-[19px] h-[19px] relative -right-[100px] top-[12px] bg-white p-[10px] rounded-full">
                  <img
                    src={`${media.chat_red}`}
                    alt="chat_icon"
                    className="absolute top-[7px] w-[9.17px] h-[9.2px]"
                  />
                </div>
              </div>
              <div className="flex w-[348px] h-[49px] rounded-[5px] opacity-[70%] bg-[#D9D9D9B2]">
                <img
                  src={`${media.sample01}`}
                  alt=""
                  className="w-[28.09px] h-[29.43px] rounded-full ml-[13.44px] mr-[18.45px] mt-[10.14px]"
                />
                <img src="" alt="" />
                <div className="flex flex-col justify-center">
                  <h2 className="text-[13px]font-[700] leading-[15.73px]">
                    Peter Smith
                  </h2>
                  <p className="w-[141px] h-[10px] font-[400] text-[8px] leading-[9.68px]">
                    UX/UI Design . Adobe XD, Figma
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center w-[19px] h-[19px] relative -right-[100px] top-[12px] bg-white p-[10px] rounded-full">
                  <img
                    src={`${media.chat_red}`}
                    alt="chat_icon"
                    className="absolute top-[7px] w-[9.17px] h-[9.2px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
