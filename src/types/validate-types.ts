import { ChangeEvent } from "react";
import { Errors } from "../interfaces/ValidateInterface";

export type UseFormValidationResult<T> = {
    values: FormValues<T>;
    errors: Errors;
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    validate: () => boolean;
}


export type FormValues<T> = {
    [K in keyof T]: string;
}