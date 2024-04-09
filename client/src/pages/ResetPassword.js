import React from 'react';
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';

const ResetPassword = () => {
  return (
    <>
        <Meta title={"Reset Password"} />
        <BreadCrumb title="Reset Password" />
    
        <Container class1="login-wrapper py-5 home-wrapper-2">
            <div className="row">
            <div className="col-12">
                <div className="auth-card">
                <h3 className=' text-center mb-3'>Reset Password</h3>
                <form action="" className='d-flex flex-column gap-15'>
                    {/* <div>
                    <input type="email" name='email' placeholder='email' className="form-control" />
                    </div> */}
    
                    <div className=' mt-1'>
                    <input type="password" name='password' placeholder='Enter Password' className="form-control" />
                    </div>
    
                    <div className=' mt-1'>
                    <input type="password" name='password' placeholder='Confirm Password' className="form-control" />
                    </div>
    
                    <div>
                    <div className=" mt-3 d-flex justify-content-center gap-15 align-items-center">
                        <button className='button border-0'>Reset Password</button>
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

export default ResetPassword