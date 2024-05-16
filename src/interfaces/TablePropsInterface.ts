/* eslint-disable @typescript-eslint/no-explicit-any */
import { Column } from 'react-table'
import { VolunteersPayload } from './AuthInterface';

export interface TableProps{
    columns: Column[];
    data: any[] | readonly[];
}

export interface TableData extends VolunteersPayload{
    
}