import React from 'react'
import { Link } from 'react-router-dom';
import './Sliderproductcard.css'


const Sliderproductcard = (product) => {
    // console.log(p)
    let p = product.product
  
    const imageUrl = product.product.prodimage;
    let description = product.product.description;
    let title = product.product.producttitle;


    return (
        <div >
          
          <div className='mini-product-container'>
                <div className='mini-img-container'> <img src={p.prodimage}></img></div>
                <div className='mini-product-details'>
                    <p className='mini-producttitle'>{p.producttitle}</p>
                    <div className='mini-price-container'>
                    <p className="price">$99.99</p>
                    <div className="ratings">
                      <span className="stars">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
                          <span className="review-count">(120 Reviews)</span>
            </div>
        
                    </div>
                    <Link to={`/product/${p.producttype}/${p.id}`}><button className="buy-button">More details</button></Link>
                </div>
            </div >
        </div>
    )
}

export default Sliderproductcard