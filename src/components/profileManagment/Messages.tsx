import { media } from "../../assets";

export const Messages = () => {
  return (
    <div className="flex  flex-col justify-center">
      <p className="text-[#D9D9D9] text-[15px] font-extrabold leading-[18.15px]">
        MCSS Volunteers
      </p>
      <h2 className="text-black font-extrabold text-[27px] leading-[32.68px] pb-6">
        Messaging
      </h2>
      <div className="flex items-center space-x-[22px]">
        <div className="flex flex-col w-[409px] h-[840px] rounded-[13px] border-[0.5px] shadow-[0px_0px_7.599999904632568px_0px_#00000012]">
          <div className="relative flex">
            <img
              src={media.msg_search}
              alt=""
              className="w-[24px] h-[24px] absolute left-[58px] top-[46px]"
            />
            <input
              type="search"
              className="w-[261px] h-[45px] rounded-[13px] bg-[#79000017] font-[600] text-[15px] leading-[18.15px] pl-[54px] relative top-[32px] ml-[33px] text-[#78000080] placeholder-[#78000080]"
              placeholder="Search"
            />
            <img
              src={media.compose}
              className="w-[38px] h-[38px] relative top-[37px] ml-[34px]"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col w-[828px] h-[840px] rounded-[13px] border-[0.5px] shadow-[0px_0px_7.599999904632568px_0px_#00000012]">
          <div className="flex items-center space-x-7">
            <img
              src=""
              alt="user-image"
              className="w-[65.8px] h-[65.8px] rounded-full relative top-[24px] left-[39px]"
            />
            <div className="relative top-[31px] left-[28.2px] flex flex-col">
              <p className="font-[600] text-[22.51px] leading-[27.24px] text-admin-secondary">
                User or Group Name
              </p>
              <span className="italic text-[13px] font-[400] leading-[15.73px]">
                Typing
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center w-[806px] h-[659px] bg-messages rounded-[17px] mt-[41px] ml-[11px]"></div>
          <div className="flex items-center space-x-1">
            <input
              className="w-[687px] h-[37.21px] bg-messages rounded-[9.98px] ml-[11px] mt-[16.89px] focus:outline-none text-gray-500 pl-[41px] text-[11px] font-[500] leading-[13.31px]"
              placeholder="Type a message"
            />
            <div className="flex items-center justify-center space-x-1 mt-3 ml-[6.1px]">
              <img src={media.media_upload} alt="media upload" className="hover:cursor-pointer"/>
              <img src={media.voice_note} alt="voice_note" className="hover:cursor-pointer"/>
              <div className=" bg-admin-secondary w-[40px] h-[40px] rounded-full flex items-center justify-center hover:cursor-pointer">
                <img
                  src={media.send_message}
                  alt="send message"
                  className=" "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
