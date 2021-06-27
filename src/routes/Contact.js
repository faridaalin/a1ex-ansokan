import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';

const Contact = () => {
  return (
    <div className='input-wrapper'>
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
              y: 180,
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
              x: 120,
              y: -100,
              width: 300,
            }}
            transition={{ delay: 0, duration: 1.5 }}
          />
        </div>
    </div>
  );
};

export default Contact;