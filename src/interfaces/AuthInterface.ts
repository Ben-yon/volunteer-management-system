/* eslint-disable @typescript-eslint/no-explicit-any */
export interface RegisterStateInterface {
    loading: boolean;
    userInfo: VolunteerRegisterPayload | undefined; // Consider refining the type based on your user data structure
    error: string | null;
    success: boolean;
  }

  export interface LoginInterface{
    loading: boolean;
    userInfo: LoginPayload | undefined;
    error: string | null;
    success: boolean;
    isAuthenticated: boolean
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

  export interface LoginPayload{
    id: string;
    firstName: string;
    lastName: string;
    otherNames: string;
    email: string;
    telephone: string;
    active: boolean;
    token: string;
    role: Array<UserRole[]>;
  }


  export interface UserRole{
    id: string;
    name: string;
    description: string;
    active: boolean;
    createdDate: Date;
    createdBy: string;
    modifiedDate: Date;
    modifiedBy: Date;
  }