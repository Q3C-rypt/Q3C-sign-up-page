import React from 'react';
import { useState } from 'react';
import './App.css';
import dataBase from './firebase';
import firebase from 'firebase/compat/app';
import video from './assets/binary_back.mp4';

const App = () => {
        const [input, setInput] = useState("");
        const [message, setMessage] = useState("");

        const inputHandler = (e) => {
                setInput(e.target.value);
        }
        const submitHandler = (e) => {
                e.preventDefault();
                if (input){
                    console.log(input);

                    dataBase.collection("emails").add({
                        email: input,
                        time: firebase.firestore.FieldValue.serverTimestamp(),
                    });

                    setInput("");
                    setMessage("Email logged! You will hear news from us shortly 🙂")
                    setTimeout (() => {
                        setMessage(""); 
                    }, 10000);
                }
        }
       
    return (
        <div>
            <div className="sign-up">
                <video src={video} autoPlay muted loop playbackRate={0.5} />
                <h2 className = "text" >Welcome To Q3C!</h2>
                <h1 className = "des">Queen's Cryptography and Cybersecurity Club!</h1>
                <h6 className = "des_det">
                    Sign up with your email below to stay up to date with all future club activities.
                    This includes projects, workshops and general member applications!
                </h6>
                <form onSubmit={submitHandler} className = "blur_box">
                    <h2 className = "Sub" >Please provide your Email: </h2>
                    <input type="email" className = "email" onChange={inputHandler} value = {input}/>
                    <button type="submit" className="submit-button">
                        <text className= "submit" >Submit</text>
                    </button>
                    {message && <alert className = "alert">
                    {message}
                    </alert>}
                </form>
            </div>
        </div>
    )
}

export default App