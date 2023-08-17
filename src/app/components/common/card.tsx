import React from 'react';
import arrowup from '../../../assets/shared/icon-arrow-up.svg';
import styles from './card.module.scss';
import Image from 'next/image';

interface CardProps {}

const Card: React.FC<CardProps> = () => {
  return (
    <div className={styles['card-container']}>
      <div className={styles['card-content']}>
        <div className={styles['vote-indicator']}>
          <div className={styles['vote-count']}>4</div>
        </div>
        <div className={styles['card-title']}>Add a dark theme option</div>
        <div className={styles['card-description']}>
          It would help people with light sensitivities and who prefer dark mode.
        </div>
        <div className={styles['upvote-section']}>
          <div className={styles['upvote-container']}>
            <Image src={arrowup} alt="" />
          </div>
          <div className={styles['upvote-count']}>99</div>
        </div>
        <div className={styles['feature-section']}>
          <div className={styles['feature-container']}>
            <div className={styles['feature-label']}>Feature</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

