export const API = 'https://httpbin.org/post';

export type UserSubmitForm = {
    action: 'register';
    email: string;
    company: string;
    password: string;
};

export interface MenuItem {
    title: string;
    link: string;
}

export enum RegisterErrors {
    AlreadyExist = 1,
}

export type UserFormResponse = {
    json: UserSubmitForm;
    error?: RegisterErrors;
    args: object;
    data: string;
    files: object;
    form: object;
    headers: object;
    origin: string;
    url: string;
}