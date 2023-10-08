
import React from "react"
import { useFormik } from 'formik';

import { initialValue } from '../Utills/FormikInitialValueRegister'
import { RegisterValidaiton } from '../Utills/RegisterValidation'
const Register = () => {


  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: RegisterValidaiton,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      console.log('data send')
      console.log(values)
    },
  });
  return (
    <div className="w-fit text-base bg-gray-300 mx-auto my-10 text-center px-4 rounded-3xl ">
      <form className="flex flex-col	" onSubmit={formik.handleSubmit}>

        <h1 className="text-2xl	font-bold	py-4	" >Register</h1>
        <input id="firstName" autoFocus type="text" name="firstName" className="w-80 mb-8	py-3 pl-3 rounded-3xl text-xl" placeholder="First Name"
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="text-red-500 -mt-9 py-2 text-sm	">{formik.errors.firstName}</div>
        ) : null}
        <input id="lastName" type="text" name="lastName" className="w-80 mb-8	py-3 pl-3 rounded-3xl text-xl" placeholder="Last Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="text-red-500 -mt-9 py-2 text-sm	">{formik.errors.lastName}</div>
        ) : null}
        <input id="phone" type="number" name="phone" className="w-80 mb-8	py-3 pl-3 rounded-3xl text-xl" placeholder="Phone Number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div className="text-red-500 -mt-9 py-2 text-sm	">{formik.errors.phone}</div>
        ) : null}
        <input id="emailC" type="email" name="email" className="w-80 mb-8	py-3 pl-3 rounded-3xl text-xl" placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500 -mt-9 py-2 text-sm	">{formik.errors.email}</div>
        ) : null}
        <input id="passwordC" type="password" name="password" className="w-80 mb-8	py-3 pl-3 rounded-3xl text-xl" placeholder="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-500 -mt-9 py-2 text-sm	" >{formik.errors.password}</div>
        ) : null}
        <button type="submit" className="w-80 mb-5  py-3 rounded-3xl text-xl bg-blue-700 border	text-white	">REGISTER</button>
        <p className=" mb-5  text-xl text-blue-800">forget password ?</p>
      </form>
    </div>
  )
}


export default Register