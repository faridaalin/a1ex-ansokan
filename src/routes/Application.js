import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';

const Application = () => {

  
  
    return (
      <div className='content-wrapper'>
        <Navigation />
        <div className='line-group'>
          <motion.div
            className='line-one'
            style={{ rotate: -45 }}
            animate={{
              rotate: 0,
              x: -120,
              width: 800,
            }}
            transition={{ delay: 1.5, duration: 1,  }}
          />
          <motion.div
            className='line-two'
            animate={{
              x: 0, 
              y: -111,
              opacity: 0,
            }}
            transition={{ delay: 0, duration: 1.5 }}
          />
          <motion.div
            className='line-three'
            style={{ rotate: 45 }}
            animate={{
              rotate: 90,
              x: 160,
              y: 100,
              width: 400,
              
            }}
            transition={{ delay: 1.5, duration: 1 }}
          />
        </div>
      </div>
    );
  };
  
  export default Application;