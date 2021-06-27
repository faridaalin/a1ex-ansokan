import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const Home = () => {

  
  
    return (
      <div className='content-wrapper'>
        <Link to='/'>
          <img
            className='logo'
            src='./assets/images/logo-symbol-vit-liten.png'
            alt='Logo of the website, reads AT, which stands for Alex Thelander'
          />
        </Link>
        <nav className='home-nav'>
          <motion.div
            
            animate={{
              opacity: [0, 0, 0, 1],
              easeIn: 6,
            }}
            transition={{ duration: 2 }}
          >
            <Link to='/Application' className='route-one'>
              Application
            </Link>
            <Link to='/About' className='route-two'>
              Who dis?
            </Link>
            <Link to='/Contact' className='route-three'>
              Contact
            </Link>
          </motion.div>
        </nav>
        <div className='line-group'>
          <motion.div
            className='line-one'
            animate={{
              rotate: -45,
              opacity: [0, 1],
              easeIn: 2,
            }}
            transition={{ duration: 1.5 }}
          />
          <motion.div
            className='line-two'
            animate={{
              opacity: [0, 1],
              easeIn: 1,
            }}
            transition={{ duration: 2 }}
          />
          <motion.div
            className='line-three'
            animate={{
              rotate: 45,
              opacity: [0, 1],
              easeIn: 2,
            }}
            transition={{ duration: 1.5 }}
          />
        </div>
      </div>
    );
  };
  
  export default Home;