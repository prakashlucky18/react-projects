import React from 'react';
import './About.css';
import AboutChef1 from '../Resources/Images/about1.jpg';
import AboutChef2 from '../Resources/Images/about2.jpg';
import { Receipes } from '../Components/Receipes';
import { Reviews } from '../Components/Reviews';

function About() {
    return (
        <div className='about-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>About</h1>
                </div>
            </header>

            <div className='container my-5'>
                <p>Indulge your senses at PrakSyam Spice House where culinary artistry meets a warm and inviting atmosphere. Nestled in the heart of Vizianagaram our restaurant is a celebration of exquisite flavors, impeccable service, and a passion for creating memorable dining experiences.
At PrakSyam Spice House our chefs are dedicated to crafting a menu that reflects both innovation and respect for traditional flavors. Explore a diverse range of dishes inspired by global cuisines, all prepared with the finest, locally sourced ingredients. Each bite is a journey through the artistry of our kitchen.</p>
                <p>What sets us apart is our commitment to providing more than just a meal; we offer an experience. From the moment you enter, you'll be greeted with genuine hospitality, and every detail, from the decor to the presentation of each dish, is crafted to make your visit truly exceptional.</p>

                <div className='row'>
                    <div className='col-lg-6'>
                        <img src={AboutChef1} className='img-fluid my-4' alt="" />
                    </div>
                    <div className='col-lg-6'>
                        <img src={AboutChef2} className='img-fluid my-4' alt="" />
                    </div>
                </div>

                <p>Discover the perfect blend of culinary delight and welcoming ambiance at PrakSyam Spice House. Join us for an unforgettable dining experience where every detail is designed to exceed your expectations.

We look forward to welcoming you to PrakSyam Spice House where every meal is a celebration of taste and togetherness.</p>
            </div>

            <div className='bg-dark text-light'>
                <Receipes />
            </div>

            <div className='my-5'>
                <Reviews />
            </div>
        </div>
    )
}

export default About;