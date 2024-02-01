import { Column } from 'react-table'

export interface TableProps{
    columns: Column[];
    data: any[];
}

export interface TableData {
    id: number;
    fullname: string;
    jobTitle: string;
    date_of_birth: string;
    address: string;
    interests: string;
    days_available_per_week: number;
    availability: string;
}