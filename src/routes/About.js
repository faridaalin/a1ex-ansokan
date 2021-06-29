import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/images/profilbild.jpg'
import Navigation from '../components/Navigation';
import TextComponent from '../components/TextComponent';



const About = () => {
 
  const showContent = {
    hidden: { opacity: 0 },
    show: {
      opacity:  [0, 0, 0, 1],
      transition: {
        duration: 2.2
      }
    }
  }
  
  return (
    
    <div className='content-wrapper'>
    
     
      <motion.img layout 
        className='profile-image' 
        alt='Profile picture'
        src={profileImage}
        variants={showContent}
        initial="hidden" 
        animate="show" 
      />
      <Navigation />
      <motion.div 
        variants={showContent}
        initial="hidden" 
        animate="show" >
      <TextComponent heading='Hej Kult!' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' />
          </motion.div>
  
          <motion.div className='line-one'
            initial={{ rotate: -45, x: 0, y:0, width: '21%' }}
            animate={{
              rotate: -90,
              x: -190,
              y: -140,
              width: 350,
            }}
            exit={{ rotate: -45, x: 0, y:0, width: '21%' }}
            transition={{ delay: 0.1, duration: 1.5 }}
          />
          <motion.div className='line-two'
          initial={{ rotate: 0, x: 0, y:0, width: '29%' }}
            animate={{
              x: -100, 
              y: -135,
              width: 700,
            }}
            exit={{ rotate: 0, x: 0, y:0, width: '29%' }}
            transition={{ delay: 0.1, duration: 1.5 }}
          />
          <motion.div className='line-three'
            initial={{ rotate: 45, x: 0, y:0, width: '21%' }}
            animate={{
              rotate: 90,
              x: 140,
              y: 160,
              width: 350,
            }}
            exit={{ rotate: 45, x: 0, y:0, width: '21%' }}
            transition={{ delay: 0, duration: 1.5 }}
          />
          
         
</div>

  );
};

export default About;