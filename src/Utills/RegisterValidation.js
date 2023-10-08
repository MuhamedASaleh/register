import * as Yup from 'yup';

export const RegisterValidaiton = Yup.object({
    firstName: Yup.string()
        .required('Required')
        .max(15, 'Must be 15 characters or less').
        min(2, `Must be at least 2 character's`),
    lastName: Yup.string()
        .required('Required')
        .max(20, 'Must be 20 characters or less').
        min(2, `Must be at least 2 character's`),
    phone: Yup.number()
        .required('Required')
        // .min(11, 'Must be 11 numbers')
        // .max(11, 'Must be 11 numbers')
        ,
    email: Yup.string()
            .required('Required')
            .email('Invalid email address'),
    password: Yup.string()
        .required('Required')
        .max(20, 'Must be 20 characters or less').
        min(8, `Must be at least 8 character's`)
})

