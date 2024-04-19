import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar.jsx'
import Banner from '../banner.jsx'
import { auth, db } from '../../firebaseconfig/firebaseConfigs.js'
import { collection, getDocs, query, where } from 'firebase/firestore'
import ProductSlider from '../Products/Productslider/ProductSlider.jsx'
import Footer from '../Similarcom/Footer.jsx'
import Gallery from '../../Gallery.jsx'
import AboutUs from '../../Aboutus.jsx'

const Home = () => {

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

  return (
    <div>
      <Navbar />
      <Banner />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <AboutUs />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="course__top d-flex justify-content-between align-items-center">
        <div className="course__top__left w-100">
          <h2>-- Online Products --</h2>
          <p>
            "Lower prices than other online sites."</p>
        </div>
      </div>
      <br />



      <ProductSlider type={'Mobile'} />
      <ProductSlider type={'camera'} />
      <ProductSlider type={'laptop'} />
      <ProductSlider type={'acceseris'} />
      <Gallery />

      <Footer />
    </div>
  )
}

export default Home