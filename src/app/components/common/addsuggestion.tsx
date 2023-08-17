// AddSuggestion.js

import React from 'react';
import bulb from '../../../assets/bulb 2.svg';
import path from '../../../assets/Path 2.svg';
import Button from './button';
import Image from 'next/image';
import styles from './AddSuggestionStyles.module.scss'; // Import the styles

interface AddSuggestionProps {}

const AddSuggestion: React.FC<AddSuggestionProps> = () => {
  return (
    <div className={styles['add-suggestion-container']}>
      <div className={styles['suggestion-details']}>
        <div className={styles['icon-container']}>
          <Image src={bulb} alt="" />
        </div>
        <div className={styles['suggestion-title']}>6 Suggestions</div>
        <div className={styles['sort-by']}>
          <span className={styles['sort-label']}>Sort by : </span>
          <span className={styles['sort-value']}> Most Upvotes</span>
          <div className={styles['sort-icon']}>
            <Image src={path} alt="" />
          </div>
        </div>
      </div>
      <div className={styles['add-button-container']}>
        <div className={styles['button-wrapper']}>
          <Button name="+ Add Feedback" />
        </div>
      </div>
    </div>
  );
};

export default AddSuggestion;
