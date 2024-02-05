import React from "react";
import { MenuBtn } from '../Components/MenuBtn';
import './Home.css';
import AboutImg from '../Resources/Images/restaurant1.jpg';
import { Link } from 'react-router-dom';
import { Receipes } from '../Components/Receipes';
import { ContactInfo } from '../Components/ContactInfo';
import ContactImage from '../Resources/Images/contact1.jpg';
function Home()
{
    return(
        <div className='home-page'>
            <header className='h-100 min-vh-100 d-flex align-items-center text-light shadow'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6 d-flex d-sm-block flex-column align-items-center'>
                            <h2 className='mb-0 text-black fw-bold'>Welcome To</h2>
                            <h1 className='mb-5 text-black fw-bold text-center text-sm-start'>PrakSyam Spice House</h1>
                            <MenuBtn />
                        </div>
                    </div>
                </div>
            </header>
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
                        <img src={AboutImg} className='img-fluid w-50' alt="about img" />
                    </div>
                    <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center'>
                        <h2 className='fs-1 mb-5 text-uppercase fw-bold'>About Us</h2>
                        <p>Step into a warm and inviting ambiance that is a perfect blend of modern sophistication and timeless charm.</p>
                        <p className='mb-5'>Whether you're here for an intimate dinner, a celebration, or a casual get-together, our restaurant offers the ideal setting for every occasion.</p>
                        <Link to="/about">
                            <button type='button' className='btn btn-outline-success btn-lg'>More About Us</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='menu-section py-5 text-light shadow'>
                <div className='container d-flex flex-column align-items-center'>
                    <h2 className='fs-1 mb-5 text-uppercase fw-bold'>Our Favorites</h2>
                    <div className='row mb-5 w-100'>
                        <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
                            <h3 className='fs-2 mb-5'>Food</h3>
                            <ul className='px-0'>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Chicken Dum Biryani</p>
                                    <p className='fs-3 mx-2 text-warning fw-nold'>&#x20B9;300</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Chicken Mandi</p>
                                    <p className='fs-3 mx-2 text-warning fw-nold'>&#x20B9;600</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Chilly Chicken</p>
                                    <p className='fs-3 mx-2 text-warning fw-nold'>&#x20B9;200</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
                            <h3 className='fs-2 mb-5'>Drinks</h3>
                            <ul className='px-0'>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Coffee</p>
                                    <p className='fs-3 mx-2 text-warning fw-nold'>&#x20B9;50</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Milk Shakes</p>
                                    <p className='fs-3 mx-2 text-warning fw-nold'>&#x20B9;100</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>MockTails</p>
                                    <p className='fs-3 mx-2 text-warning fw-nold'>&#x20B9;120</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <MenuBtn />
                </div>
            </div>
            <Receipes/>
            <div className='bg-dark text-light py-5 shadow'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0'>
                            <ContactInfo />
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={ContactImage} className='img-fluid w-50' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;