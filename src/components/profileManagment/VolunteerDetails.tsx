import { useParams } from "react-router-dom"
import data from './../../utils/MOCK_DATA.json'
import { useEffect, useState } from "react";
import { TableData } from "../../interfaces/TablePropsInterface";
import { media } from "../../assets";


export const VolunteerDetails = () => {

    const [userDetails, setUserDetails] = useState<TableData | undefined>({
        id: 0,
        fullname: "",
        jobTitle:"",
        date_of_birth: "string",
        address: "",
        interests: "",
        days_available_per_week: 0,
        availability: "",


    })
    const { id } = useParams();

    const userDetailsSet = data;

    
    useEffect(() => {
        let convertedId = parseInt(id!)
        const user = userDetailsSet.find((user) => user.id == convertedId)
        console.log(user)
        setUserDetails(user);
    },[userDetailsSet, id])


    console.log(id)
    return (
        <div className="block center">
            <p className="text-[#D9D9D9] text-[15px] font-extrabold leading-[18.15px]">
                MCSS Volunteers
            </p>
            <h2 className="text-black font-extrabold text-[27px] leading-[32.68px] pb-6">
                {userDetails?.fullname}
            </h2>
            <div className="w-[371px] h-[393px] rounded-[20px] details-card">
                <span className="text-[10px] flex ml-[33px] relative top-[22px] left-[33px]">
                    <img src={media.birthday} alt="" className="mr-[2.12px] -mt-[2px]" />
                    {userDetails?.date_of_birth}
                </span>
                <p className="text-[35px] relative -right-[285px] -top-[25px] hover:cursor-pointer">...</p>
                <div className="flex flex-col items-center justify-center">
                    <img src={media.upload} alt="profile" className="w-[179px] h-[179px]"/>
                    <p className="text-[25px] leading-[30.26px] font-bold mt-[28px]">{userDetails?.fullname}</p>
                    <p className="text-[12px] leading-[14.52px] mt-[8px]">{userDetails?.jobTitle}</p>
                </div>
            </div>
            <div className="w-[374px] h-[213px] rounded-[20px] details-card-sec mt-[35px] flex flex-col items-center justify-center">
                <div className="flex space-x-2 justify-center items-center">
                    <img src={media.bookLove} alt="" className="w-[57px] h-[57px]"/>
                    <p className="text-primary flex flex-col text-[12px] leading-[14.52px]">
                        <span className="font-bold ">Interests</span>
                        <span>{userDetails?.interests}, reading</span>
                    </p>
                </div>
                <div className="flex justify-center items-center space-x-2 mt-[12px] -ml-10 text-[12px] leading-[14.52px]">
                    <img src={media.location} alt="" className="w-[68px] h-[68px]"/>
                    <div className="text-primary flex flex-col">
                        <h2 className="font-bold">Location</h2> 
                        <span>{userDetails?.address}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}