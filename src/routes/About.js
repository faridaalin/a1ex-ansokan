import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import profileImage from '../assets/images/profilbild.jpg'
import Navigation from '../components/Navigation';


const About = () => {
  return (
    
    <div className='content-wrapper'>
      <AnimatePresence>
      <motion.img 
      className='profile-image' 
      alt='Profile picture'
      src={profileImage}
      style={{ 
        position: 'aboslute',
      }}
      animate={{
        opacity: [0, 0, 0, 0, 1],
        ease: [0.17, 0.67, 0.83, 0.67],
      }}
      transition={{ duration: 2.2 }}
     
      />
      </AnimatePresence>
      <Navigation />
        <div className='line-group'>
          <motion.div
            className='line-one'
            style={{ 
              rotate: -45,
              position: 'aboslute',
            }}
            animate={{
              rotate: -90,
              x: -240,
              y: -140,
              width: 500,
            }}
            transition={{ delay: 0.1, duration: 1.5 }}
          />
          <motion.div
            className='line-two'
            style={{ 
              position: 'aboslute',
            }}
            animate={{
              x: -100, 
              y: -120,
              width: 700,
            }}
            transition={{ delay: 0.1, duration: 1.5 }}
          />
          <motion.div
            className='line-three'
            style={{ 
              rotate: 45,
              position: 'aboslute',
            }}
            animate={{
              rotate: 90,
              x: 200,
              y: 210,
              width: 500,
              
            }}
            transition={{ delay: 0, duration: 1.5 }}
          />
        </div>
</div>
  );
};

export default About;