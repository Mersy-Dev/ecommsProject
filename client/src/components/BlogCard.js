import React from 'react';
import {Link} from 'react-router-dom';

const BlogCard = () => {
  return (
    <div className=''>
        <div className="blog-card">
            <div className="card-image">
                <img src="images/blog-1.jpg" className='img-fluid w-100' alt="" />
            </div>
            <div className="blog-content">
                <p className='date'>26 March, 2024</p>
                <h5 className="title"> A Beautiful Sunday Morning Renaissance</h5>
                <p className="desc">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque iurenatur dolor corporis dolores.
                </p>
                <h2></h2>
                <Link to="/" className="button">Read More</Link>
            </div>  
        </div>
    </div>
  )
}

export default BlogCard