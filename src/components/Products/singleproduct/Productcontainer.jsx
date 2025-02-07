import React from 'react'
import './Productcontainer.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


import { db, auth } from '../../../firebaseconfig/firebaseConfigs';
import { doc, getDoc, collection, query, where, getDocs, addDoc } from "firebase/firestore";

const Productcontainer = (product) => {
  // console.log(p)
  function GetCurrentUser() {
    const [user, setUser] = useState("");
    const usersCollectionRef = collection(db, "users");
    useEffect(() => {
      auth.onAuthStateChanged(userlogged => {
        if (userlogged) {
          // console.log(userlogged.email)
          const getUsers = async () => {
            const q = query(collection(db, "users"), where("uid", "==", userlogged.uid));
            // console.log(q);
            const data = await getDocs(q);
            setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
          };
          getUsers();
        }
        else {
          setUser(null);
        }
      })
    }, [])
    return user
  }
  const loggeduser = GetCurrentUser();

  const addtocart = () => {
    if (loggeduser) {
      console.log(loggeduser[0].uid)
      addDoc(collection(db, `cart-${loggeduser[0].uid}`), {
        product, quantity: 1
      }).then(() => {
        setSuccessMsg('Product added to cart');

      }).catch((error) => { setErrorMsg(error.message) });
    }
    else {
      setErrorMsg('You need to login first')
    }

  }
  const imageUrl = product.product.prodimage;
  let description = product.product.description;
  let title = product.product.producttitle;
  let p = product.product;
  console.log("imggggg", imageUrl);
  return (
    <>


      <div className="product-box">
        <img src={imageUrl} alt="Product Image" />
        <div className="product-info">
          <h2>{title}</h2>
          <p className="brand">{product.product.brand}</p>
          <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className="price">$99.99</p>
          <div className="ratings">
            <span className="stars">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
            <span className="review-count">(120 Reviews)</span>
          </div>
          <button className="buy-button">Buy Now</button>
          <button className='btn' onClick={addtocart}>Add to Cart</button>
        </div>
      </div>
      {/* <div className='product-container'>
            <img src={p.prodimage}></img>
            <div className='product-details'>
                <a href={`/product/${p.producttype}/${p.id}`}>
                    <button className='producttitle'>{p.producttitle}</button>
                </a>

                <div className='price-container'>
                    <p className='mrp'>MRP: <p className='rate'>45$</p></p>
                    <p className='saleprice'>Discount Price: <p className='rate'>322$</p></p>
                    <p className='yousave'>You Save:323$</p>
                </div>
                <Link to={`/product/${p.producttype}/${p.id}`}><button className='showmore-btn'>More Details &gt;</button></Link>

            </div>
        </div > */}


    </>
  )
}

export default Productcontainer