import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AdminSignInFormData } from "../../interfaces/FormDataInterface";
import api from './../../utils/axios'


export const adminLogin = createAsyncThunk("auth/login",
  async({
    email, 
    password
  }: AdminSignInFormData, {rejectWithValue}) => {
    try{

      const { data } = await api.post('Users/Authenticate', {
        email,
        password
      });

      localStorage.setItem('token', data?.token)
      return data;
      
    }catch( error){
      if ( axios.isAxiosError(error) && error.response &&  error.response.data.message){
        return rejectWithValue(error.response.data.message)
    }else{
        return rejectWithValue(error);
    }
    }
  }
)
