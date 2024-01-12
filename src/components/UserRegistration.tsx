import React, { FormEvent, useRef, useState } from "react"
import { styles } from "../styles"
import { ImageUploadStore } from "../interfaces/ImageUploadInterface";
import { FormDataInterface } from "../interfaces/FormDataInterface";
import { useNavigate } from "react-router-dom";
import { ImageSlideshow } from "../widgets/ImageSlideshow";
import { media } from '../assets';


export const UserRegistration = () => {
    const imageUploader = useRef<HTMLInputElement>(null);
    const uploadedImageRef = useRef<HTMLImageElement | null>(null);
    const [ imageState, setImageState ] = useState<ImageUploadStore>({
        file: null,
        previewSrc: undefined,
    });


    const navigate = useNavigate();

    const [ formData, setFormData ] = useState<FormDataInterface>({
        firstName: '',
        lastName: '',
        date: '',
        daysOfMonth: '',
        address: '',
        streetAddress: '',
        city: '',
        province: '',
        postalCode: '',
        occupation: '',
        skills: '',
        interest: ''
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [event.target.name ]: event.target.value })
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
        navigate('/view-user-details', { state: {formData, imageState} });
    }

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
        
        const file  = e.target.files?.[0];
        

        if( file ){
            const reader = new FileReader();
    
            if (uploadedImageRef.current) {
                setImageState({...imageState, file})
            }
            reader.onload = (e: ProgressEvent<FileReader>) => {
                if (!uploadedImageRef.current) return
                uploadedImageRef.current.src = e.target?.result as string;
                setImageState({ ...imageState, previewSrc: e.target?.result as string })
            };
            reader.readAsDataURL(file);
            
        }
    }

    const handleInValidFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        if (!e.target.files[0].type.match(/^image\//)) {
            alert('Only image files are accepted!');
            setImageState({ ...imageState, file: null, previewSrc: undefined })
        }
    }

    return (
    <div className="relative bg-hero bg-no-repeat bg-cover filter md:filter-none z-0 w-[100%] h-[1117px] ">
      <div className="red-gradient bg-no-repeat bg-cover w-[100%] h-[1117px] sm:relative">
        <div className="">
            <img src={`${media.whiteLogo}`} alt="LOGO" className='absolute w-[221px] sm:w-[133px] sm:h-[55px] h-[90px] bottom-[39px] right-[35px]'/>
        </div>
        <div className="relative flex items-center justify-center top-[500px]">
            <div className="absolute m-auto flex sm:flex-col sm:space-y-8 space-x-16">
                <div className="sm:abolute sm:top-0">
                    <ImageSlideshow images={[`${media.slide1}`, `${media.slide2}`, `${media.slide3}`]}/>
                </div>
                <div className="ml-36 flex-1">
                    <strong className="text-7xl text-primary mt-15 sm:text-4xl">Register</strong>
                    <p className="text-primary mt-2 mb-2 text-xl sm:text-xs">Fill out this form to become a Volunteer</p>
                <form onSubmit={handleSubmit}>
                    <div className="absolute mt-[35px] flex flex-col mr-[32px]">
                        <div>
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
                            <div onClick={() => {if(!imageUploader.current) return; imageUploader.current.click()}}>
                                <img src={`${media.upload}`} className={`${styles.imageUploader} absolute `}/>
                                <img 
                                ref={uploadedImageRef}
                                src={imageState.previewSrc}
                                // alt="Upload Image" 
                                className={`${styles.imageUploader} absolute`}
                                />
                            </div>
                        </div>
                        <div className="ml-40">
                            <input 
                                type="text" 
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-[295px] focus:outline-none h-[54px] sm:h-[37.5px] sm:rounded-[10px] border rounded-[15px] text-2xl sm:text-xs text-white placeholder-gray-300 p-3" 
                                placeholder="First Name"
                                />
                            <input type="text" 
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange} 
                                className="w-[295px] h-[54px] focus:outline-none sm:h-[37.5px] sm:rounded-[10px] border rounded-[15px] mt-[15px] text-2xl sm:text-xs text-white placeholder-gray-300 p-3" 
                                placeholder="Last Name"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex">
                            <input type="text"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="w-[181px] sm:w-[141.12px] h-[54px] sm:h-[37.23px] focus:outline-none sm:rounded-[10.42px] border rounded-[15px] text-xl sm:text-xs mt-48 text-white placeholder-gray-300 p-2 mr-[24px]"
                                placeholder="DD/MM/YYYY"
                            />
                            <input 
                                type="text" 
                                name="daysOfMonth"
                                value={formData.daysOfMonth}
                                onChange={handleChange}
                                className="w-[253px] sm:w-[148.05px] h-[54px] sm:h-[37.5px] border rounded-[15px] sm:rounded-[10.42px] text-xl sm:text-xs mt-48 text-white placeholder-gray-300 p-3 leading-6"
                                placeholder="Days per month"
                            />
                        </div>

                        <input type="text" 
                                className="w-[716px] sm:w-[514.27px] sm:h-[37.23px] sm:rounded-[10.42px] focus:outline-none h-[54px] rounded-[15px] mt-[15px] text-xl sm:text-xs border text-white placeholder-gray-300 leading-6 p-3"
                                placeholder="Address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange} 
                        />
                        <input type="text" 
                                className="w-[716px] sm:w-[514.27px] sm:h-[37.23px] sm:rounded-[10.42px] focus:outline-none h-[54px] rounded-[15px] mt-[15px] text-xl sm:text-xs border text-white placeholder-gray-300 leading-6 p-3"
                                placeholder="Street Address"
                                name="streetAddress"
                                value={formData.streetAddress}
                                onChange={handleChange} 
                        />
                        <div className="flex">
                            <input 
                                type="text" 
                                className="w-[282px] sm:w-[243.28px] h-[54px] sm:h-[37.23px] sm:rounded-[10.42px] sm:text-xs border rounded-[15px] mt-[15px] mr-[20px] text-xl text-white placeholder-gray-300 p-3 leading-6"
                                placeholder="City"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                            />
                            <input 
                                type="text" 
                                className="w-[420px] sm:w-[259.73px] h-[54px] sm:h-[37.23px] sm:rounded-[10.42px] sm:text-xs border rounded-[15px] mt-[15px] text-xl text-white placeholder-gray-300 p-3 leading-6"
                                placeholder="State/Province/Region"
                                name="province"
                                value={formData.province}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex">
                            <input 
                                type="text" 
                                className="w-[282px] sm:w-[243.28px] h-[54px] sm:h-[37.23px] sm:rounded-[10.42px] sm:text-xs border rounded-[15px] mt-[15px] mr-[20px] text-xl text-white placeholder-gray-300 p-3 leading-6"
                                placeholder="ZIP / Postal Code"
                                name="postalCode"
                                value={formData.postalCode}
                                onChange={handleChange}
                            />
                            <input 
                                type="text" 
                                className="w-[420px] sm:w-[259.73px] h-[54px] sm:h-[37.23px] sm:rounded-[10.42px] sm:text-xs border rounded-[15px] mt-[15px] text-xl text-white placeholder-gray-300 p-3 leading-6"
                                placeholder="Occupation"
                                name="occupation"
                                value={formData.occupation}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex">
                            <input 
                                type="text" 
                                className="w-[282px] sm:w-[243.28px] h-[54px] sm:h-[37.23px] sm:rounded-[10.42px] sm:text-xs border rounded-[15px] mt-[15px] mr-[20px] text-xl text-white placeholder-gray-300 p-3 leading-6"
                                placeholder="Skills"
                                name="skills"
                                value={formData.skills}
                                onChange={handleChange}
                            />
                            <input 
                                type="text" 
                                className="w-[420px] sm:w-[259.73px] h-[54px] sm:h-[37.23px] sm:rounded-[10.42px] sm:text-xs border rounded-[15px] mt-[15px] text-xl text-white placeholder-gray-300 p-3 leading-6"
                                placeholder="Interests"
                                name="interest"
                                value={formData.interest}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <button className="bg-primary px-3 py-2 rounded-[15px] sm:text-xs border text-xl text-secondary mt-[30px] leading-6 font-bold">Next</button>
                </form>
                </div>
            </div>
        </div>
        </div>
    </div>
    )
}