import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import bg from './assets/hero.jpg'
import img1 from './assets/1.jpg'
import img2 from './assets/2.jpg'
import img3 from './assets/3.jpg'
import img4 from './assets/4.jpg'
import img5 from './assets/5.jpg'
import img6 from './assets/6.jpg'
import img7 from './assets/7.jpg'
import img8 from './assets/8.jpg'
import phn from './assets/app-iPhone.png'

import logo from './assets/logo-white.png';
export default function App() {
  const Navbar = () => {
    return (
      <nav className="navbar">
        <img src={logo} />
        <div className="nav-items">
          {/* <Link to="/">Home</Link>
          <Link to="/delivery">Delivery</Link>
          <Link to="/promotion">Promotion</Link> */}
          <a href="">
            Home
          </a>
          <a href="">
            Delivery
          </a>
          <a href="">
            Promotion
          </a>
        </div>
      </nav>
    );
  };

  const Hero = () => {
    return (
      <div className="hero">
        <Navbar />
        <div className="bg-container">
          <img src={bg} alt='img' />
        </div>
        <div className="hero-content">
          <h1>GOODBYE JUNK FOOD.</h1>
          <h1>

            HELLO SUPER HEALTHY MEALS
          </h1>
        </div>
      </div>
    );
  };


  const Delivery = () => {
    return (
      <div className="delivery">
        <div className="upper-section">
          <h2>GET FOOD FAST — NOT FAST FOOD</h2>
          <p>Hello, we’re Omnifood, your new premium food delivery service. We know you’re always busy. No time for cooking. So let us take care of that, we’re really good at it, we promise!</p>
        </div>
        <div className="bottom-section">
          <div className="card">
            <img src="path-to-image-1.jpg" alt="Card 1" />
            <p> UP TO 365 DAYS/YEAR
Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.</p>
          </div>
          <div className="card">
            <img src="path-to-image-2.jpg" alt="Card 2" />
            <p>READY IN 20 MINUTES
You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy.</p>
          </div>
          <div className="card">
            <img src="path-to-image-3.jpg" alt="Card 3" />
            <p>100% ORGANIC
All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!</p>
          </div>
          <div className="card">
            <img src="path-to-image-4.jpg" alt="Card 4" />
            <p>ORDER ANYTHING
We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It's up to you!</p>
          </div>
        </div>
      </div>
    );
  };



  const Promotion = () => {
    const imgs = [
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
    ]
    return (
      <div className="promotion">
        <div className="image-grid">
          {imgs.map((img, index) => (
            <div className="image" key={index}>
              <img src={img} alt="" />
            </div>
          ))}
        </div>
      </div>
    );
  };


  const HowItWorks = () => {
    return (
      <div className="how-it-works">
        <h2 style={{marginLeft: '45%'}}>How It Works</h2>
        <div className="content">
          <div className="image-container">
            <img src={phn} alt="How It Works" />
          </div>
          <div className="steps">
            <div className="step">
              <h3> 1</h3>
              <p>Choose the subscription plan that best fits your needs and sign up today.</p>
            </div>
            <div className="step">
              <h3> 2</h3>
              <p>Order your delicious meal using our mobile app or website. Or you can even call us!</p>
            </div>
            <div className="step">
              <h3> 3</h3>
              <p>Enjoy your meal after less than 20 minutes. See you the next time!</p>
            </div>
          <div className="step">
            <button>Download on Play Store 1</button>
            <button>Download on Play Store 2</button>
          </div>
          </div>
        </div>
      </div>
    );
  };



  return (
    <div className='App'>
      <Hero />
      <Delivery />
      <Promotion />
      <HowItWorks />
      {/* <Router>
        <Routes>
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/" element={<Hero />} />
        </Routes>
      </Router> */}
    </div>
    // <div style={{width:'100%'}}>
    //   <Navbar />
    //   <Hero />
    // </div>
  )
}
