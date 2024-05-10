import React from 'react';
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { BiPhoneCall, BiInfoCircle } from 'react-icons/bi';
import Container from '../components/Container';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { postQuery } from '../features/contact/contactSlice';
import { toast } from 'react-toastify';


const Contact = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      mobile: '',
      comment: ''
    },
    validationSchema: yup.object({
      name: yup.string().required('Name is required'),
      email: yup.string().nullable().email('Invalid email').required('Email is required'),
      mobile: yup.string().default('').nullable().required('Mobile number is required'),
      comment: yup.string().default('').nullable().required('Comments is required')
    }),

    onSubmit: values => {
      if (formik.isValid) {
        dispatch(postQuery(values))
        formik.resetForm();
        toast.success("Query submitted successfully");
      }
    }


  })
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <Container class1="container-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.6999377439056!2d3.876905174815451!3d7.3874831125210445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d0e6aaaaaab%3A0xceeb94061265aea4!2sShoprite!5e0!3m2!1sen!2sng!4v1711653263363!5m2!1sen!2sng"
              width="600"
              height="450"
              className="border-0 w-100"
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title mb-4">Contact</h3>
                <form action="" onSubmit={formik.handleSubmit} className='d-flex flex-column gap-15'>
                  <div>
                    <input type="text" className='form-control' onChange={formik.handleChange("name")} name="name" onBlur={formik.handleBlur("name")} value={formik.values.name} placeholder='name' id="" />
                  </div>
                    <div className="error">
                      {formik.touched.name && formik.errors.name ? <div className='text-danger'>{formik.errors.name}</div> : null}
                    </div>

                    <div>
                      <input type="email" className='form-control' onChange={formik.handleChange("email")} name="email" onBlur={formik.handleBlur("email")} value={formik.values.email} placeholder='email' id="" />
                    </div>
                    <div className="error">
                      {formik.touched.email && formik.errors.email ? <div className='text-danger'>{formik.errors.email}</div> : null}
                      </div>

                    <div>
                      <input type="tel" className='form-control' onChange={formik.handleChange("mobile")} name="mobile" onBlur={formik.handleBlur("mobile")} value={formik.values.mobile} placeholder='Mobile Number' id="" />
                    </div>
                    <div className="error">
                      {formik.touched.mobile && formik.errors.mobile ? <div className='text-danger'>{formik.errors.mobile}</div> : null}
                    </div>
                    <div>
                      <textarea name="" className='w-100 form-control' onChange={formik.handleChange("comment")} onBlur={formik.handleBlur("comment")} value={formik.values.comment} placeholder='Comment' id="" cols="30" rows="4"
                      ></textarea>
                    </div>
                    <div className="error">
                      {formik.touched.comment && formik.errors.comment ? <div className='text-danger'>{formik.errors.comment}</div> : null}
                    </div>
                    <div>
                      <button type="submit" className='button border-0'>Submit</button>
                    </div>
                </form>
              </div>


              <div>
                <h3 className="contact-title mb-4">
                  Get in Touch with Us
                </h3>
                <div>
                  <ul className='ps-0'>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <AiOutlineHome className=' fs-5' />
                      <address className='mb-0'>Hno:229, Near Marykay Mall, Dugbe, Ibadan</address>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <BiPhoneCall className='fs-5' />
                      <a href="tel:+234 813 886 2185">+234 813 886 2185</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <AiOutlineMail className=' fs-5' />
                      <a href="mailto:anuoluwafalaju@gmail.com">anuoluwafalaju@gmail.com</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <BiInfoCircle className='fs-5' />
                      <p className="mb-0">Mondays - Fridays 10 Am - 8 Pm</p>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Contact