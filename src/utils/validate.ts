import { ChangeEvent, useState } from "react";
import { Errors, ValidationRules } from "../interfaces/ValidateInterface";
import { FormValues, UseFormValidationResult } from "../types/validate-types";

export function useFormValidation<T>(initialValues: FormValues<T>, validationRules: ValidationRules): UseFormValidationResult<T>{
    const [ values, setValues ] = useState<FormValues<T>>(initialValues);
    const [ errors, setErrors ] = useState<Errors>({});


    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: ''
        }));
    };

    const isValidEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const isValidPasswordFormat = (password: string): boolean => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
        return passwordRegex.test(password);
    }

    const validate = (): boolean => {
        let isValid = true;
        const newErrors: Errors = {};

        for (const fieldName in validationRules){
            const fieldValue = values[fieldName as keyof T];
            const rules = validationRules[fieldName];   

            if (rules.required && !fieldValue){
                newErrors[fieldName] ='This field is required.';
                isValid = false;
            }
            if (rules.email && fieldValue && !isValidEmail(fieldValue)) {
                newErrors[fieldName] = 'Invalid email address.';
                isValid = false;
            }

            if (rules.minLength && fieldValue.length < rules.minLength ){
                newErrors[fieldName] = `Minimum length is ${rules.minLength} characters`;
                isValid = false;
            }

            if (rules.password && fieldValue && !isValidPasswordFormat(fieldValue)){
                newErrors[fieldName] = 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.';
                isValid = false;
            }

        }

        setErrors(newErrors);
        return isValid
    };


    return {
        values,
        errors,
        handleChange,
        validate
    }
}