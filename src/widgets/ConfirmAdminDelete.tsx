import { useNavigate } from "react-router-dom";
import { BasicModalProps } from "../interfaces/ModalProps";
import { CloseIcon } from "./CloseIcon";

export const ConfirmAdminDelete: React.FC<BasicModalProps> = ({closeModal}) => {

    const navigate = useNavigate()

    return (
        <div
          className="relative z-10"
          aria-labelledby="change-profile-dialog"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0  bg-opacity-75 transition-all backdrop-blur-sm"></div>
          <div className="fixed top-44 inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex h-[600px] justify-center px-2 py-12 text-center ">
              <div className="relative w-[95%] sm:w-[713.56px] min-h-[48vh] rounded-[80px] border-[2px] bg-primary text-black text-left shadow-md transition-all">
                <div className="px-5 py-4 flex flex-col items-center justify-center">
                  <h2 className="font-[700] text-[28.37px] leading-[34.33px] mt-[132.8px]">
                    Account Deleted
                  </h2>
                  <p className="w-[459px] h-[81px] font-[500] text-[20px] leading-[24.2px] text-center mt-[27.73px]">
                    You have successfully <br /> 
                    deleted your account.
                  </p>
                  <div className="flex space-x-[23.95px] mt-[35.17px]">
                    <button
                      className="w-[168.3px] h-[46.58px] text-[14.56px] font-[700] leading-[17.62px] rounded-[14.45px] bg-secondary text-primary"
                      onClick={() => navigate('/admin')}
                    >
                      MCSS Admin
                    </button>
                  </div>
    
                  <button
                    type="button"
                    className="rounded-md p-1 inline-flex items-center justify-center text-gray-400 focus:outline-none absolute -top-1 -right-1"
                    onClick={closeModal}
                  >
                    <span className="sr-only">Close menu</span>
                    <CloseIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}