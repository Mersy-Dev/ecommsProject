import React from 'react';
import {Link} from 'react-router-dom';

const BlogCard = (props) => {
    const {id, title, description, images, date} = props;   
  return (
    <div className=''>
        <div className="blog-card">
            <div className="card-image">
            <img src={images ? images : "images/blog-1.jpg"} className='img-fluid w-100' alt="" />
            </div>
            <div className="blog-content">
                <p className='date'>{date}</p>
                <h5 className="title">{title}</h5>
                <p className="desc" dangerouslySetInnerHTML={{__html:description?.substr(0, 70) + "..."}}>
                </p>
                <Link to={"/blog/" + id}className="button">Read More</Link>
            </div>  
        </div>
    </div>
  )
}

export default BlogCard