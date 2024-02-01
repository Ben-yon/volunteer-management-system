import { ChangeEvent } from "react";
import { Errors } from "../interfaces/ValidateInterface";

export type UseFormValidationResult<T> = {
    values: FormValues<T>;
    errors: Errors;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    validate: () => boolean;
}


export type FormValues<T> = {
    [K in keyof T]: string;
}