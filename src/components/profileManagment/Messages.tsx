import { media } from "../../assets"

export const Messages = () => {
    return (
        <div className="flex  flex-col justify-center">
            <p className="text-[#D9D9D9] text-[15px] font-extrabold leading-[18.15px]">
                MCSS Volunteers
            </p>
            <h2 className="text-black font-extrabold text-[27px] leading-[32.68px] pb-6">
                Messaging
            </h2>
            <div className="flex items-center">
                <div className="flex flex-col w-[409px] h-[840px] rounded-[13px] border-[0.5px] shadow-[0px_0px_7.599999904632568px_0px_#00000012]">
                    <div className="relative flex">
                        <img src={media.msg_search} alt="" className="w-[24px] h-[24px] absolute left-[58px] top-[58px]"/>
                        <input type="search" className="w-[261px] h-[45px] rounded-[13px] bg-[#79000017] font-[600] text-[15px] leading-[18.15px] pl-[54px] mt-[46px] ml-[33px] text-[#78000080] placeholder-[#78000080]" placeholder="Search"/>
                        <img src={media.compose} className="w-[38px] h-[38px] relative top-[48px] ml-[34px]" alt="" />
                    </div>
                </div>
                <div>chat room</div>
            </div>
        </div>
    )
};
