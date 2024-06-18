import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/axios";
import axios from "axios";

export const users = createAsyncThunk(
    'users',
    async() => {
        try{
            const { data } = await api.get('/Users');
            return data
        }catch(error){
            if(axios.isAxiosError(error) && error.response && error.response.data.message){
                return error.response.data
            }else{
                return error;
            }
        }
    }
)