import React, { useRef, useState } from "react"
import { styles } from "../styles"
import { ImageUploadStore } from "../interfaces/imageUploadInterface";


export const UserRegistration = () => {
    const imageUploader = useRef<HTMLImageElement>(null);
    const uploadedImageRef = useRef<HTMLImageElement>(null);
    const [ imageState, setImageState ] = useState<ImageUploadStore>({
        file: null,
        previewSrc: null,
    });

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const [ file ] = e.target.files;
    
        if( file ){
            const reader = new FileReader();
    
            if (uploadedImageRef.current) {
                setImageState({...imageState, file})
            }
            reader.onload = (e: React.ProgressEvent<FileReader>) => {
                uploadedImageRef.current.src = e.target.result as string;
                setImageState({ ...imageState, previewSrc: e.target.result as string })
            };
            reader.readAsDataURL(file);
            
        }
    }

    const handleInValidFile = (e: React.ChangeEvent<HTMLInputElement>) => {

        if (!e.target.files[0].type.match(/^image\//)) {
            alert('Only image file are accepted!');
            setImageState({ ...imageState, file: null, previewSrc: null })
        }
    }



    return (
        <div className="absolute ml-16 mt-[40px] flex justify-center">
            <div className="ml-[192px]">
                <img src="" alt="" className="h-[719px] w-[449px] border rounded-[50px] border-solid"/>
            </div>
            <div className="ml-36 flex-1">
                <strong className="text-7xl text-primary mt-15">Register</strong>
                <p className="text-primary mt-2 mb-2 text-4xl">Fill out this form to become a Volunteer</p>
            <form>
                <div className="absolute mt-[35px] flex ">
                    <input 
                    type="file" 
                    accept="image/*"
                    onChange={(e) => {
                        handleImageUpload(e);
                        handleInValidFile(e);
                    }}
                    ref={imageUploader}
                    style={{ display: "none"}}
                    />
                    <div onClick={() => imageUploader.current.click()} className="mr-32">
                        <img src="/src/assets/icons/avatar-icon.png" alt="default" className={`${styles.imageUploader} absolute`}/>
                        <img 
                        ref={uploadedImageRef}
                        src={imageState.previewSrc}
                        // alt="Upload Image" 
                        className={`${styles.imageUploader} absolute`}
                        />
                    </div>
                    <div className="ml-32">
                        <input 
                            type="text" 
                            name="" id="" 
                            className="w-[295px] h-[54px] border rounded-[15px] text-2xl text-white placeholder-gray-300 p-3" 
                            placeholder="First Name"
                            />
                        <input type="text" 
                            name="" 
                            id=""
                            className="w-[295px] h-[54px] border rounded-[15px] mt-[15px] text-2xl text-white placeholder-gray-300 p-3" 
                            placeholder="Last Name"
                            />
                    </div>
                </div>
                <input type="text" className="w-[295px] h-[54px] border rounded-[15px] mt-[15px] text-2xl mt-56"/>
            </form>
            </div>
        </div>
    )
}