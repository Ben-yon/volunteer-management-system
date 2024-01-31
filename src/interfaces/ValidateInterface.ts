export interface ValidationRules {
    [ key: string ]: {
        required ?: boolean;
        email ?: boolean;
    };
}


export interface Errors{
    [key: string]: string;
}