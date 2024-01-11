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
    <div className="relative bg-hero bg-no-repeat bg-cover filter md:filter-none z-0 w-[100%] h-[1117px]">
      <div className="red-gradient bg-no-repeat bg-cover w-[100%] h-[1117px]">
        <div>
            <img src={`${media.whiteLogo}`} alt="LOGO" className='absolute w-[221px] h-[90px] bottom-[39px] right-[35px]'/>
        </div>
            <div className="absolute ml-16 mt-[40px] flex justify-center">
                <div className="ml-[192px]">
                    <ImageSlideshow images={['/src/assets/img/MLCS-10.jpg', '/src/assets/img/MLCS-80.jpg','/src/assets/img/MLCS-76.jpg']} />
                </div>
                <div className="ml-36 flex-1">
                    <strong className="text-7xl text-primary mt-15">Register</strong>
                    <p className="text-primary mt-2 mb-2 text-xl">Fill out this form to become a Volunteer</p>
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
                                <img src="/src/assets/icons/avatar-icon.png" className={`${styles.imageUploader} absolute `}/>
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
                                className="w-[295px] h-[54px] border rounded-[15px] text-2xl text-white placeholder-gray-300 p-3" 
                                placeholder="First Name"
                                />
                            <input type="text" 
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange} 
                                className="w-[295px] h-[54px] border rounded-[15px] mt-[15px] text-2xl text-white placeholder-gray-300 p-3" 
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
                            className="w-[181px] h-[54px] border rounded-[15px] text-xl mt-56 text-white placeholder-gray-300 p-2 mr-[24px]"
                            placeholder="DD/MM/YYYY"
                        />
                        <input 
                            type="text" 
                            name="daysOfMonth"
                            value={formData.daysOfMonth}
                            onChange={handleChange}
                            className="w-[253px] h-[54px] border rounded-[15px] text-xl mt-56 text-white placeholder-gray-300 p-3 leading-6"
                            placeholder="Days per month"
                        />
                        </div>

                        <input type="text" 
                                className="w-[716px] h-[54px] rounded-[15px] mt-[15px] text-xl border text-white placeholder-gray-300 leading-6 p-3"
                                placeholder="Address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange} 
                        />
                        <input type="text" 
                                className="w-[716px] h-[54px] rounded-[15px] mt-[15px] text-xl border text-white placeholder-gray-300 leading-6 p-3"
                                placeholder="Street Address"
                            name="streetAddress"
                            value={formData.streetAddress}
                            onChange={handleChange} 
                        />
                        <div className="flex">
                            <input 
                                type="text" 
                                className="w-[282px] h-[54px] border rounded-[15px] mt-[15px] mr-[20px] text-xl text-white placeholder-gray-300 p-3 leading-6"
                                placeholder="City"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                            />
                            <input 
                                type="text" 
                                className="w-[420px] h-[54px] border rounded-[15px] mt-[15px] text-xl text-white placeholder-gray-300 p-3 leading-6"
                                placeholder="State/Province/Region"
                                name="province"
                                value={formData.province}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex">
                            <input 
                                type="text" 
                                className="w-[282px] h-[54px] border rounded-[15px] mt-[15px] mr-[20px] text-xl text-white placeholder-gray-300 p-3 leading-6"
                                placeholder="ZIP / Postal Code"
                                name="postalCode"
                                value={formData.postalCode}
                                onChange={handleChange}
                            />
                            <input 
                                type="text" 
                                className="w-[420px] h-[54px] border rounded-[15px] mt-[15px] text-xl text-white placeholder-gray-300 p-3 leading-6"
                                placeholder="Occupation"
                                name="occupation"
                                value={formData.occupation}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex">
                            <input 
                                type="text" 
                                className="w-[282px] h-[54px] border rounded-[15px] mt-[15px] mr-[20px] text-xl text-white placeholder-gray-300 p-3 leading-6"
                                placeholder="ZIP / Postal Code"
                                name="postalCode"
                                value={formData.skills}
                                onChange={handleChange}
                            />
                            <input 
                                type="text" 
                                className="w-[420px] h-[54px] border rounded-[15px] mt-[15px] text-xl text-white placeholder-gray-300 p-3 leading-6"
                                placeholder="Interests"
                                name="country"
                                value={formData.interest}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <button className="bg-primary px-3 py-2 rounded-[15px] border text-xl text-secondary mt-[30px] leading-6 font-bold">Next</button>
                </form>
                </div>
            </div>
        </div>
    </div>
    )
}