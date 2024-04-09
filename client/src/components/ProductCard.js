import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import prodcompare from '../images/prodcompare.svg';
import view from '../images/view.svg';
import addcart from '../images/add-cart.svg';
import watch from '../images/watch.jpg';
import watch2 from '../images/watch.jpg';
import wish from '../images/wish.svg';


const ProductCard = (props) => {
    const {grid} = props;
    let location = useLocation();
  return (
    <>  
        <div className={`${location.pathname === "/store" ? `gr-${grid}` : " col-3"}`}>
            <Link to='product/:id' className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                    <button className=' border-0 bg-transparent'><img src="images/wish.svg" alt="wishlist" /></button>
                </div>
                <div className="product-image">
                    <img src={watch} className='img-fluid' alt="product" />
                    <img src={watch2} className='img-fluid' alt="product" />

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
                        <button className=' border-0 bg-transparent'><img src={prodcompare} alt="compare" /></button>
                        <button className=' border-0 bg-transparent'><img src={view} alt="view" /></button>
                        <button className=' border-0 bg-transparent'><img src={addcart} alt="add cart" /></button>
                    </div>
                </div>
            </Link>
        </div>

        <div className={`${location.pathname === "/store" ? `gr-${grid}` : " col-3"}`}>
            <Link className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                    <Link><img src={wish} alt="wishlist" /></Link>
                </div>
                <div className="product-image">
                    <img src={watch} className='img-fluid' alt="product" />
                    <img src={watch2} className='img-fluid' alt="product" />

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
                        <button><img src={prodcompare} alt="compare" /></button>
                        <button><img src={view} alt="view" /></button>
                        <button><img src={addcart} alt="add cart" /></button>
                    </div>
                </div>
            </Link>
        </div>  
    </>
  )
}

export default ProductCard