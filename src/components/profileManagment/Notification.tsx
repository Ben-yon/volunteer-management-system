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
        <div className="w-[408px] h-[840px] rounded-[13px] details-card">
          <a
            href="#"
            className="font-[600] text-[15px] leading-[18.15px] text-[#790000] relative top-[33px] left-[42px]"
          >
            View All
          </a>

          <div className="flex flex-col items-center justify-center">
            <img src={`${media.sample04}`} alt="" className="w-[49px] h-[49px] rounded-full" />
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
