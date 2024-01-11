import { media } from "../../assets";

export const AdminCreateNewPassword = () => {
  return (
    <div className="relative bg-admin bg-no-repeat bg-cover filter md:filter-none z-0 w-[100%] h-[1117px]">
      <div className="bg-primary opacity-90 bg-no-repeat bg-cover w-[100%] h-[1117px]">
        <img
          src={`${media.redLogo}`}
          alt=""
          className="absolute top-10 left-2 h-[90px] w-[220px]"
        />
        <div className="relative top-64 flex justify-center items-center">
          <div>
            <img
              src={`${media.addPassword}`}
              alt=""
              className="w-[306px] h-[306px]"
            />
          </div>
          <div className="relative -top-3">
            <span className="text-4xl font-bold mb-4">
              Create <br /> new Password{" "}
            </span>
            <p className="text-xs">
              Your new password must be different from <br />
              previous used passwords.
            </p>
            <form action="" className="flex flex-col mt-4">
              <input
                type="text"
                name=""
                className="bg-gray-100 w-[552px] h-[69px] rounded-[20px] px-4"
                placeholder="New Password"
              />
              <input
                type="text"
                name=""
                className="bg-gray-100 w-[552px] h-[69px] rounded-[20px] px-4 mt-3"
                placeholder="Confirm Password"
              />
              <button className="bg-tertiary w-[250px] h-[69px] rounded-[20px] text-primary font-bold mt-4">Reset Password</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
