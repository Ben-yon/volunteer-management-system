import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { FormDataInterface } from "../../interfaces/FormDataInterface";

export const registerVolunteer = createAsyncThunk(
  "auth/register",
  async(
    {
      email,
      firstName,
      lastName,
      address,
      city,
      contact,
      daysAvailable,
      interests,
      skills,
      occupation,
      zipCode,
      streetAddress,
      region,
    }: FormDataInterface,
    { rejectWithValue }
  ) => {
    try{

        const backendURL = 'http://20.127.229.228:8093'
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        await axios.post(
            `${backendURL}/volunteers/register`,
            {
              user:{},
              volunteer: {
                email,
                firstName,
                lastName,
                address,
                city,
                contact,
                daysAvailable,
                interests,
                skills,
                occupation,
                zipCode,
                streetAddress,
                region
              }
            },
            config
        )
    }catch( error ){
        if ( axios.isAxiosError(error) && error.response &&  error.response.data.message){
            return rejectWithValue(error.response.data.message)
        }else{
            return rejectWithValue(error);
        }
    }
  }
);
