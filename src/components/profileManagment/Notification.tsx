import { media } from "../../assets";

export const Notification = () => {
  return (
    <div className="flex flex-col">
      <p className="text-[#D9D9D9] text-[15px] font-[700] leading-[18.15px]">
        MCSS Volunteers
      </p>
      <h2 className="text-black font-[700] text-[27px] leading-[32.68px] pb-6">
        Notifications
      </h2>

      <div className="flex space-x-[15px]">
        <div className="flex flex-col w-[408px] h-[840px] rounded-[13px] details-card space-y-[38px]">
          <a
            href="#"
            className="font-[600] text-[15px] leading-[18.15px] text-[#790000] relative top-[33px] left-[42px]"
          >
            View All
          </a>
          <div className="flex items-center relative top-[39px] left-[42px]">
            <img
              src={`${media.sample04}`}
              alt=""
              className="w-[49px] h-[49px] rounded-full border-[2px] border-gray-400"
            />
            <div className="flex flex-col">
              <p className="text-[#790000] font-[600] text-[10px] leading-[12.1px] ml-[14px]">
                Education & Outreach
              </p>
              <div className="flex items-center justify-center w-[147px] h-[19px] border rounded-[7px] mt-[6px] ml-[13px]">
                <img
                  src={`${media.notify_icon}`}
                  alt="event_icon"
                  className="w-[11px] h-[11px] mr-[3px]"
                />
                <p className="font-[500] text-[7px] leading-[8.47px]">
                  Coming Up on 15th May @Toronto.
                </p>
              </div>
              <p className="font-[500] text-[7px] leading-[8.47px] ml-[14px] mt-[5px]">
                Saturday 7:30am
              </p>
            </div>
            <div className="flex flex-col space-y-[28px]">
              <img
                src={`${media.red_dot}`}
                alt="red_dot"
                className="w-[6px] h-[7px] relative left-[118px]"
              />
              <p className="font-[500] text-[7px] leading-[8.47px] relative left-[77px]">
                April 20, 2024
              </p>
            </div>
          </div>
          <div className="flex items-center relative top-[39px] left-[42px]">
            <img
              src={`${media.sample04}`}
              alt=""
              className="w-[49px] h-[49px] rounded-full border-[2px] border-gray-400"
            />
            <div className="flex flex-col">
              <p className="text-[#790000] font-[600] text-[10px] leading-[12.1px] ml-[14px]">
              Simon Sam completed Volunteer Registration 
              </p>
                <p className="font-[500] text-[7px] leading-[8.47px] ml-[13px] mt-[5px]">
                Saturday 7:45am
                </p>
              <p className="font-[500] text-[7px] leading-[8.47px] ml-[14px] mt-[5px]">
              April 20, 2024
              </p>
            </div>
            <div className="flex flex-col space-y-[28px]">
              <img
                src={`${media.red_dot}`}
                alt="red_dot"
                className="w-[6px] h-[7px] relative left-[45px]"
              />
              
            </div>
          </div>
        </div>
        <div className="w-[408px] h-[840px] rounded-[13px] emails-card flex flex-col space-y-[38px]">
          <a
            href="#"
            className="font-[600] text-[15px] leading-[18.15px] text-primary relative top-[33px] left-[42px]"
          >
            Emails
          </a>
          <div className="flex items-center relative top-[39px] left-[39px]">
            <img
                src={`${media.sample04}`}
                alt=""
                className="w-[49px] h-[49px] rounded-full border-[2px] border-white"
                />
                <div className="flex flex-col justify-center ml-[14px]">
                    <p className="text-primary font-[600] text-[10px] leading-[12.1px]">James sent an Email</p>
                    <img src={`${media.white_envelope}`} alt="white_envelope" className="w-[13px] h-[10px]" />
                    <p className="text-primary text-[7px] leading-[8.47px] font-[500] mt-[5px]" >Saturday 7:50am</p>
                    <p className="text-primary text-[7px] leading-[8.47px] font-[500] mt-[5px]" >April 20, 2024</p>
                </div>
          </div>
          <div className="flex items-center relative top-[39px] left-[39px]">
            <img
                src={`${media.sample04}`}
                alt=""
                className="w-[49px] h-[49px] rounded-full border-[2px] border-white"
                />
                <div className="flex flex-col justify-center ml-[14px]">
                    <p className="text-primary font-[600] text-[10px] leading-[12.1px]">James sent an Email</p>
                    <img src={`${media.white_envelope}`} alt="white_envelope" className="w-[13px] h-[10px]" />
                    <p className="text-primary text-[7px] leading-[8.47px] font-[500] mt-[5px]" >Saturday 7:50am</p>
                    <p className="text-primary text-[7px] leading-[8.47px] font-[500] mt-[5px]" >April 20, 2024</p>
                </div>
          </div>
          <div className="flex items-center relative top-[39px] left-[39px]">
            <img
                src={`${media.sample04}`}
                alt=""
                className="w-[49px] h-[49px] rounded-full border-[2px] border-white"
                />
                <div className="flex flex-col justify-center ml-[14px]">
                    <p className="text-primary font-[600] text-[10px] leading-[12.1px]">James sent an Email</p>
                    <img src={`${media.white_envelope}`} alt="white_envelope" className="w-[13px] h-[10px]" />
                    <p className="text-primary text-[7px] leading-[8.47px] font-[500] mt-[5px]" >Saturday 7:50am</p>
                    <p className="text-primary text-[7px] leading-[8.47px] font-[500] mt-[5px]" >April 20, 2024</p>
                </div>
          </div>
          <div className="flex items-center relative top-[39px] left-[39px]">
            <img
                src={`${media.sample04}`}
                alt=""
                className="w-[49px] h-[49px] rounded-full border-[2px] border-white"
                />
                <div className="flex flex-col justify-center ml-[14px]">
                    <p className="text-primary font-[600] text-[10px] leading-[12.1px]">James sent an Email</p>
                    <img src={`${media.attachment}`} alt="white_envelope" className="w-[13px] h-[10px]" />
                    <p className="text-primary text-[7px] leading-[8.47px] font-[500] mt-[5px]" >Saturday 7:50am</p>
                    <p className="text-primary text-[7px] leading-[8.47px] font-[500] mt-[5px]" >April 20, 2024</p>
                </div>
          </div>
        </div>
        <div className="flex flex-col space-y-[38px] w-[408px] h-[840px] rounded-[13px] emails-card">
          <a
            href="#"
            className="font-[600] text-[15px] leading-[18.15px] text-primary relative top-[33px] left-[42px]"
          >
            Programs
          </a>
          <div className="flex items-center relative top-[39px] left-[42px]">
            <img
              src={`${media.sample04}`}
              alt=""
              className="w-[49px] h-[49px] rounded-full border-[2px] border-white"
            />
            <div className="flex flex-col">
              <p className="font-[600] text-[10px] leading-[12.1px] ml-[14px] text-primary">
                Education & Outreach
              </p>
              <div className="flex items-center justify-center w-[147px] h-[19px] border bg-primary rounded-[7px] mt-[6px] ml-[13px]">
                <img
                  src={`${media.notify_icon}`}
                  alt="event_icon"
                  className="w-[11px] h-[11px] mr-[3px]"
                />
                <p className="font-[500] text-[7px] leading-[8.47px]">
                  Coming Up on 15th May @Toronto.
                </p>
              </div>
              <p className="font-[500] text-[7px] leading-[8.47px] ml-[14px] mt-[5px] text-primary">
                Saturday 7:30am
              </p>
            </div>
            <div className="flex flex-col space-y-[28px]">
              <p className="font-[500] text-[7px] leading-[8.47px] relative left-[77px] text-primary">
                April 20, 2024
              </p>
            </div>
          </div>
          <div className="flex items-center relative top-[39px] left-[42px]">
            <img
              src={`${media.sample04}`}
              alt=""
              className="w-[49px] h-[49px] rounded-full border-[2px] border-white"
            />
            <div className="flex flex-col">
              <p className="font-[600] text-[10px] leading-[12.1px] ml-[14px] text-primary">
                Education & Outreach
              </p>
              <div className="flex items-center justify-center w-[147px] h-[19px] border bg-primary rounded-[7px] mt-[6px] ml-[13px]">
                <img
                  src={`${media.notify_icon}`}
                  alt="event_icon"
                  className="w-[11px] h-[11px] mr-[3px]"
                />
                <p className="font-[500] text-[7px] leading-[8.47px]">
                  Coming Up on 15th May @Toronto.
                </p>
              </div>
              <p className="font-[500] text-[7px] leading-[8.47px] ml-[14px] mt-[5px] text-primary">
                Saturday 7:30am
              </p>
            </div>
            <div className="flex flex-col space-y-[28px]">
              <p className="font-[500] text-[7px] leading-[8.47px] relative left-[77px] text-primary">
                April 20, 2024
              </p>
            </div>
          </div>
          <div className="flex items-center relative top-[39px] left-[42px]">
            <img
              src={`${media.sample04}`}
              alt=""
              className="w-[49px] h-[49px] rounded-full border-[2px] border-white"
            />
            <div className="flex flex-col">
              <p className="font-[600] text-[10px] leading-[12.1px] ml-[14px] text-primary">
                Education & Outreach
              </p>
              <div className="flex items-center justify-center w-[147px] h-[19px] border bg-primary rounded-[7px] mt-[6px] ml-[13px]">
                <img
                  src={`${media.notify_icon}`}
                  alt="event_icon"
                  className="w-[11px] h-[11px] mr-[3px]"
                />
                <p className="font-[500] text-[7px] leading-[8.47px]">
                  Coming Up on 15th May @Toronto.
                </p>
              </div>
              <p className="font-[500] text-[7px] leading-[8.47px] ml-[14px] mt-[5px] text-primary">
                Saturday 7:30am
              </p>
            </div>
            <div className="flex flex-col space-y-[28px]">
              <p className="font-[500] text-[7px] leading-[8.47px] relative left-[77px] text-primary">
                April 20, 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
