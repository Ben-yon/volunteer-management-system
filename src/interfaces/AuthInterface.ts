/* eslint-disable @typescript-eslint/no-explicit-any */
export interface RegsiterStateInterface {
    loading: boolean;
    userInfo: VolunteerRegisterPayload | undefined; // Consider refining the type based on your user data structure
    error: string | null;
    success: boolean;
  }


  export interface VolunteerRegisterPayload {
    userId: string;
    id: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    daysAvailable: string;
    contact: string;
    email: string;
    address: string;
    streetAddress: string;
    city: string;
    region: string;
    zipCode: string;
    occupation: string;
    skills: string;
    interests: string;
  }