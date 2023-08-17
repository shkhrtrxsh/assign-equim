import React from 'react';
import styles from './button.module.scss'; // Import the SASS module

interface ButtonProps {
  name: string;
}

function Button({ name }: ButtonProps) {
  return (
    <div className={styles.button}>{name}</div>
  );
}

export default Button;

