import { useNavigate } from "react-router-dom";
import { media } from '../../assets'

export const AdminLandingPage = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('sign-in')
  };

  const handleSignUp = () => {
        navigate('sign-up')
  };

  return (
    <div className="relative bg-admin bg-no-repeat bg-cover filter md:filter-none z-0 w-[100%] h-[1117px]">
      <div className="bg-primary opacity-90 bg-no-repeat bg-cover w-[100%] h-[1117px]">
        <img
          src={`${media.redLogo}`}
          alt=""
          className="absolute top-10 left-2 h-[90px] w-[220px]"
        />
        <div className="flex justify-center items-center">
          <h2 className="text-tertiary font-bold text-center text-8xl relative top-64 w-64">
            Hello
          </h2>
          <p className="relative top-56 -left-12 text-tertiary text-xl">
            Admin
          </p>
          <div className="absolute top-96">
            <button className="relative px-[40.31px] py-[20.46px] bg-black text-white rounded-[23.85px] font-bold leading-6 mr-[42.37px]"
                    onClick={handleSignIn}
            >
              Sign In
            </button>
            <button className="relative px-[40.31px] py-[20.46px] bg-black text-white rounded-[23.85px] font-bold leading-6"
                onClick={handleSignUp}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
