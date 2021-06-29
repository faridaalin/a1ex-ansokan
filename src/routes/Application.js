import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import TextComponent from '../components/TextComponent';

const Application = () => {

  const showText = {
    hidden: { opacity: 0 },
    show: {
      opacity:  [0, 0, 0, 1],
      transition: {
        duration: 3.4
      }
    }
  }
    return (
      <div className='content-wrapper'>
        <Navigation />
        <motion.div 
        variants={showText}
        initial="hidden" 
        animate="show" >
        <TextComponent heading='HEJ KULT!' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' />
        </motion.div>
          <motion.div className='line-one'
               initial={{ rotate: -45, x: 0, y:0, width: '21%' }}
            animate={{
              rotate: 0,
              x: -120,
              width: 800,
            }}
            exit={{ rotate: -45, x: 0, y:0, width: '21%' }}
            transition={{ duration: 1.5,  }}
          />
          <motion.div className='line-two'
          initial={{ rotate: 0, x: 0, y:0, width: '29%' }}
            animate={{
              x: 0, 
              y: -111,
              opacity: 0,
            }}
            exit={{ opacity: 1, rotate: 0, x: 0, y:0, width: '29%' }}
            transition={{ duration: 1 }}
          />
          <motion.div className='line-three'
            initial={{ rotate: 45, x: 0, y:0, width: '21%' }}
            animate={{
              rotate: 90,
              x: 160,
              y: 100,
              width: 400, 
            }}
            exit={{ rotate: 45, x: 0, y:0, width: '21%' }}
            transition={{ duration: 1.5 }}
            
          />
       
      </div>
    );
  };
  
  export default Application;