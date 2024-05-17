/* eslint-disable @typescript-eslint/no-explicit-any */
import { Column } from 'react-table'

export interface TableProps{
    columns: Column[];
    data: any[] | readonly[];
}


export interface TableData {
    id: string
    fullname: string;
    jobTitle: string;
    date_of_birth: string;
    address: string;
    interests: string;
    days_available_per_week: number;
    availability: string;
    skills: string;
    email: string;
    phone_number: string;
}