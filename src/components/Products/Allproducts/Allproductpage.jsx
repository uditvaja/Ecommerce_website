import React from 'react'
import { useState,useEffect } from 'react'
import Navbar from '../../Navbar'
import Productcontainer from '../singleproduct/Productcontainer'
import './Allproductpage.css'
import { collection, getDocs, query, where, addDoc } from 'firebase/firestore'
import {auth, db } from '../../../firebaseconfig/firebaseConfigs'
const Allproductpage = (props) => {
    console.log(props,"propsss");

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = () => {

            const productsArray = [];
            const path = `products-${props.type.toUpperCase()}`
            // console.log(props)

            getDocs(collection(db, path)).then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    console.log(doc.id, " => ", doc.data());
                    productsArray.push({ ...doc.data(), id: doc.id })
                });
                setProducts(productsArray)
            }).catch('Error error error')
        }

        getProducts();
    }, [])


    return (
        <div className='allproductpage'>
            <Navbar />
            <div className='heading'>
                <p>Top Results  </p>
            </div>

            <div className="allproductcontainer">
                {products.map((product) => (
                    <Productcontainer
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </div>
    )
}

export default Allproductpage
