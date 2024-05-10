import React, { useEffect, useState } from 'react';
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb';
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import Container from '../components/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getBlog } from '../features/blogs/blogSlice';


const SingleBlog = () => {
  const singleBlog = useSelector((state) => state?.blog?.singleBlog);
  const location = useLocation();
  const getBlogId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  useEffect(() => {
      getSingBlog();
  }, []);
  const getSingBlog = () => {
      dispatch(getBlog(getBlogId));

  };
  return (
    <>
      <Meta title={singleBlog?.title} />
      <BreadCrumb title={singleBlog?.title} />

      <Container class1="blog-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link className='d-flex align-items-center gap-10' to='/blogs'>
                  <HiOutlineArrowLeft className='fs-5' />
                  Go back to Blogs
                </Link>
                <h3 className='title'>{singleBlog?.title}</h3>
                <img src={singleBlog?.images[0].url ? singleBlog?.images[0].url : "images/blog-1.jpg" } className='img-fluid w-100 my-4 ' alt="blog" />
                <p dangerouslySetInnerHTML={{__html: singleBlog?.description}}></p>
              </div>
            </div>
          </div>
      </Container>
    </>
  )
}

export default SingleBlog