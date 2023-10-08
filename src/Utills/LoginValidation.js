import * as Yup from 'yup';

export const LoginValidaiton = Yup.object({
    
    email: Yup.string()
        .required('Required')
        .email('Invalid email address'),
    password: Yup.string()
        .required('Required')
        .max(20, 'Must be 20 characters or less').
        min(8,`Must be at least 8 character's`)
})