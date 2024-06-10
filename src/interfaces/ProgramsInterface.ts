export interface ProgramInterface{
    name: string;
    description: string;
    programmeImages: Array<ProgramImage>;
}

interface ProgramImage{
    image: string;
    description: string;
}


export interface ProgramsPayloadInterface{
    id: string;
    name: string;
    description: string;
    createdDate: string;
    createdBy: string;
    modifiedDate: string;
    modifiedBy: string;
    programmeImages: Array<ProgramImage>;
}