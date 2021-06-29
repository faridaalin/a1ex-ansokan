import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';

const Contact = () => {
  return (
    <div className='content-wrapper'>
        <Navigation />
          <motion.div
            className='line-one'
            initial={{ rotate: -45, x: 0, y:0, width: '21%' }}
            animate={{
              rotate: -90,
              x: -240,
              y: 180,
              width: 500,
            }}
            exit={{ rotate: -45, x: 0, y:0, width: '21%' }}
            transition={{ delay: 0.1, duration: 1.5 }}
          />
          <motion.div
            className='line-two'
            initial={{ rotate: 0, x: 0, y:0, width: '29%' }}
            animate={{
              x: -100, 
              y: -120,
              width: 700,
            }}
            exit={{ rotate: 0, x: 0, y:0, width: '29%' }}
            transition={{ delay: 0.1, duration: 1.5 }}
          />
          <motion.div
            className='line-three'
            initial={{ rotate: 45, x: 0, y:0, width: '21%' }}
            animate={{
              rotate: 90,
              x: 120,
              y: -100,
              width: 300,
            }}
            exit={{ rotate: 45, x: 0, y:0, width: '21%' }}
            transition={{ delay: 0, duration: 1.5 }}
          />
      
    </div>
  );
};

export default Contact;