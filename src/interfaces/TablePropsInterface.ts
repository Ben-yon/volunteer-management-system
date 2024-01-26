import { Column } from 'react-table'

export interface TableProps{
    columns: Column[];
    data: any[];
}

export interface TableData {
    fullname: string;
    dateOfBirth: string;
    address: string;
    interests: string;
    DaysAvailablePerWeek: number;
    Availability: string;
}