import { media } from "../../assets";

export const AdminPasswordReset = () => {
  return (
    <div className="relative bg-admin bg-no-repeat bg-cover filter md:filter-none z-0 w-[100%] h-[100vh]">
      <div className="bg-primary opacity-90 bg-no-repeat bg-cover w-[100%] h-[100vh]">
        <img
          src={`${media.redLogo}`}
          alt=""
          className="absolute top-10 left-2 h-[90px] w-[220px]"
        />
        <div className="flex flex-col justify-center items-center min-h-screen">
          <h2 className=" flex flex-col items-start text-4xl font-bold">
            Enter your Email
          </h2>
          <span className="relative -left-36 mt-2">Enter your email to reset Password.</span>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              className=" bg-gray-100 w-[589px] h-[74px] rounded-[23px] px-4 text-xl mt-[15px]"
              placeholder="Email"
            />
            <button className="bg-tertiary w-[159px] h-[74px] rounded-[23px] text-primary font-bold text-xl">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};
