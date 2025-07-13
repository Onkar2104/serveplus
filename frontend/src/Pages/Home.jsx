import { Footer } from '../Componants/Footer';
import { HeroSection } from '../Componants/HeroSection'; 
import React, { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
  const [apiStatus, setApiStatus] = useState("Checking connection...");

  useEffect(() => {
    axios.get("http://localhost:8000/wel/")
      .then((res) => {
        console.log("✅ Connected to backend (Django API)");
        console.log("Response:", res.data);
      })
      .catch((err) => {
        console.error("❌ Could not connect to backend");
        console.error("Error Details c:", err);
      });
  }, []);
    return(
        <>
            <HeroSection/>
            <Footer/>
        </>
    )
}   