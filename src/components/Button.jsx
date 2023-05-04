import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import buttonStyles from '../assets/styles/components/button.module.css';

const Button = ({ text, onClick }) => {
  return (
    <motion.button
      className={buttonStyles.btn}
      type="button"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
