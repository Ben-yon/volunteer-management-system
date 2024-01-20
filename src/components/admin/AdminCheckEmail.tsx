import { media } from "../../assets";

export const AdminCheckEmail = () => {
  return (
    <div className="relative bg-admin bg-no-repeat bg-cover filter md:filter-none z-0 w-[100%] h-[1117px]">
      <div className="bg-primary opacity-95 bg-no-repeat bg-cover w-[100%] h-[1117px]">
        <img
          src={`${media.redLogo}`}
          alt=""
          className="absolute top-10 left-2 h-[90px] w-[220px]"
        />
        <div className="relative top-64  flex flex-col justify-center items-center">
          <img src={`${media.envelope}`} alt="" />
          <span className="text-3xl font-bold mt-3">Check your mail</span>
          <p className="text-xs mt-2">
            We have sent a password recover instructions to your email
          </p>
          <button className="w-[200px] h-[75px] rounded-[20px] bg-tertiary font-bold text-2xl text-primary mt-3">
            Open Email
          </button>
          <p className="text-xs mt-2"> <a href="#">Skip, I’ll confirm later</a></p>
        </div>
      </div>
    </div>
  );
};
