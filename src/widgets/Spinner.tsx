import { media } from "../assets"

export const Spinner = () => {
    return (
        <div className="flex justify-center items-center">
            <img src={`${media.mcss}`} alt="Loading..." className="w-[24px] h-[24px] animate-spin"/>
        </div>
    )
}