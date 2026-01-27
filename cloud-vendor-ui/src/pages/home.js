import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header';
import Carousel from '../components/carousel';
import MoreAbout from '../components/moreabout';
import Footer from '../components/Footer';
import HowItWorks from '../components/HowItWorks';
import { FaUserPlus, FaInfoCircle, FaEdit, FaTrash } from 'react-icons/fa';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Carousel/>
      <MoreAbout/>
      <HowItWorks/>
      <div className='function-card'>
      <div className='card' onClick={() => navigate('/register')} id='register'>
        <FaUserPlus className='icon' />
        <span>Register</span>
      </div>
      <div className='card' onClick={() => navigate('/details')} id='details'>
        <FaInfoCircle className='icon' />
        <span>Details</span>
      </div>
      <div className='card' onClick={() => navigate('/update')} id='update'>
        <FaEdit className='icon' />
        <span>Update</span>
      </div>
      <div className='card' onClick={() => navigate('/delete')} id='delete'>
        <FaTrash className='icon' />
        <span>Delete</span>
      </div>
    </div>
      <Footer/>
    </>
  );
};

export default Home;