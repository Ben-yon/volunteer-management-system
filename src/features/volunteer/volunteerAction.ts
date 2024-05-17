import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/axios";
import axios from "axios";

export const getVolunteers = createAsyncThunk(
    "/volunteers",
    async() => {
        try{
            const { data } = await api.get('volunteers')
            return data;
        }catch( error ){
            if ( axios.isAxiosError(error) && error.response &&  error.response.data.message){
                return error.response.data.message
            }else{
                return error;
            }
        }
    }
)