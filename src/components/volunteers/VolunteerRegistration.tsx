import { media } from "../../assets";
import { LanguageSelect } from "../LanguageSelect";
import monthsOfYear from "../../utils/months.json";
import { ChangeEvent, useState } from "react";
import { MonthsInterface } from "../../interfaces/MonthsInterface";
import { useFormValidation } from "../../utils/validate";
import { useLocation, useNavigate } from "react-router-dom";

export const VolunteerRegistration = () => {
  const [selectedMonth, setSelectedMonth] = useState("");
  const { state } = useLocation();
  const { profilePicture } = state;

  const navigate = useNavigate()


  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(e.target.value);
  };

  const months: Array<MonthsInterface> = monthsOfYear;

  const month = months.find((month) => month.name === selectedMonth);

  const options = [];
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-expect-error
  for (let i = 1; i <= month?.days; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  const validationRules = {
    firstName: { required: true, minLength: 2 },
    lastName: { required: true, minLength: 2 },
    dateOfBirth: { required: true },
    daysAvailable: { required: true, isNumber: true, isDayOfWeek: true },
    contact: { required: true },
    email: { required: true, email: true },
    address: { required: true },
    city: { required: true },
  };

    const { values, errors, handleChange, validate } = useFormValidation(
    {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      daysAvailable: "",
      address: "",
      contact: "",
      email: "",
      city: "",
    },
    validationRules
  );

  const nextPage = () => {
    if(validate()){
      navigate('/volunteer-register-other', {state: { values: values, profilePicture: profilePicture}})
    }
  }

  return (
    <div className="relative filter min-h-screen w-[100vw] lg:h-[950px] md:h-[1285px] sm:h-[100%] xsm:h-[100%] lg:bg-hero md:bg-hero sm:bg-hero xsm:bg-hero-xsm bg-no-repeat bg-cover lg:filter md:filter-none z-0 sm:overflow-none">
      <div className="red-gradient bg-no-repeat bg-cover w-[100vw] h-full">
        <div className="absolute top-8 right-16 z-10 text-primary flex space-x-1">
          <img
            src={media.lang_white}
            alt="language"
            className="w-[31px] h-[29.1px] lg:w-[31px] lg:h-[29.1px] md:w-[31px] md:h-[29.1px] sm:w-[31px] sm:h-[29.1px] xsm:w-[14.2px] xsm:h-[14.0px]"
          />
          <LanguageSelect />
        </div>
        <div className="">
          <img
            src={`${media.whiteLogo}`}
            alt="LOGO"
            className="absolute w-[221px] h-[90px] right-[35px] bottom-[30px] lg:absolute lg:w-[221px] lg:h-[90px] lg:bottom-[30px] lg:right-[35px] md:absolute md:w-[133px] md:h-[55px] md:bottom-[32px] md:right-[31px]  sm:absolute sm:w-[133px] sm:h-[55px] sm:bottom-[32px] sm:right-[31px] xsm:absolute xsm:w-[133px] xsm:h-[55px] xsm:bottom-[2%] xsm:right-[31px]"
          />
        </div>
        <div className="flex flex-col items-center justify-center relative top-[85px]">
          <h1 className="text-primary font-[700] text-[43.05px] leading-[52.09px]">
            Register
          </h1>
          <p className="text-primary font-[500] mt-[5px] text-[25px] leading-[30.26px] text-center">
            Fill out this form to become a Volunteer
          </p>
          <div className="w-[894px] h-[791px] rounded-[33px] bg-primary mt-[25px] flex flex-col items-center">
            <div className="flex mt-[56px] space-x-[36px]">
              <div className="flex flex-col">
                <label
                  htmlFor="firstName"
                  className="text-[20px] font-[500] leading-[24.2px]"
                >
                  First Name
                </label>
                <input
                  type="text"
                  value={values.firstName}
                  className="w-[336px] h-[58px] rounded-[16px] mt-[4px] bg-image-card text-[20px] text-input-color font-[600] leading-[24.2px] focus:outline-none pl-[15px]"
                  placeholder="First Name"
                  onChange={handleChange}
                  name="firstName"
                />
                {errors.firstName && (
                  <span className="text-secondary text-[10px]">
                    {errors.firstName}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="lastName"
                  className="text-[20px] font-[500] leading-[24.2px]"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-[336px] h-[58px] rounded-[16px] mt-[4px] bg-image-card text-[20px] text-input-color font-[600] leading-[24.2px] focus:outline-none pl-[15px]"
                  placeholder="Last Name"
                  value={values.lastName}
                  name="lastName"
                  onChange={handleChange}
                />
                {errors.lastName && (
                  <span className="text-secondary text-[10px]">
                    {errors.lastName}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col mt-[37px] relative -left-[70px]">
              <label
                htmlFor="dateOfBirth"
                className="text-[20px] font-[500] leading-[24.2px]"
              >
                Date of Birth
              </label>
              <div className="flex space-x-[11px] mt-[4px]">
                <select
                  className="bg-image-card w-[210px] h-[58px] rounded-[16px] text-[20px] font-[600] text-input-color leading-[24.2px] pl-[15px]"
                  value={selectedMonth}
                  name="month"
                  onChange={handleSelectChange}
                >
                  <option
                    value=""
                    disabled
                    defaultValue=""
                    className=" text-[20px] "
                  >
                    Month
                  </option>
                  {months.map((month) => (
                    <option value={month.name}>{month.name}</option>
                  ))}
                </select>
                <select
                  className="bg-image-card w-[135px] h-[58px] rounded-[16px] text-[20px] font-[600] leading-[24.2px] text-input-color pl-[15px]"
                  value={selectedMonth}
                  onChange={handleSelectChange}
                >
                  <option value="" selected disabled>
                    Day
                  </option>
                  {options}
                </select>
                <select className="w-[210px] h-[58px] rounded-[16px] text-[20px] font-[600] leading-[24.2px] text-input-color bg-image-card pl-[15px]">
                  <option value="">Year</option>
                </select>
              </div>
            </div>
            <div className="flex mt-[34px] space-x-[36px]">
              <div className="flex flex-col">
                <label
                  htmlFor="availability"
                  className="text-[20px] font-[500] leading-[24.2px]"
                >
                  Availability
                </label>
                <input
                  type="text"
                  className="w-[336px] h-[58px] rounded-[16px] mt-[4px] bg-image-card text-[20px] text-input-color font-[600] leading-[24.2px] focus:outline-none pl-[15px]"
                  placeholder="Number of Days of Available"
                  value={values.daysAvailable}
                  name="daysAvailable"
                  onChange={handleChange}
                />
                {errors.daysAvailable && (
                  <span className="text-secondary text-[10px]">
                    {errors.daysAvailable}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="contact"
                  className="text-[20px] font-[500] leading-[24.2px]"
                >
                  Contact
                </label>
                <input
                  type="text"
                  className="w-[336px] h-[58px] rounded-[16px] mt-[4px] bg-image-card text-[20px] text-gray-50 font-[600] leading-[24.2px] focus:outline-none pl-[15px]"
                  placeholder="Contact"
                  value={values.contact}
                  name="contact"
                  onChange={handleChange}
                />
                {errors.contact && (
                  <span className="text-secondary text-[10px]">
                    {errors.contact}
                  </span>
                )}
              </div>
            </div>
            <div className="flex mt-[34px] space-x-[36px]">
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-[20px] font-[500] leading-[24.2px]"
                >
                  Email
                </label>
                <input
                  type="text"
                  className="w-[336px] h-[58px] rounded-[16px] mt-[4px] bg-image-card text-[20px] text-input-color font-[600] leading-[24.2px] focus:outline-none pl-[15px]"
                  placeholder="Email"
                  value={values.email}
                  name="email"
                  onChange={handleChange}
                />
                {errors.email && (
                  <span className="text-secondary text-[10px]">
                    {errors.email}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="city"
                  className="text-[20px] font-[500] leading-[24.2px]"
                >
                  City
                </label>
                <input
                  type="text"
                  className="w-[336px] h-[58px] rounded-[16px] mt-[4px] bg-image-card text-[20px] text-input-color font-[600] leading-[24.2px] focus:outline-none pl-[15px]"
                  placeholder="City"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                />
                {errors.city && (
                  <span className="text-secondary text-[10px]">
                    {errors.city}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col mt-[37px]">
              <label
                htmlFor="address"
                className="text-[20px] font-[500] leading-[24.2px]"
              >
                Address
              </label>
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={values.address}
                onChange={handleChange}
                className="w-[729px] h-[58px] rounded-[16px] mt-[4px] bg-image-card text-[20px] text-input-color font-[600] leading-[24.2px] focus:outline-none pl-[15px]"
              />
              {errors.address && (
                <span className="text-secondary text-[10px]">
                  {errors.address}
                </span>
              )}
            </div>
            <button className="w-[729px] h-[58px] mt-[30px] rounded-[16px] bg-secondary text-primary text-[25px] font-[700] leading-[30.26px] text-center" onClick={() => nextPage()}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
