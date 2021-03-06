import React from 'react';
import './App.css';
import fire from "./firebase";
import { useState, useEffect } from 'react';
import   "firebase/auth";
import firebase from'firebase'
import Loginstate from "./loginstate";
import Logoutstate from "./logoutstate";

function  Loginlogout (props) {
  const [user,setUser]=useState(null)
  const [admin,setAdmin]=useState(null)
 
 
  const userState=()=>{
     firebase.auth().onAuthStateChanged(user=>{
       if(user) {
           if(user.email==='admin@admin.com') {
            setAdmin(true)
            setUser(user)
           } else {
        
         setUser(user)
         setAdmin(null)
           }
       } else {
        setUser(null)
        setAdmin(null)
       }
     })
   }

   useEffect(()=>{
    userState()
   }
    )
    
       
     return (
          <>
           {user && <Loginstate showCard={props.showCard} admin={admin}/>}
           {!user && <Logoutstate /> }
          </>
     );
   
 }

export default Loginlogout;