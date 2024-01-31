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

    const validate = (): boolean => {
        let isValid = true;
        const newErrors: Errors = {};

        for (const fieldName in validationRules){
            const fieldValue = values[fieldName as keyof T];
            const rules = validationRules[fieldName];   

            if (rules.required && !fieldName){
                newErrors[fieldName] ='This field is required.';
                isValid = false;
            }
            if (rules.email && fieldValue && !isValidEmail(fieldValue)) {
                newErrors[fieldName] = 'Invalid email address.';
                isValid = false;
            }
        }

        setErrors(newErrors);
        return isValid
    };

    const isValidEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    return {
        values,
        errors,
        handleChange,
        validate
    }
}