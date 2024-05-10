import React from 'react';
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { registerUser } from '../features/user/userSlice';


let signupSchema = Yup.object({
    firstName: Yup.string().required('First Name is Required'),
    lastName: Yup.string().required('Last Name is Required'),
    email: Yup.string().email('Invalid email').required('email is Required'),
    mobile: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
});

const Signup = () => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            mobile: '',
            password: ''
        },
        validationSchema: signupSchema,
        onSubmit: (values) => {
            // alert(JSON.stringify(values, null, 2));
            dispatch(registerUser(values));
        },
    });

    return (
        <>
            <Meta title={"SignUp"} />
            <BreadCrumb title="SignUp" />

            <Container class1="login-wrapper py-5 home-wrapper-2">
               <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className=' text-center mb-3'>Sign Up</h3>
                            <form onSubmit={formik.handleSubmit} action="" className='d-flex flex-column gap-15'>
                                <CustomInput type="text" value={formik.values.firstName} className="my-0" onChange={formik.handleChange("firstName")} onBlur={formik.handleBlur("firstName")} name='firstName' placeholder='Enter first name'  />
                                <div className="error mb-0">
                                    {formik.touched.firstName && formik.errors.firstName ? <div className='text-danger mb-0'>{formik.errors.firstName}</div> : null}
                                </div>
                                <CustomInput type="text" value={formik.values.lastName} onChange={formik.handleChange("lastName")} onBlur={formik.handleBlur("lastName")} name='lastName' placeholder='Enter last name'  />
                                <div className="error">
                                    {formik.touched.lastName && formik.errors.lastName ? <div className='text-danger'>{formik.errors.lastName}</div> : null}
                                </div>
                                <CustomInput type="email" value={formik.values.email} onChange={formik.handleChange("email")} onBlur={formik.handleBlur("email")} name='email' placeholder='Email'   />
                                <div className="error">
                                    {formik.touched.email && formik.errors.email ? <div className='text-danger'>{formik.errors.email}</div> : null }
                                </div>
                                <CustomInput type="tel" value={formik.values.mobile} onChange={formik.handleChange("mobile")} onBlur={formik.handleBlur("mobile")} name='mobile' placeholder='Mobile Number'  />
                                <div className="error">
                                    {formik.touched.mobile && formik.errors.mobile ? <div className='text-danger'>{formik.errors.mobile}</div> : null}
                                </div>
                                <CustomInput type="password" value={formik.values.password} onChange={formik.handleChange("password")} onBlur={formik.handleBlur("password")} name='password' placeholder='Password'  />
                                <div className="error">
                                    {formik.touched.password && formik.errors.password ? <div className='text-danger'>{formik.errors.password}</div> : null}
                                </div>
                                <div>
                                    <div className=" mt-3 d-flex justify-content-center gap-15 align-items-center">
                                        <button className='button border-0' >Sign Up</button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Signup