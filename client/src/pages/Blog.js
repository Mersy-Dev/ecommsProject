import React, { useEffect } from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb';
import BlogCard from '../components/BlogCard';
import Container from '../components/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs } from '../features/blogs/blogSlice';
import moment from 'moment';
import { matchPath } from 'react-router-dom';


const Blog = () => {
  const dispatch = useDispatch();

  const blogState = useSelector((state) => state?.blog?.blogs);
  console.log(blogState);
  useEffect(() => {
    getAllBlogs();
  }, []);
  const getAllBlogs = () => {
    dispatch(getBlogs());
  };

  return (
    <>
      <Meta title={"Blogs"} />
      <BreadCrumb title="Blogs" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>
                Find by Categories
              </h3>
              <div>
                <ul className='ps-0'>
                  <li>Watch</li>
                  <li>Tv</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              {
                blogState?.length === 0 && <h1 className="text-center">No blogs available</h1>
              }
              {
                blogState?.length > 0 &&
                blogState?.map((item, index) => {
                  return (
                    <div key={index} className='col-6 mb-3'>
                      <BlogCard  id={item?._id} title={item?.title} description={item?.description} images={item?.images[0]?.url} date={moment(item?.createdAt).format("MMMM Do YYYY, h:mm a")} />
                    </div>
                  )
                })
              }
            </div>
          </div>

        </div>

      </Container>
    </>
  )
}

export default Blog