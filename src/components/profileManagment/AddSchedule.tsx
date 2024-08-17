import { media } from "../../assets";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

export const AddSchedule = () => {
  const [selectedOnDate, setSelectedOnDate] = useState<Date | null>(null);
  const [selectedFromDate, setSelectedFromDate] = useState<Date | null>(null);
  const [selectedToDate, setSelectedToDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);

  const handleOnDateChange = (date: Date | null) => {
    setSelectedOnDate(date);
  };

  const handleFromDateChange = (date: Date | null) => {
    setSelectedFromDate(date);
  };

  const handleToDateChange = (date: Date | null) => {
    setSelectedToDate(date);
  };

  const handleTimeChange = (time: Date | null) => {
    setSelectedTime(time);
  };

  return (
    <div className="flex flex-col">
      <p className="text-[#D9D9D9] text-[15px] font-[700] leading-[18.15px]">
        MCSS Scheduling
      </p>
      <h2 className="text-black font-[700] text-[27px] leading-[32.68px] pb-6">
        Scheduling
      </h2>
      <div className="flex items-center justify-center space-x-[51px] mt-[50px]">
        <div className="flex flex-col">
          <input
            className="w-[790px] h-[60px] text-[20px] leading-[24.2px] pl-[40.91px] font-[600] text-black text-opacity-[60%] border border-gray-200 focus:outline-none rounded-[15px] shadow-light"
            placeholder="Add Title"
          />
          <textarea
            className="w-[790px] h-[436px] rounded-[26px] pl-[34px] pt-[21px] mt-[22px] resize-none text-[20px] leading-[24.2px] font-[600] text-black text-opacity-[60%] border border-gray-200 focus:outline-none shadow-mid"
            placeholder="Description"
          ></textarea>
          <textarea
            className="w-[790px] h-[177px] rounded-[26px] pl-[34px] pt-[21px] mt-[27px] resize-none text-[20px] leading-[24.2px] font-[600] text-black text-opacity-[60%] border border-gray-200 focus:outline-none shadow-mid"
            placeholder="Add notes..."
          ></textarea>
        </div>
        <div className="flex flex-col">
          <img
            src={media.multi_select}
            alt=""
            className="relative w-[46px] h-[36px] top-[48px] left-[19px]"
          />
          <input
            type="text"
            className="w-[416.04px] h-[60px] border rounded-[21.2px] shadow-light"
          />
          <div className="w-[416px] h-[563px] rounded-[33.39px] border mt-[20px] flex flex-col pl-[38.71px] shadow-light">
            <h2 className="w-[156.68px] font-[600] text-[21.4px] leading-[25.9px] mt-[33.39px]">
              Date &amp; Time
            </h2>
            <div className="flex flex-col space-y-[6.33px] mt-[23px]">
              <label
                htmlFor="On"
                className="font-[700] text-[14.24px] leading-[17.24px] text-opacit-[64%]"
              >
                On
              </label>
              <DatePicker
                selected={selectedOnDate}
                onChange={handleOnDateChange}
                dateFormat="MMMM d, yyyy"
                placeholderText="Date"
                className="w-[337.28px] h-[60px] rounded-[13.7px] border focus:outline-none pl-[60px]"
              />
              <img
                src={media.datepicker_icon}
                alt="date-picker"
                className="w-[24.33px] h-[27.04px] relative -top-[48px] left-[28.39px]"
              />
            </div>
            <div className="flex flex-col space-y-[6.33px]">
              <label
                htmlFor="From"
                className="font-[700] text-[14.24px] leading-[17.24px] text-opacity-[64%]"
              >
                From
              </label>
              <DatePicker
                selected={selectedFromDate}
                onChange={handleFromDateChange}
                dateFormat="MMMM d, yyyy"
                placeholderText="Date"
                className="w-[337.28px] h-[60px] rounded-[13.7px] border focus:outline-none pl-[60px]"
              />
              <img
                src={media.datepicker_icon}
                alt="date-picker"
                className="w-[24.33px] h-[27.04px] relative -top-[48px] left-[28.39px]"
              />
            </div>
            <div className="flex flex-col space-y-[6.33px]">
              <label
                htmlFor="To"
                className="font-[700] text-[14.24px] leading-[17.24px] text-opacit-[64%]"
              >
                To
              </label>
              <DatePicker
                selected={selectedToDate}
                onChange={handleToDateChange}
                dateFormat="MMMM d, yyyy"
                placeholderText="Date"
                className="w-[337.28px] h-[60px] rounded-[13.7px] border focus:outline-none pl-[60px]"
              />
              <img
                src={media.datepicker_icon}
                alt="date-picker"
                className="w-[24.33px] h-[27.04px] relative -top-[48px] left-[28.39px]"
              />
            </div>
            <div className="flex flex-col space-y-[6.33px]">
              <label
                htmlFor="Time"
                className="font-[700] text-[14.24px] leading-[17.24px] text-opacity-[64%]"
              >
                Time
              </label>
              <DatePicker
                selected={selectedTime}
                onChange={handleTimeChange}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={10}
                timeCaption="Time"
                dateFormat="h:mm aa"
                placeholderText="Time"
                className="w-[163px] h-[60px] rounded-[13.7px] border focus:outline-none pl-[60px]"
              />
              <img
                src={media.clock}
                alt="date-picker"
                className="w-[24.33px] h-[27.04px] relative -top-[48px] left-[28.39px]"
              />
            </div>
          </div>
          <div className="flex justify-end space-x-[16px] mt-[51px]">
            <div>
              <button className="w-[145px] h-[37.59px] rounded-[10.73px] border pl-[25px] text-[15.32px] font-[600] leading-[18.55px]">
                Reschedule
              </button>
              <img src={media.repeat} alt="" className="relative -top-[28px] left-[16.11px]" />
            </div>
            <button className="w-[125.84px] h-[41.95px] bg-admin-secondary text-primary rounded-[11.98px] text-[17.12px] font-[600] leading-[20.72px]">
              Schedule
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
