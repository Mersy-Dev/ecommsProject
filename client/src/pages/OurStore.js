
import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard';
import Color from '../components/Color';
import Container from '../components/Container';


const OurStore = () => {
    const [grid, setGrid] = useState(4);
    return (
        <>
            <Meta title={"Our Store"} />
            <BreadCrumb title='Our store' />
            <Container class1="store-wrapper home-wrapper-2 py-5">
                    <div className="row">
                        <div className="col-3">
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>
                                    Shop by Categories
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
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>
                                    Filter by
                                </h3>
                                <div>
                                    <h5 className="sub-title"> Availability</h5>
                                    <div>
                                        <div class="form-check">
                                            <label className="form-check-label" htmlFor=''>
                                                <input type="checkbox" className="form-check-input" name="" id="" value="checkedValue" />
                                                In Stock {1}
                                            </label>
                                        </div>

                                        <div class="form-check">
                                            <label className="form-check-label" htmlFor=''>
                                                <input type="checkbox" className="form-check-input" name="" id="" value="checkedValue" />
                                                Out of Stock {0}
                                            </label>
                                        </div>
                                    </div>
                                    <h5 className="sub-title"> Price</h5>
                                    <div className='d-flex align-items-center gap-10'>
                                        <div className="form-floating">
                                            <input type="email" className='form-control py-1' name="" id="floatingInput" placeholder='from' />
                                            <label htmlFor="floatingInput">From</label>
                                        </div>

                                        <div className="form-floating">
                                            <input type="email" className='form-control py-1' name="" id="floatingInput1" placeholder='to' />
                                            <label htmlFor="floatingInput1"> To</label>
                                        </div>
                                    </div>

                                    <h5 className="sub-title"> Colors</h5>
                                    <div>
                                        <Color />
                                    </div>

                                    <h5 className="sub-title"> Size</h5>
                                    <div>
                                        <div class="form-check">
                                            <input type="checkbox" className="form-check-input" name="" id="color-1" value="checkedValue" />
                                            <label className="form-check-label" htmlFor='color-1'>
                                                S {2}
                                            </label>
                                        </div>

                                        <div class="form-check">
                                            <input type="checkbox" className="form-check-input" name="" id="color-2" value="checkedValue" />
                                            <label className="form-check-label" htmlFor='color-2'>
                                                M {2}
                                            </label>
                                        </div>

                                    </div>

                                </div>
                            </div >
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>
                                    Product Tags
                                </h3>
                                <div>
                                    <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-2">
                                            Headphones
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-2">
                                            Laptops
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-2">
                                            Mobile
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-2">
                                            Wire
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>
                                    Random Product
                                </h3>

                                <div>
                                    <div className="random-products mb-3 d-flex">
                                        <div className="w-50">
                                            <img src="images/watch.jpg" alt="watch" className='img-fluid' />
                                        </div>
                                        <div className="w-50">
                                            <h5>
                                                Kids headphones bulk 10 multi colored for students
                                            </h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                edit={false}
                                                value={4}
                                                activeColor="#ffd700"
                                            />
                                            <b>$ 300</b>
                                        </div>

                                    </div>

                                    <div className="random-products d-flex">
                                        <div className="w-50">
                                            <img src="images/watch.jpg" alt="watch" className='img-fluid' />
                                        </div>
                                        <div className="w-50">
                                            <h5>
                                                Kids headphones bulk 10 multi colored for students
                                            </h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                edit={false}
                                                value={4}
                                                activeColor="#ffd700"
                                            />
                                            <b>$ 300</b>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-9">
                            <div className="filter-sort-grid mb-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center gap-10">
                                        <p className='mb-0 d-block' style={{ width: "100px" }}>Sort By:</p>
                                        <select name="" className='form-control form-select' id="">
                                            <option value="manual">Featured</option>
                                            <option value="best-selling" selected="selected">Best Selling</option>
                                            <option value="title-ascending">Alphabetically, A-Z</option>
                                            <option value="title-descending">Alphabetically, Z-A</option>
                                            <option value="price-ascending">Price, low to high</option>
                                            <option value="price-descending">Price, high to low</option>
                                            <option value="created-ascending">Date, old to new</option>
                                            <option value="created-descending">Date, new to old</option>

                                        </select>
                                    </div>

                                    <div className='d-flex align-items-center gap-10'>
                                        <p className="totalproducts">21 Products</p>
                                        <div className="d-flex gap-10 align-items-center grid">
                                            <img className='d-block img-fluid' onClick={() => { setGrid(3) }} src="images/gr4.svg" alt="grid" />
                                            <img className='d-block img-fluid' onClick={() => { setGrid(4) }} src="images/gr3.svg" alt="grid" />
                                            <img className='d-block img-fluid' onClick={() => { setGrid(6) }} src="images/gr2.svg" alt="grid" />
                                            <img className='d-block img-fluid' onClick={() => { setGrid(12) }} src="images/gr.svg" alt="grid" />

                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div className="product-list pb-5">
                                <div className="d-flex gap-10 flex-wrap">
                                    <ProductCard grid={grid} />

                                </div>
                            </div>
                        </div>

                    </div>
            </Container>
        </>
    )
}

export default OurStore