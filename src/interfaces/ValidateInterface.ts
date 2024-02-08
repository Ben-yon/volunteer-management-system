export interface ValidationRules {
    [ key: string ]: {
        required ?: boolean;
        email ?: boolean;
        minLength ?: number;
        password ?: boolean;
        isNumber ?: boolean;
        isDayOfWeek?: boolean;
    };
}


export interface Errors{
    [key: string]: string;
}