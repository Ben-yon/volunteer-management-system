import { createAsyncThunk } from "@reduxjs/toolkit";
import { FormDataInterface } from "../../interfaces/FormDataInterface";
import api from "../../utils/axios";
import axios from "axios";

export const registerVolunteer = createAsyncThunk(
    "volunteer/register",
    async(
      {
        email,
        firstName,
        lastName,
        dateOfBirth,
        address,
        city,
        contact,
        daysAvailable,
        interests,
        skills,
        profilePicture,
        occupation,
        zipCode,
        streetAddress,
        region,
      }: FormDataInterface,
      { rejectWithValue }
    ) => {
      try{
  
          const config = {
              headers: {
                  'Content-Type': 'application/json',
              }
          }
          await api.post(
              'volunteers/',
              {
                  email,
                  firstName,
                  lastName,
                  address,
                  dateOfBirth,
                  city,
                  contact,
                  daysAvailable,
                  interests,
                  skills,
                  occupation,
                  zipCode,
                  streetAddress,
                  profilePicture,
                  region
              },
              config
          ).then((response) => {
            if (response.status === 201){
                console.log(response)
            }
          })
      }catch( error ){
          if ( axios.isAxiosError(error) && error.response &&  error.response.data.message){
              return rejectWithValue(error.response.data.message)
          }else{
              return rejectWithValue(error);
          }
      }
    }
  
  );