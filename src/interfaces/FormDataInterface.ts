export interface FormDataInterface{

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
    profilePicture: string;
}

export interface AdminSignInFormData {
    email: string;
    password: string;
}

export interface AdminSignUpFormData{
    firstName: string;
    surname: string;
    email: string;
    password: string;
}

export interface AdminResetPasswordFormData{
    email: string;
}

export interface AdminNewPasswordFormData{
    password: string;
    confirmPassword: string;
}