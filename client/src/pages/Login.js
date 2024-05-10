import React from 'react';
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginUser } from '../features/user/userSlice';


let loginSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('email is Required'),
    password: Yup.string().required('Required'),
});


const Login = () => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            // alert(JSON.stringify(values, null, 2));
            dispatch(loginUser(values));
        },
    });
    return (
        <>
            <Meta title={"Login"} />
            <BreadCrumb title="Login" />

            <Container class1="login-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className=' text-center mb-3'>Login</h3>
                                <form onSubmit={formik.handleSubmit} action="" className='d-flex flex-column gap-15'>
                                    <CustomInput type="email" name='email' value={formik.values.email} onChange={formik.handleChange("email")} onBlur={formik.handleBlur("email")} placeholder='Enter Email'  />
                                    <div className="error">
                                        {formik.touched.email && formik.errors.email ? <div className='text-danger'>{formik.errors.email}</div> : null }
                                    </div>
                                    <CustomInput type="password" name='password' value={formik.values.password} onChange={formik.handleChange("password")} onBlur={formik.handleBlur("password")} placeholder='Enter Password' />
                                    <div className="error">
                                        {formik.touched.password && formik.errors.password ? <div className='text-danger'>{formik.errors.password}</div> : null }
                                    </div>
                                    <div>
                                        <Link to='/forgot-password'>Forgot Password ?</Link>
                                        <div className=" mt-3 d-flex justify-content-center gap-15 align-items-center">
                                            <button className='button border-0' type='submit'>Login</button>
                                            <Link to='/register' className='button signup border-0'>SignUp</Link>
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

export default Login