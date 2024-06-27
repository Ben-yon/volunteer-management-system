import axios from 'axios';
import api from '../../utils/axios';
import { AdminSignUpFormData } from './../../interfaces/FormDataInterface';
import { createAsyncThunk,  } from "@reduxjs/toolkit";

export const adminRegister = createAsyncThunk(
  "admin/register",
  async({
    firstName,
    lastName,
    email,
    password,
    profilePicture
  }:AdminSignUpFormData,
  {rejectWithValue}
) => {
    try{
        const { data } = await api.post(
            '/Users',
            {
                firstName,
                lastName,
                email,
                password,
                profilePicture
            }
        );

        console.log(data)
        return data
    }catch( error ){
        if ( axios.isAxiosError(error) && error.response &&  error.response.data.message){
            return rejectWithValue(error.response.data.message)
        }else{
            return rejectWithValue(error);
        }
    }
}
);
