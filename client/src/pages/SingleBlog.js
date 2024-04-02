import React from 'react';
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import {HiOutlineArrowLeft} from 'react-icons/hi';

const SingleBlog = () => {
  return (
    <>
        <Meta title={"Blog"} />
        <BreadCrumb title="Blog" />

        <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link className='d-flex align-items-center gap-10' to='/blogs'>
                <HiOutlineArrowLeft className='fs-5' />
                    Go back to Blogs
                </Link>
                <h3 className='title'> A Beautiful Sunday Morning Renaissance</h3>
                <img src="images/blog-1.jpg" className='img-fluid w-100 my-4 ' alt="blog" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ab quos. Tempore fugiat molestiae quia odio debitis nobis. Debitis voluptatum, fuga quisquam est vitae, at ullam vel, repudiandae velit corporis perspiciatis? Ab, quis ea dolorum, dolor eaque cupiditate quae est nulla molestias libero illum, voluptatem perspiciatis enim ad. Sapiente, voluptates?</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default SingleBlog