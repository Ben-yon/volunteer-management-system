import { media } from "../../assets";



export const AdminRegistrationConfirmation = () => {
  return (
    <div className="relative bg-admin bg-no-repeat bg-cover filter md:filter-none z-0 w-[100%] h-[1117px]">
      <div className="bg-primary opacity-90 bg-no-repeat bg-cover w-[100%] h-[1117px]">
        <img
          src={`${media.redLogo}`}
          alt=""
          className="absolute top-10 left-2 h-[90px] w-[220px]"
        />
        <div className="relative top-72 flex flex-col justify-center items-center">
          <img
            src={`${media.checkcircle}`}
            alt=""
            className="w-[156px] h-[156px] relative "
          />
          <span className="text-tertiary leading-8 text-4xl font-bold">
            Congratulations!
          </span>
          <span className="text-black text-xl leading-7 mt-[22px]">
            Your account has been created successfully!
          </span>
          <button className="w-[285px] h-[79px] bg-black rounded-[25px] text-primary font-bold text-xl mt-[22px]">
            Sign In to MCSS
          </button>
        </div>
      </div>
    </div>
  );
};
