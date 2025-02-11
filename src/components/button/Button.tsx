import React from 'react';
import styles from './Button.module.css';

const Button = ({ onClick, children, className, ...props }:any) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
