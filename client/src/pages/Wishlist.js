import React, { useEffect } from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getWishList } from '../features/user/userSlice';
import { addToWishlist } from '../features/products/productSlice';
import { toast } from 'react-toastify';


const Wishlist = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getUserWishlist();
    }, []);
    const getUserWishlist = () => {
        dispatch(getWishList());
    };

    const wishlistState = useSelector(state => state.auth.UserWishlist.wishlist);
    const removeFromWishlist = (id) => {
        dispatch(addToWishlist(id));
        setTimeout(() => {
            toast.success("Item removed from wishlist");
            dispatch(getWishList());
            
        }, 500);
    }
  return (
    <>
        <Meta title={"Wishlist"} />
        <BreadCrumb title='Wishlist' />
        <Container className="wishlist-wrapper home-wrapper-2 py-5">
                <div className="row">
                    {
                        wishlistState?.length === 0 && <h1 className="text-center">No items in wishlist</h1>
                    }
                    {
                        wishlistState?.map((item, index) => {
                            return (
                               <div key={index} className='col-3'>
                                     <div  className="wishlist-card  position-relative">
                                    <img onClick={()=>{removeFromWishlist(item?._id)}} src='images/cross.svg' alt='cross' className="position-absolute cross img-fluid" />
                                    <div className="wishlist-card-image bg-info">
                                        <img src={item?.images[0].url ? item?.images[0].url : "images/watch.jpg"} className='img-fluid d-block mx-auto' width={160} alt="watch" />
                                    </div>
                                    <div className=' py-3 px-3'>
                                        <h5 className='title'>{item?.title}</h5>
                                        <h6 className='price'> $ {item?.price}</h6>
                                    </div>
                                </div>
                               </div>
                            )
                        }) 
                    }
                </div>
        </Container>
    </>
  )
}

export default Wishlist