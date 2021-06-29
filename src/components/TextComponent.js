import React from 'react';
import propTypes from 'prop-types';
import { motion } from 'framer-motion';

const TextComponent = ({ heading, text }) => {
    return (
        
        <motion.div className='text-container'>
        <h1 className="heading">{heading}</h1>
        <h2 className="heading">{heading}</h2>
        <p className="text">{text}</p>
        <p className="text-two">{text}</p>
        </motion.div> 
        
    );
};

// eslint-disable-next-line react/no-typos
TextComponent.propTypes = {
    heading: propTypes.string,
    text: propTypes.string
};

export default TextComponent;