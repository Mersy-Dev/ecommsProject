import React, { useState } from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color';
import Container from '../components/Container';

import { TbGitCompare } from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai';



const SingleProduct = () => {
    const props = { width: 400, height: 390, zoomWidth: 600, img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" };


    const [orderedProduct, setOrderedProduct] = useState([]);
    const copyToClipboadrd = (text) => {
        navigator.clipboard.writeText(text);
        var textField = document.createElement('textarea');
        textField.innerText = text;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        textField.remove();
    };


    return (
        <>
            <Meta title={" Products"} />
            <BreadCrumb title=" Products" />
            <Container class1="main-product-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-product-image">
                                <div>
                                    <ReactImageZoom {...props} />
                                </div>
                            </div>
                            <div className="other-product-images d-flex flex-wrap gap-15">
                                <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className='img-fluid' alt="" /></div>
                                <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className='img-fluid' alt="" /></div>
                                <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className='img-fluid' alt="" /></div>
                                <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className='img-fluid' alt="" /></div>

                            </div>
                        </div>
                        <div className="col-6">
                            <div className="main-product-details">
                                <div className=' border-bottom'>
                                    <h3 className='title'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
                                </div>
                                <div className="border-bottom py-3">
                                    <p className="price">$ 100</p>
                                    <div className="d-flex align-items-center gap-10">
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className='mb-0 t-review'>(2 Reviews)</p>
                                    </div>
                                    <a className='review-btn' href="#reviews">Write a Review</a>
                                </div>
                                <div className=" py-3">
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Type :</h3>
                                        <p className='product-data'>Write</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Brand :</h3>
                                        <p className='product-data'>Harris</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Category :</h3>
                                        <p className='product-data'>Watch</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Tags :</h3>
                                        <p className='product-data'>Watch </p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Availability :</h3>
                                        <p className='product-data'>In Stock</p>
                                    </div>

                                    <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                        <h3 className='product-heading'>Size :</h3>
                                        <div className='d-flex flex-wrap gap-15'>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">XL</span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">XXL</span>

                                        </div>
                                    </div>

                                    <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                        <h3 className='product-heading'>Color :</h3>
                                        <Color />
                                    </div>

                                    <div className='d-flex align-items-center gap-15 flex-row mt-2 mb-3'>
                                        <h3 className='product-heading'>Quantity :</h3>
                                        <div className=''>
                                            <input type="number" className='form-control' name="" min={1} max={10} style={{ "width": "70px" }} id="" />
                                        </div>
                                        <div className="d-flex align-items-center gap-30 ms-5">
                                            <button className='button border-0' type='submit'>Add to Cart</button>
                                            <button to='/register' className='button signup border-0'>Buy Now</button>

                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center gap-15">
                                        <div>
                                            <a href="">
                                                <TbGitCompare className=' fs-5 me-2' />
                                                Add to Compare
                                            </a>
                                        </div>
                                        <div>
                                            <a href="">
                                                <AiOutlineHeart className=' fs-5 me-2' />
                                                Add to Wishlist
                                            </a>
                                        </div>

                                    </div>

                                    <div className='d-flex gap-10 flex-column my-3'>
                                        <h3 className='product-heading'>Shipping & Returns :</h3>
                                        <p className='product-data'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Possimus in, am dolore nesciunt quia <b> quibusdam consequatur illo fuga.</b></p>
                                    </div>

                                    <div className='d-flex gap-10 align-items-center my-3'>
                                        <h3 className='product-heading'>Product Link :</h3>
                                        <a href="javascript:void(0)" onClick={()=>{copyToClipboadrd("https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg")}}>Copy Product Link</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
            </Container>

            <Container class1="description-wrapper home-wrapper-2">
                    <div className="row">
                        <div className="col-12">
                            <h4 className="section-heading"> Description</h4>
                            <div className="bg-white p-3">
                                <p className=""> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure eaque nulla officia dolor aperiam ipsum, quas similique sapiente! Temporibus autem dolore fugit laborum alias sequi atque provident? Odit, obcaecati eum!</p>
                            </div>
                        </div>
                    </div>
            </Container>

            <Container class1="reviews-wrapper home-wrapper-2">
                    <div className="row">
                        <div className="col-12">
                            <h3 id="reviews"> Reviews</h3>
                            <div className="review-inner-wrapper">
                                <div className="review-head d-flex justify-content-between align-items-end">
                                    <div>
                                        <h4 className='mb-3'>Customer Reviews</h4>
                                        <div className='d-flex align-items-center gap-10'>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={4}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <p className='mb-0'>Base on 2 Reviews</p>
                                        </div>
                                    </div>
                                    {
                                        orderedProduct && (
                                            <div>
                                                <a className=' text-dark text-decoration-underline' href="">Write a Review</a>
                                            </div>
                                        )
                                    }

                                </div>

                                <div className="review-form py-4">
                                    <h4 className='mb-3'>Write a Review</h4>

                                    <form action="" className='d-flex flex-column gap-15'>
                                        <div>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={4}
                                                edit={true}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <div>
                                            <textarea name="" className='w-100 form-control' placeholder='Comments' id="" cols="30" rows="4"
                                            ></textarea>
                                        </div>
                                        <div className='d-flex justify-content-end'>
                                            <button type="submit" className='button border-0'>Submit Review </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="reviews mt-4">
                                    <div className="review">
                                        <div className=' d-flex gap-10 align-items-center'>
                                            <h6 className='mb-0'>John Doe</h6>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={4}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus odit debitis facere hic eos vel nemo veniam, itaque quo magni? Delectus quam aut amet. Nisi itaque rerum aliquam deserunt dolorum.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Container>


            <Container className="popular-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className='col-12'>
                            <h3 className="section-heading">Our Popular Product </h3>
                        </div>
                    </div>

                    <div className="row">
                        <ProductCard />
                        {/* <ProductCard />
                        <ProductCard />
                        <ProductCard /> */}
                    </div>
            </Container>

        </>
    )
}

export default SingleProduct