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
        <div className="flex flex-col w-[408px] h-[840px] rounded-[13px] details-card">
          <a
            href="#"
            className="mb-[40px] font-[600] text-[15px] leading-[18.15px] text-[#790000] relative top-[33px] left-[42px]"
          >
            View All
          </a>
          <div className="flex items-center relative top-[39px] left-[42px]">
            <img src={`${media.sample04}`} alt="" className="w-[49px] h-[49px] rounded-full" />
            <div className="flex flex-col">
                <p className="text-[#790000] font-[600] text-[10px] leading-[12.1px] ml-[14px]">Education & Outreach</p>
                 <div className="flex items-center justify-center w-[147px] h-[19px] border rounded-[7px] mt-[6px] ml-[13px]">
                    <img src={`${media.notify_icon}`} alt="event_icon" className="w-[11px] h-[11px] mr-[3px]"/>
                    <p className="font-[500] text-[7px] leading-[8.47px]">Coming Up on 15th May @Toronto.</p>
                 </div>
                 <p className="font-[500] text-[7px] leading-[8.47px] ml-[14px] mt-[5px]">Saturday 7:30am</p>
            </div>
          </div>
        </div>
        <div className="w-[408px] h-[840px] rounded-[13px] emails-card">
          <a
            href="#"
            className="font-[600] text-[15px] leading-[18.15px] text-primary relative top-[33px] left-[42px]"
          >
            Emails
          </a>
        </div>
        <div className="w-[408px] h-[840px] rounded-[13px] emails-card">
          <a
            href="#"
            className="font-[600] text-[15px] leading-[18.15px] text-primary relative top-[33px] left-[42px]"
          >
            Programs
          </a>
        </div>
      </div>
    </div>
  );
};
