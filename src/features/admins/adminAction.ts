import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreateAdmin } from "../../interfaces/FormDataInterface";
import api from "../../utils/axios";
import axios from "axios";

export const createAdmins = createAsyncThunk(
    'admins/create',
    async (adminDetails: CreateAdmin, {rejectWithValue}) => {
        try{
            const {data} = await api.post('Users/admins', adminDetails);
            return data;
        }catch(error){
            if ( axios.isAxiosError(error) && error.response &&  error.response.data.message){
              return rejectWithValue(error.response.data.message)
          }else{
              return rejectWithValue(error);
          }
          }
    }
);


export const fetchAdmins = createAsyncThunk(
    'admins',
    async () => {
        try{
            const {data} = await api.get('Users/admins');
            return data
        }catch(error){
            if (axios.isAxiosError(error) && error.response && error.response.data.message){
                return error.response.data.message
            }else{
                return error;
            }
        }
    }
);