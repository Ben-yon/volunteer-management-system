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

export interface AdminSignUpFormData extends BaseFormFields{
    password: string;
    profilePicture: string | null;
}

export interface CreateAdmin extends BaseFormFields{
    contact: string;
    designation: string;
    // password: string;
}

export interface AdminResetPasswordFormData{
    email: string;
}

export interface AdminNewPasswordFormData{
    password: string;
    confirmPassword: string;
}


interface BaseFormFields{
    firstName: string;
    lastName: string;
    email: string;
}