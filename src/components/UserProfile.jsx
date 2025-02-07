import React from 'react'
import Navbar from './Navbar'
import { useState,useEffect } from 'react'
import { auth, db } from '../firebaseconfig/firebaseConfigs'
import { collection, getDocs, query, where} from 'firebase/firestore'
import './UserProfile.css'

const UserProfile = () => {
  function GetCurrentUser() {
    const [user, setUser] = useState(null);
    const usersCollectionRef = collection(db, "users");
    useEffect(() => {
        auth.onAuthStateChanged(userlogged => {
            if (userlogged) {
                // console.log(userlogged.email)
                const getUsers = async () => {
                    const q = query(collection(db, "users"), where("uid", "==", userlogged.uid));
                    console.log(q);
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
      <Navbar/>
      <div className='userprofile-outercontainer'>
                {loggeduser ?
                    <div className='user-profile'>
                        <p className="heading">Your Account Details</p>
                        <div className='details'>
                            <div className='data-row'>
                                <span>Your Name</span>
                                <span>{loggeduser[0].username}</span>
                            </div>
                            <div className='data-row'>
                                <span>Your Email</span>
                                <span>{loggeduser[0].email}</span>
                            </div>
                            <div className='data-row'>
                                <span>Your Phone Number</span>
                                <span>{loggeduser[0].phonenumber}</span>
                            </div>
                            <div className='data-row'>
                                <span>Your Address</span>
                                <span>{loggeduser[0].address}</span>
                            </div>
                        </div>
                    </div>
                    : <div>You are Not Logged In</div>}
            </div>
    </div>
  )
}

export default UserProfile
