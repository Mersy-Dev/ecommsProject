import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee"
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import Container from '../components/Container';
import { services } from '../utils/Data';



const Home = () => {
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
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
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
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />


        </div>
      </Container>

      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className='col-12'>
            <h3 className="section-heading">Our Popular Product </h3>
          </div>
        </div>

        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
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
            <div className="col-3">
              <BlogCard />
            </div>

            <div className="col-3">
              <BlogCard />
            </div>

            <div className="col-3">
              <BlogCard />
            </div>

            <div className="col-3">
              <BlogCard />
            </div>
          </div>
      </Container>
    </>
  );
};

export default Home