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
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '../features/products/productSlice';
import { toast } from 'react-toastify';




const ProductCard = (props) => {
    const {grid, data} = props;
    const dispatch = useDispatch();
    // console.log(data);
    let location = useLocation();
    const addTowishList = (id) => {
        // alert(id);
        toast.success("Item added to wishlist");
        dispatch(addToWishlist(id));
    };
  return (
    <>  
        {
            data?.map((item, index)=>{  
                return(
                    <div key={index} className={`${location.pathname === "/product" ? `gr-${grid}` : " col-3"}`}>
                    <Link toh={`${location.pathname === "/" ? "product/:id" : location.pathname === "/product/:id" ? "/product/:id" : ":id"}`} className="product-card position-relative">
                        <div className="wishlist-icon position-absolute">
                            <button className=' border-0 bg-transparent' onClick={(e)=>{addTowishList(item?._id)}}><img src="images/wish.svg" alt="wishlist" /></button>
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
                            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`} dangerouslySetInnerHTML={{__html: item?.description}}>
                            </p>
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
            })
        }
    </>
  );
};

export default ProductCard