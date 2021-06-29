import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import useIntro from '../components/ShowAnimation';

const Home = () => {

  const showAnimation = useIntro();
  
  
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
            animate={ showAnimation ? {
              opacity: [0, 0, 0, 1],
              easeIn: 6,
            } : ''}
            transition={{ duration: 2 }} >
            <Link to='/Application' className='route-one'>Ansökan</Link>
            <Link to='/About' className='route-two'>Vem är jag?</Link>
            <Link to='/Contact' className='route-three'>Säg hej!</Link>
          </motion.div>
        </nav>
        
          <motion.div
            className='line-one'
            animate={ showAnimation ? {
              rotate: -45,
              opacity: [0, 1],
              easeIn: 2,
            } : '' }
           transition={{ duration: 1.5 }}
          />
          <motion.div
            className='line-two'
            animate={ showAnimation ? {
              opacity: [0, 1],
              easeIn: 1,
            } : '' }
            transition={{ duration: 2 }}
          />
          <motion.div
            className='line-three'
                       animate={ showAnimation ? {
              rotate: 45,
              opacity: [0, 1],
              easeIn: 2,
            } : '' }
            transition={{ duration: 1.5 }}
          />      
      </div>
    );
  };
  
  export default Home;