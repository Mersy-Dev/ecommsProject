import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const ProductCard = (props) => {
    const {grid} = props;
    let location = useLocation();
  return (
    <>  
        <div className={`${location.pathname === "/store" ? `gr-${grid}` : " col-3"}`}>
            <Link to='product/:id' className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                    <Link><img src="images/wish.svg" alt="wishlist" /></Link>
                </div>
                <div className="product-image">
                    <img src="images/watch.jpg" className='img-fluid' alt="product" />
                    <img src="images/laptop.jpg" className='img-fluid' alt="product" />

                </div>
                <div className="product-details">
                    <h6 className="brand">Havels</h6>
                    <h5 className="product-title">
                        Kids headphone bulk 10 pieces multi colored for kids
                    </h5>
                    <ReactStars
                        count={5}
                        value={4}
                        edit={false}
                        size={24}
                        activeColor="#ffd700"
                    />
                    <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus esse aliquam et incidunt commodi quaerat soluta in iste, minus fugiat facilis quas itaque autem eos iure...
                    </p>
                    <p className="price">$100.00</p>
                </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-15">
                        <Link><img src="images/prodcompare.svg" alt="compare" /></Link>
                        <Link><img src="images/view.svg" alt="view" /></Link>
                        <Link><img src="images/add-cart.svg" alt="add cart" /></Link>
                    </div>
                </div>
            </Link>
        </div>

        <div className={`${location.pathname === "/store" ? `gr-${grid}` : " col-3"}`}>
            <Link className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                    <Link><img src="images/wish.svg" alt="wishlist" /></Link>
                </div>
                <div className="product-image">
                    <img src="images/watch.jpg" className='img-fluid' alt="product" />
                    <img src="images/laptop.jpg" className='img-fluid' alt="product" />

                </div>
                <div className="product-details">
                    <h6 className="brand">Havels</h6>
                    <h5 className="product-title">
                        Kids headphone bulk 10 pieces multi colored for kids
                    </h5>
                    <ReactStars
                        count={5}
                        value={4}
                        edit={false}
                        size={24}
                        activeColor="#ffd700"
                    />
                    <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus esse aliquam et incidunt commodi quaerat soluta in iste, minus fugiat facilis quas itaque autem eos iure...
                    </p> 
                    <p className="price">$100.00</p>
                </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-15">
                        <Link><img src="images/prodcompare.svg" alt="compare" /></Link>
                        <Link><img src="images/view.svg" alt="view" /></Link>
                        <Link><img src="images/add-cart.svg" alt="add cart" /></Link>
                    </div>
                </div>
            </Link>
        </div>  
    </>
  )
}

export default ProductCard