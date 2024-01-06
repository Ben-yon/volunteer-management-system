//import React from "react";
import { useLocation } from "react-router-dom";
import { styles } from "../styles";

export const ViewUserDetail = () => {
    const { state } = useLocation()
    const { formData, imageState } = state;

    return (
        <div className="relative bg-details bg-no-repeat bg-cover filter md:filter-none z-0 w-[100%] h-[1117px]">
            <div className="red-gradient bg-no-repeat bg-cover w-[100%] h-[1117px]">
                <div>
                    <img src="/src/assets/img/White 1.png" alt="LOGO" className='absolute w-[221px] h-[90px] bottom-[39px] right-[35px]'/>
                </div>

                <div className="absolute flex flex-col items-center top-28 w-[680px] h-[752.56px] white-gradient rounded-[67.49px] opacity-100 mr-[542px] ml-[542px] mb-[182px]">
                    <div className="mt-[54.4px] items-center">
                        <p className="text-white text-center text-4xl font-bold">Review Your <br/> Information</p>
                        <p className="text-white text-center text-xl font-normal">Please take a moment to review <br/> the information you've entered</p>
                    </div>
                    <div>
                        <div>
                            <img src={imageState.previewSrc} alt="avatar" className={`${styles.imageUploader} mb-2`} />
                        </div>
                        <p className="text-primary text-center text-2xl font-bold">{ formData?.firstName} { formData?.lastName } </p>
                        <p className="text-primary text-center text-2xl">{ formData?.date }</p>
                        <p className="text-primary text-center text-2xl">{ formData?.daysOfMonth} Days per Month</p>
                        <p className="text-primary text-center text-2xl">{ formData?.address}</p>
                        <p className="text-primary text-center text-2xl">{ formData?.streetAddress} {formData?.city}</p>
                        <p className="text-primary text-center text-2xl">{ formData?.province}</p>
                        <p className="text-primary text-center text-2xl">{ formData?.country}</p>
                        <p className="text-primary text-center text-2xl font-bold">{ formData?.skills}</p>
                    </div>
                    <button className="register-form-submit text-primary font-bold mt-[28.7px] text-center rounded-[12.7px] leading-5 py-3 px-6">Submit</button>
                    <button className=" border rounded-full w-[30px] h-[30px] p-6 bg-primary mt-[16.03px]">&lt;</button>
                </div>

            </div>
        </div>
    )

}