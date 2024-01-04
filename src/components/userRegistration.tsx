
import { useRef } from "react"
import React from "react";
import { styles } from "../styles"

export const UserRegistration = () => {
    const uploadedImage = useRef(null);
    const imageUploader = useRef(null)

    const handleImageUpload = (e: React.ChangeEvent<HTMLFormElement>) => {
        const [ file ] = e.target.files;

        if( file ){
            const reader = new FileReader();
            const { current } = uploadedImage;
            current.file = file;
            reader.onload = (e: React.ChangeEvent<HTMLFormElement>) => {
                current.src = e.target.result
            }
        }
    }


    return (
        <div className="absolute ml-16 mt-[40px] flex justify-center ">
            <div className="ml-[192px]">
                <img src="" alt="" className="h-[719px] w-[449px] border rounded-[50px] border-solid"/>
            </div>
            <div className="ml-36 flex-1">
                <strong className="text-7xl text-primary mt-15">Register</strong>
                <p className="text-primary mt-2 mb-2 text-4xl">Fill out this form to become a Volunteer</p>
            <form>
                <div>

                    <input 
                    type="file" 
                    accept="image/*"
                    onChange={handleImageUpload}
                    ref={imageUploader}
                    className={`${styles.imageUploader}`}/>
                    <div onClick={() => imageUploader.current.click()}>
                        <img 
                        ref={uploadedImage}

                        alt="" />
                    </div>
                </div>
            </form>
            </div>
        </div>
    )
}