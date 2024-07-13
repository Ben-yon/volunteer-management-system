/* eslint-disable @typescript-eslint/no-explicit-any */
export interface RegisterStateInterface extends BaseInitialStateInterface {
  userInfo: VolunteerRegisterPayload | undefined; // Consider refining the type based on your user data structure
}


export interface VolunteerStateInterface extends BaseInitialStateInterface{
   userInfo: Array<VolunteersPayload>;
}

export interface FetchAdminsInterface extends BaseInitialStateInterface{
  adminsInfo: Array<AdminRegisterPayload>
}

export interface AdminRegisterInterface extends BaseInitialStateInterface{
  adminInfo: AdminRegisterPayload;
}

export interface LoginInterface extends BaseInitialStateInterface{
  userInfo: LoginPayload | any;
  isAuthenticated: boolean;
}

export interface VolunteerRegisterPayload {
  userId: string;
  id: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
  dateOfBirth: string;
  daysAvailable: number;
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

export interface LoginPayload extends BaseUserInterface{
  id: string;
  telephone: string;
  active: boolean;
  token: string;
  createdBy: string;
  createdDate: string;
  roles: Array<UserRole>;
}

export interface UpdateAdminPayload extends BaseInitialStateInterface{
  userInfo: LoginPayload
}

export interface UserRole {
  id: string;
  name: string;
  description: string;
  active: boolean;
  createdDate: string;
  createdBy: string;
  modifiedDate: string;
  modifiedBy: string;
}

export interface VolunteersPayload extends BaseUserInterface{
  userId: string;
  id: string;
  dateOfBirth: string;
  daysAvailable: number;
  contact: string;
  address: string;
  streetAddress: string;
  city: string;
  region: string;
  zipCode: string;
  occupation: string;
  skills: string;
  confirmed: boolean;
  interests: string;
  createdDate: string;
  createdBy: string;
  active: boolean;
  modifiedDate: string;
  modifiedBy: string;
  user: LoginPayload | undefined;
}

export interface UserPayload extends VolunteersPayload{}

export interface AdminRegisterPayload extends BaseUserInterface{
  contact: string;
  id: string;
  createdBy: string;
  active: boolean;
  modifiedDate: string;
  modifiedBy: string;
  volunteer: any;
  roles: Array<UserRole>;
}



interface BaseUserInterface{
  email: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
}

interface BaseInitialStateInterface{
  loading: boolean;
  success: boolean;
  error: string | null;
}