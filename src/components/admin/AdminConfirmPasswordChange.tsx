import { media } from "../../assets";

export const AdminConfirmPasswordChange = () => {
  return (
    <div className="relative bg-admin bg-no-repeat bg-cover filter md:filter-none z-0 w-[100%] h-[1117px]">
      <div className="bg-primary opacity-90 bg-no-repeat bg-cover w-[100%] h-[1117px]">
        <img
          src={`${media.redLogo}`}
          alt=""
          className="absolute top-10 left-2 h-[90px] w-[220px]"
        />
        <div className="relative top-64 flex  flex-col justify-center items-center">
          <img
            src={`${media.passwordChanged}`}
            alt=""
            className="w-[306px] h-[306px]"
          />
          <span className="text-4xl font-bold">Password <br /> Changed!</span>
          <p className="text-xl">Your password have been changed successfully.</p>
          <button className="bg-last w-[276px] h-[76px] rounded-[24px] text-primary mt-4">Return to MCSS</button>
        </div>
      </div>
    </div>
  );
};
