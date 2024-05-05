import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AdminSignInFormData, FormDataInterface } from "../../interfaces/FormDataInterface";
import api from './../../utils/axios'

export const registerVolunteer = createAsyncThunk(
  "auth/register",
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
                region
            },
            config
        ).then((response) => {
          console.log(response)
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
export const Login = createAsyncThunk("auth/login",
  async({
    email, 
    password
  }: AdminSignInFormData, {rejectWithValue}) => {
    try{

      await api.post('Users/Authenticate', {
        email,
        password
      }).then((response) => {
        console.log(response)
      })
    }catch( error){
      if ( axios.isAxiosError(error) && error.response &&  error.response.data.message){
        return rejectWithValue(error.response.data.message)
    }else{
        return rejectWithValue(error);
    }
    }
  }
)
