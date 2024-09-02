import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/axios";

export const volunteersNotMoreThanAWeek = createAsyncThunk(
    'dashboard/new-volunteers-not-more-than-a-week',
    async() => {
        try{
            const { data } = await api.get("home/new-volunteers-not-more-than-1-week");
            return data;
        }catch(error){
            return error;
        }

    }
)

export const volunteersNotMorethanTwoWeeks = createAsyncThunk(
    'dashboard/new-volunteers-not-more-than-two-weeks',
    async() => {
        try{
            const { data } = await api.get("home/new-volunteers-not-more-than-2-weeks");
            return data;
        }catch(error){
            return error;
        }
    }
)

export const activeVolunteers = createAsyncThunk(
    'dashboard/active-volunteers',
    async() => {
        try{
            const { data } = await api.get("home/active-volunteers");
            return data;
        }catch(error){
            return error;
        }
    }
)
export const usersAvailableOnline = createAsyncThunk(
    'dashboard/users-available-online',
    async() => {
        try{
            const { data } = await api.get("home/active-volunteers");
            return data;
        }catch(error){
            return error;
        }
    }
)
export const numberOfAdminsSincePreviousMonth = createAsyncThunk(
    'dashboard/number-of-admins-previous-month',
    async() => {
        try{
            const { data } = await api.get("home/number-of-admins-since-previous-month");
            return data;
        }catch(error){
            return error;
        }
    }
)

export const totalNumberOfVolunteers = createAsyncThunk(
    'dashboard/total-number-of-volunteers',
    async() => {
        try{
            const { data } = await api.get("home/total-number-of-volunteers");
            return data;
        }catch(error){
            return error;
        }
    }
)

export const newVolunteerSincePreviousMonth = createAsyncThunk(
    'dashboard/new-volunteer-since-previous-month',
    async() => {
        try{

            const { data } = await api.get("home/new-volunteers-since-previous-month")
            return data
        }catch(error){
            return error;
        }

    }
)

export const getUpcomingPrograms = createAsyncThunk(
    'dashboard/upcoming-programs',
    async() => {
        try{
            const { data } = await api.get("home/upcoming-programmes-in-current-month");
            return data;
        }catch(error){
            return error;
        }
    }
)