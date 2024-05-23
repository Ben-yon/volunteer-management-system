/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"

export const ProgramDetails: React.FC = () => {

    const navigate = useNavigate();
    const { state } = useLocation();
    const values = state?.values;
    const thumbnail = state?.thumbnail?.current;
    // const descriptionImage = state?.descriptionImage?.current

    // const [ programImages ] = useState([]);


    const formData = new FormData();
    formData.append("Name", values?.name);
    formData.append("Description", values?.description); 

    // const createProgram = () => {
    //     programImages.forEach((_image: any, index: any) => {
    //         formData.append(`ProgrammeImages[${index}].ImageFile`, thumbnail)
    //         formData.append(`ProgrammeImages[${index}].Description`, descriptionImage)
    //     })
    // } 


    return(
        <div className="flex flex-col justify-center">
            <h2 className="font-[700] text-[48.16px] leading-[58.29px] text-black">Overview</h2>
            <div className="flex items-center justify-center mt-[28px] space-x-[52px]">
                <img src={`${thumbnail}`} alt="thumbnail" className="w-[308px] h-[528px] rounded-[30px] object-fill"/>
                <div className="flex flex-col justify-center items-center">
                    <h2 className="font-[500] text-[45px] leading-[54.46px]">{values?.name}</h2>
                    <p className="font-[500] text-[25px] leading-[30.26px] mt-[6px]">{values?.description}</p>
                </div>
            </div>
            <div className="flex space-x-[28px] mt-[25px] justify-end">
                <button className="w-[181.95px] h-[68.5px] bg-black text-primary text-[30px] leading-[36.31px] rounded-[21.41px]" onClick={() => navigate(-1)}>Go Back</button>
                <button className="w-[181.95px] h-[68.5px] bg-admin-secondary text-primary text-[30px] leading-[36.31px] rounded-[21.41px]">Submit</button>
            </div>
        </div>
    )
}