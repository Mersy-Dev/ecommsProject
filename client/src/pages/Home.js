import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee"
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import Container from '../components/Container';
import { services } from '../utils/Data';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs } from '../features/blogs/blogSlice';
import moment from 'moment';
import { getProducts } from '../features/products/productSlice';
import ReactStars from "react-rating-stars-component";
import { useLocation } from 'react-router-dom';
import prodcompare from '../images/prodcompare.svg';
import view from '../images/view.svg';
import addcart from '../images/add-cart.svg';
import watch from '../images/watch.jpg';
import watch2 from '../images/watch.jpg';
import wish from '../images/wish.svg';
import { toast } from 'react-toastify';
import { addToWishlist } from '../features/products/productSlice';




const Home = (props) => {
  const dispatch = useDispatch();
  const {grid, data} = props;
  const blogState = useSelector((state) => state?.blog?.blogs);
  useEffect(() => {
    getAllBlogs();
    getProd();
  }, []);
  const getAllBlogs = () => {
    dispatch(getBlogs());
  };

  const productState = useSelector((state) => state.product.getAllProducts);
  console.log(productState);

  const getProd = () => {
    dispatch(getProducts());
  };
  let location = useLocation();

  const addTowishList = (id) => {
    // alert(id);
    toast.success("Item added to wishlist");
    dispatch(addToWishlist(id));
};

  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img src="images/main-banner-1.jpg" className='img-fluid rounded-3' alt="main banner" />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From $999.00 or $41.62/mo</p>
                <Link className='button'>BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img src="images/catbanner-01.jpg" className='img-fluid rounded-3' alt="main banner" />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sales </h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 <br /> or $41.62/mo</p>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img src="images/catbanner-02.jpg" className='img-fluid rounded-3' alt="main banner" />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>buy Ipad Air</h5>
                  <p>From $999.00 <br /> or $41.62/mo</p>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img src="images/catbanner-03.jpg" className='img-fluid rounded-3' alt="main banner" />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>buy Ipad Air</h5>
                  <p>From $999.00 <br /> or $41.62/mo</p>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img src="images/catbanner-04.jpg" className='img-fluid rounded-3' alt="main banner" />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>buy Ipad Air</h5>
                  <p>From $999.00 <br /> or $41.62/mo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1='home-wrapper-2 py-5'>
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {
                services?.map((i, j) => {
                  return (
                    <div className='d-flex align-items-center gap-15' key={j}>
                      <img src={i.image} alt="services" />
                      <div>
                        <h6>{i.title}</h6>
                        <p className='mb-0'>{i.tagline}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </Container>

      <Container class1='home-wrapper-2 py-5'>
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Cameras </h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>

              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Smart TV </h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>


              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Music & Gamming </h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>

              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Smart Watch </h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>



              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Cameras </h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>

              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Smart TV </h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>


              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Music & Gamming </h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>

              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Smart Watch </h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1='featured-wrapper home-wrapper-2 py-5'>
        <div className="row">
          <div className='col-12'>
            <h3 className="section-heading">Our featered Blogs</h3>
          </div>
          {
            productState?.length === 0 && <h1 className="text-center">No products available</h1>
          }
          {
            productState?.length > 0 &&
            productState?.map((item, index) => {
              if (item.tags === "popular") {
                return (
                  <div key={index} className={" col-3"}>
                    <Link toh={`${location.pathname === "/" ? "product/:id" : location.pathname === "/product/:id" ? "/product/:id" : ":id"}`} className="product-card position-relative">
                      <div className="wishlist-icon position-absolute">
                        <button className=' border-0 bg-transparent' onClick={(e) => { addTowishList(item?._id) }}><img src="images/wish.svg" alt="wishlist" /></button>
                      </div>
                      <div className="product-image">
                        <img src={item?.images[0].url} className='img-fluid mx-auto' alt="product" width={160} />
                        <img src={watch2} className='img-fluid mx-auto' alt="product" width={160} />

                      </div>
                      <div className="product-details">
                        <h6 className="brand">{item?.brand}</h6>
                        <h5 className="product-title">
                          {item?.title}
                        </h5>
                        <ReactStars
                          count={5}
                          value={item?.totalrating.toString()}
                          edit={false}
                          size={24}
                          activeColor="#ffd700"
                        />
                        <p className="price">$ {item?.price}</p>
                      </div>
                      <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                          <button className=' border-0 bg-transparent'><img src={prodcompare} alt="compare" /></button>
                          <button className=' border-0 bg-transparent'><img src={view} alt="view" /></button>
                          <button className=' border-0 bg-transparent'><img src={addcart} alt="add cart" /></button>
                        </div>
                      </div>
                    </Link>
                  </div>


                )
              }
            })
          }
        </div>
      </Container>

      <Container class1='famous-wrapper home-wrapper-2 py-5'>
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative bg-black">
              <img src="images/famous-1.png" className='img-fluid' alt="famous" />
              <div className="famous-content position-absolute">
                <h5>BIG SCREEN</h5>
                <h6>Smart Watch Series 7</h6>
                <p> From $399or $16.62/mo. for 24 mo.</p>
              </div>
            </div>
          </div>


          <div className="col-3">
            <div className="famous-card position-relative bg-white">
              <img src="images/famous-2.png" className='img-fluid' alt="famous" />
              <div className="famous-content position-absolute">
                <h5 className='text-dark'>STUDIO DISPLAY</h5>
                <h6 className='text-dark'>600 nits of Brightness</h6>
                <p className='text-dark'> 27-inch 5K Retina Display</p>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card position-relative bg-white">
              <img src="images/famous-3.png" className='img-fluid' alt="famous" />
              <div className="famous-content position-absolute">
                <h5 className='text-dark'>SMARTPHONES</h5>
                <h6 className='text-dark'>Smartphone 13 Pro.</h6>
                <p className='text-dark'> Now in Silver, From $999 or $41.62/mo. for 24 mo* </p>
              </div>
            </div>
          </div>


          <div className="col-3">
            <div className="famous-card position-relative bg-white">
              <img src="images/famous-4.png" className='img-fluid' alt="famous" />
              <div className="famous-content position-absolute">
                <h5 className='text-dark'>HOME SPEAKER</h5>
                <h6 className='text-dark'>Room-Filling sound</h6>
                <p className='text-dark'> From $699or $116.62/mo. for 12 mo*</p>
              </div>
            </div>
          </div>



        </div>
      </Container>

      <Container class1='special-wrapper py-5 home-wrapper-2'>
        <div className="row">
          <div className='col-12'>
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          {
            productState?.length === 0 && <h1 className="text-center">No products available</h1>
          }
          {
            productState?.length > 0 &&
            productState?.map((item, index) => {
              if (item.tags === "special") {
                return (
                  <SpecialProduct key={index} id={item?._id} quantity={item?.quantity} brand={item?.brand} sold={item?.sold} title={item?.title} price={item?.price} images={item?.images[0]?.url} totalrating={item?.totalrating.toString()} />

                )
              }
            })
          }
        </div>
      </Container>

      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className='col-12'>
            <h3 className="section-heading">Our Popular Product </h3>
          </div>
        </div>

        <div className="row">
          {
            productState?.length === 0 && <h1 className="text-center">No products available</h1>
          }
          {
            productState?.length > 0 &&
            productState?.map((item, index) => {
              if (item.tags === "popular") {
                return (
                  <div key={index} className={" col-3"}>
                    <Link toh={`${location.pathname === "/" ? "product/:id" : location.pathname === "/product/:id" ? "/product/:id" : ":id"}`} className="product-card position-relative">
                      <div className="wishlist-icon position-absolute">
                        <button className=' border-0 bg-transparent' onClick={(e) => { addTowishList(item?._id) }}><img src="images/wish.svg" alt="wishlist" /></button>
                      </div>
                      <div className="product-image">
                        <img src={item?.images[0].url} className='img-fluid mx-auto' alt="product" width={160} />
                        <img src={watch2} className='img-fluid mx-auto' alt="product" width={160} />

                      </div>
                      <div className="product-details">
                        <h6 className="brand">{item?.brand}</h6>
                        <h5 className="product-title">
                          {item?.title}
                        </h5>
                        <ReactStars
                          count={5}
                          value={item?.totalrating.toString()}
                          edit={false}
                          size={24}
                          activeColor="#ffd700"
                        />
                        <p className="price">$ {item?.price}</p>
                      </div>
                      <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                          <button className=' border-0 bg-transparent'><img src={prodcompare} alt="compare" /></button>
                          <button className=' border-0 bg-transparent'><img src={view} alt="view" /></button>
                          <button className=' border-0 bg-transparent'><img src={addcart} alt="add cart" /></button>
                        </div>
                      </div>
                    </Link>
                  </div>


                )
              }
            })
          }
        </div>
      </Container>


      <Container class1="marquee-wrapper py-5 ">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className='d-flex'>
                <div className='mx-4 w-25'>
                  <img src=" images/brand-01.png" alt="brand logo" />
                </div>
                <div className='mx-4 w-25'>
                  <img src=" images/brand-02.png" alt="brand logo" />
                </div>
                <div className='mx-4 w-25'>
                  <img src=" images/brand-03.png" alt="brand logo" />
                </div>
                <div className='mx-4 w-25'>
                  <img src=" images/brand-04.png" alt="brand logo" />
                </div>
                <div className='mx-4 w-25'>
                  <img src=" images/brand-05.png" alt="brand logo" />
                </div>
                <div className='mx-4 w-25'>
                  <img src=" images/brand-06.png" alt="brand logo" />
                </div>
                <div className='mx-4 w-25'>
                  <img src=" images/brand-07.png" alt="brand logo" />
                </div>
                <div className='mx-4 w-25'>
                  <img src=" images/brand-08.png" alt="brand logo" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className='col-12'>
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row">
          {

            blogState?.length === 0 && <h1 className="text-center">No blogs available</h1>
          }
          {
            blogState?.length > 0 &&
            blogState?.map((item, index) => {
              if (index < 3) {
                return (
                  <div key={index} className='col-3'>
                    <BlogCard id={item?._id} title={item?.title} description={item?.description} images={item?.images[0]?.url} date={moment(item?.createdAt).format("MMMM Do YYYY, h:mm a")} />
                  </div>
                )
              }
            })
          }

        </div>
      </Container>
    </>
  );
};

export default Home