import {ValidationError as ClassValidatorError} from 'class-validator'


// interface modelling Error structure of a DB error
export interface IDBError {
    message: string;
    code: number;
    errors: {
        [key: string]: {
            properties: {
                message: string;
                path: keyof IDBError | undefined; 
            };
        };
    };
}

// interface modelling Error structure of a validation error
export interface IValidationError {
    target: {
        [key: string]: string;
    },
    value: any,
    property: string,
    children: any[],
    constraints: {
        [key: string]: string;
    }
}

export const handleDBErrors = (err: IDBError) : Partial<Record<string, any>> => {
    const errors: Partial<Record<string, any>> = { };

    if (err.message.includes('Book validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            const path: keyof IDBError = properties.path as keyof IDBError;
            errors[path] = properties.message as any;
        });
    }

    return errors
};

export const handleValidationErrors = (err: Array<ClassValidatorError>) : Partial<IValidationError> => {
    const errors: Partial<Record<string, any>> = { };

    // Iterate over each validation error
    err.forEach(e => {
        const { property, constraints } = e;
        const constraintMessages = Object.values(constraints || {});
        errors[property] = constraintMessages;
    });

    return errors;
}

export const INTERNAL_SERVER_ERROR_MSG = "The server is currently unable to process your request. Please try again later"