import { media } from '../assets'

export const SuccessfulRegistration = () =>{
    return (
        <div className="relative bg-success bg-no-repeat bg-cover object-none bg-left filter md:filter-none z-0 w-[100%] h-[1117px]">
            <div className="red-gradient bg-no-repeat bg-cover w-[100%] h-[1117px]">
                <div>
                    <img src={`${media.whiteLogo}`} alt="LOGO" className='absolute w-[221px] h-[90px] bottom-[39px] right-[35px]'/>
                </div>

                <div className="absolute flex flex-col items-center top-28 w-[593px] h-[656.7px] white-gradient rounded-[67.49px] opacity-100 mr-[542px] ml-[542px] mb-[182px]">
                    <h2 className="text-primary text-4xl font-bold mt-28">Great!</h2>
                    <p className="text-center text-primary mt-[21.52px] text-xm">You have successfully Registered. <br />
                        You will receive a Confirmation <br />
                        Email from MCSS
                    </p>
                    <img src={`${media.checkmark}`} alt="" className="mt-[18.44px]" />
                    <button className="register-form-submit text-primary font-bold mt-[28.7px] text-center rounded-[12.7px] leading-5 py-3 px-6">MCSS</button>
                </div>
            </div>
        </div>
    )
}