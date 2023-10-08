
import React from "react"

import { useFormik } from 'formik';

import { initialValue } from '../Utills/FormikInitialValueLogin'
import { LoginValidaiton } from '../Utills/LoginValidation'

const Login = () => {


    const formik = useFormik({
        initialValues: initialValue,
        validationSchema: LoginValidaiton,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            console.log('data send')
            console.log(values)
        },
    });
    return (
        <div className="w-fit text-base bg-gray-300 mx-auto my-20 text-center px-4 rounded-3xl	">
            <form className="flex flex-col" onSubmit={formik.handleSubmit} >
                <h1 className="text-2xl	font-bold py-4" >Login</h1>
                <input autoFocus id="email" type="email" name="email" className="w-80 mb-8	py-3 pl-3 rounded-3xl text-xl" placeholder="Email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div className="text-red-500 -mt-9 py-2 text-sm	"> {formik.errors.email} </div>
                ) : null}
                <input id="password" type="password" name="password" className="w-80 mb-8	py-3 pl-3 rounded-3xl text-xl" placeholder="Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                    <div className="text-red-500 -mt-9 py-2 text-sm	">{formik.errors.password}</div>
                ) : null}
                <button type="submit" className="w-80 mb-5 py-3  rounded-3xl text-xl bg-blue-700 border	text-white">LOGIN</button>
                <p className=" mb-5  text-xl text-blue-800">forget password ?</p>
            </form>
        </div>
    )
}


export default Login