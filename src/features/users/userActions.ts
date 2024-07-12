import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/axios";
import axios from "axios";
import { UpdateUserInfo } from "../../interfaces/updateUser";

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


export const fetchUserById = createAsyncThunk(
    'user/:id',
    async(id: string) => {
        try{
            const { data } = await api.get(`/Users/${id}`);
            
            if (!data){
                throw new Error("User not found")
            }

            return data;
        }catch(error){
            if(axios.isAxiosError(error) && error.response && error.response.data.message){
                return error.response.data
            }else{
                return error;
            }
        }
    }
)

export const updateUser = createAsyncThunk(
    'user/update',
    async({id , userInfo}: UpdateUserInfo) => {
        try{
            const response = api.put(
                `Users/:id/user-information?=${id}`,
                {
                    userInfo
                }
            );

            if(!response){
                throw new Error("Update was not suucessful")
            }

            return response;
        }catch(error){
            if(axios.isAxiosError(error) && error.response && error.response.data.message){
                return error.response.data
            }else{
                return error;
            }
        }
    }
)