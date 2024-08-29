import { useState } from "react";
import { media } from "../../assets";

export const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [ confirmPassword, setConfirmPassword ] = useState("");
  const [ showOldPassword, setShowOldPassword ] = useState(false);
  const [ showNewPassword, setShowNewPassword ] = useState(false);
  const [ showConfirmPassword, setShowConfirmPassword ] = useState(false);
  const [checks, setChecks] = useState({
    minLength: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasSpecialChar: false,
    hasNumber: false,
  });

  const onShowOldPassword = () =>{
    setShowOldPassword(!showOldPassword);
  }
  const onShowNewPassword = () =>{
    setShowNewPassword(!showNewPassword);
  }
  const onShowConfirmPassword = () =>{
    setShowConfirmPassword(!showConfirmPassword);
  }

  const specialCharacters = /[!@#$%^&*(),.?":{}|<>]/;

  const validatePassword = (password: string) => {
    const minLength = password.length >= 7;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasSpecialChar = specialCharacters.test(password);
    const hasNumber = /\d/.test(password);

    setChecks({
      minLength,
      hasUpperCase,
      hasLowerCase,
      hasSpecialChar,
      hasNumber,
    });
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };
  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const confirmPassword = event.target.value;
    setConfirmPassword(confirmPassword);
    // validatePassword(newPassword);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center relative top-[53px]">
        <form action="">
          <h1 className="font-[600] text-[20px] leading-[24.2px] text-center">
            Change Password
          </h1>
          <div className="flex flex-col mb-[5px] mt-[21px]">
            <label
              htmlFor="Old Password"
              className="font-[600] text-[17px] leading-[20.57px] text-gray-500"
            >
              Old Password
            </label>
            <input
              type={showOldPassword ? "text" : "password" }
              className="w-[360px] h-[40px] border-[1px] rounded-[8px] bg-image-card text-[15px] font-[500] leading-[18.15px] pl-[9px]"
            />
          </div>
          <div className="absolute right-[270px] top-[80px]" onClick={() => onShowOldPassword()}>
            {
              showOldPassword ?
              <img src={media.open_eye} alt="" />
              :
              <img src={media.closed_eye} alt="" />
            }
          </div>
          <div className="flex flex-col mt-[33px]">
            <label
              htmlFor="New Password"
              className="font-[600] text-[17px] leading-[20.57px] text-gray-500"
            >
              New Password
            </label>
            <input
              type={showNewPassword ? "text" : "password" }
              value={password}
              onChange={handlePasswordChange}
              className="w-[360px] h-[40px] border-[1px] rounded-[8px] bg-image-card text-[15px] font-[500] leading-[18.15px] pl-[9px]"
            />
          </div>
          <div className="relative -right-[330px] -top-[25px]" onClick={() => onShowNewPassword()}>
            {
              showNewPassword ?
              <img src={media.open_eye} alt="" />
              :
              <img src={media.closed_eye} alt="" />
            }
          </div>
          <span className="text-gray-300 font-[500] text-[11.76px] leading-[14.23px] tracking-[-3%]">
            Please add all necessary characters to create safe password.
          </span>
          <ul className="list-disc flex flex-col mt-[20px] text-gray-400 font-[500] text-[11.76px] leading-[14.23px] tracking-[-3%] relative left-[15px]">
            <li style={{ color: checks.minLength ? "green" : "red" }}>
              Minimum characters 7
            </li>
            <li style={{ color: checks.hasUpperCase ? "green" : "red" }}>
              One uppercase character
            </li>
            <li style={{ color: checks.hasLowerCase ? "green" : "red" }}>
              One lowercase character
            </li>
            <li style={{ color: checks.hasSpecialChar ? "green" : "red" }}>
              One special character
            </li>
            <li style={{ color: checks.hasNumber ? "green" : "red" }}>
              One number
            </li>
          </ul>
          <div className="flex flex-col mt-[26.36px]">
            <label
              htmlFor="Confirm Password"
              className="font-[600] text-[17px] leading-[20.57px]"
            >
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="w-[360px] h-[40px] border-[1px] rounded-[8px] bg-image-card text-[15px] font-[500] leading-[18.15px] pl-[9px]"
            />
          </div>
          <div className="relative -right-[330px] -top-[25px]" onClick={() => onShowConfirmPassword()}>
            {
              showConfirmPassword ?
              <img src={media.open_eye} alt="" />
              :
              <img src={media.closed_eye} alt="" />
            }
          </div>
        </form>
        <button className="w-[360px] h-[40px] bg-admin-secondary text-primary rounded-[8px] mt-[58px] font-[600] text-[15px] leading-[18.15px]">
          Change Password
        </button>
        <a
          href=""
          className="text-[17px] font-[600] leading-[20.57px] mt-[123px] text-admin-secondary underline"
        >
          Forgot Password?
        </a>
      </div>
    </div>
  );
};
