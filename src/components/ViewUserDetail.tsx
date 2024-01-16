//import React from "react";
import { useLocation, useNavigate, } from "react-router-dom";
import { styles } from "../styles";
import { media } from "../assets";


export const ViewUserDetail = () => {
    const { state } = useLocation()
    const { formData, imageState } = state;

    const navigate = useNavigate()

    const handleSubmit = () => {
        navigate('/successful-registration')
    }

    return (
        <div className="lg:relative bg-details bg-no-repeat bg-cover lg:filter md:filter-none z-0 lg:w-[100%] lg:h-[100vh] md:w-[100vw] md:h-[100vh] sm:w-[654px] sm:overflow-none ">
            <div className="red-gradient bg-no-repeat bg-cover lg:w-[100%] lg:h-[100vh] sm:relative xsm:h-[100vh]">
                <div>
                    <img src={`${media.whiteLogo}`} alt="LOGO" className='lg:absolute lg:w-[221px] lg:h-[90px] lg:bottom-[39px] lg:right-[35px] sm:absolute sm:w-[133px] sm:h-[55px] sm:bottom-[32px] sm:right-[31px] xsm:absolute xsm:w-[133px] xsm:h-[55px] xsm:bottom-[2%] xsm:right-[31px]'/>
                </div>

                <div className="lg:relative lg:flex lg:flex-col lg:items-center lg:justify-center lg:top-20 top-[182px] lg:w-[580px] lg:h-[552.56px] white-gradient rounded-[67.49px] opacity-100 m-auto md:w-[476px] md:h-[527.25px] md:top-[270px] xsm:w-[277px] xsm:h-[342px] xsm:rounded-[47.1px] xsm:relative xsm:top-[163.43px] xsm:flex xsm:flex-col xsm:items-center">
                    <div className="lg:mt-[65.54px] items-center">
                        <p className="text-white text-center text-3xl font-bold xsm:text-xl xsm:mt-9">Review Your <br/> Information</p>
                        <p className="text-white text-center text-xs font-normal">Please take a moment to review <br/> the information you've entered</p>
                    </div>
                    <div className="items-center">
                        <div>
                            <img src={imageState.previewSrc} alt="" className={imageState.previewSrc ? `${styles.imageUploader} mb-2 ml-14 mt-3 xsm:ml-7 xsm:w-[52.49px] xsm:h-[52.49px] border-4` : ''} />
                        </div>
                        <p className="text-primary text-center text-2xl font-bold xsm:text-xl">{ formData?.firstName} { formData?.lastName } </p>
                        <p className="text-primary text-center text-2xl xsm:text-xl">{ formData?.date }</p>
                        <p className="text-primary text-center text-2xl xsm:text-xl">{ formData?.daysOfMonth } { formData.daysOfMonth ? <span>Days per Month</span> : ""} </p>
                        <p className="text-primary text-center text-2xl xsm:text-xl">{ formData?.address }</p>
                        <p className="text-primary text-center text-2xl xsm:text-xl">{ formData?.streetAddress } { formData?.city }</p>
                        <p className="text-primary text-center text-2xl xsm:text-xl">{ formData?.province }</p>
                        <p className="text-primary text-center text-2xl xsm:text-xl">{ formData?.country }</p>
                        <p className="text-primary text-center text-2xl font-bold xsm:text-xl">{ formData?.skills }</p>
                    </div>
                    <button className="register-form-submit lg:text-primary lg:h-14 lg:w-32 lg:font-bold lg:mt-[28.7px] lg:text-center lg:rounded-[12.7px] lg:leading-5 lg:py-5 lg:text-xl lg:px-8 xsm:rounded-[6px] xsm:w-[62.04px] xsm:text-xs xsm:px-2 xsm:py-2 xsm:text-primary xsm:font-bold xsm:mt-[18.5px]"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                    <button className="rounded-full w-[10px] h-[10px] p-4 bg-primary mt-[16.03px] font-bold flex  justify-center items-center" onClick={() => navigate(-1)}>&lt;</button>
                </div>

            </div>
        </div>
    )

}