import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header';
import Carousel from '../components/carousel';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Carousel/>
      <div></div>
      <div className='function-card'>
        <div onClick={() => navigate('/register')} id='register' style={{cursor: 'pointer'}}>
          <p>Register</p>
        </div>
        <div onClick={() => navigate('/details')} id='details' style={{cursor: 'pointer'}}>
          <p>Details</p>
        </div>
        <div onClick={() => navigate('/update')} id='update' style={{cursor: 'pointer'}}>
          <p>Update</p>
        </div>
        <div onClick={() => navigate('/delete')} id='delete' style={{cursor: 'pointer'}}>
          <p>Delete</p>
        </div>
      </div>
    </>
  );
};

export default Home;