import React from 'react';
import Image from 'next/image';
import up from '../../../assets/shared/icon-arrow-up.svg';
import cloud from '../../../assets/Path.svg';
import styles from './Card2.module.scss';

interface Card2Props {}

const Card2: React.FC<Card2Props> = () => {
  return (
    <div>
      <div className="w-[350px] h-1.5 bg-orange-300 rounded-tl-[5px] rounded-tr-[5px]" />
      <div className={styles['card2-container']}>
        <div className={styles['status-indicator']}>
          <div className={styles['status-icon']} />
          <div className={styles['status-text']}>Planned</div>
        </div>
        <div className={styles['card2-content']}>
          <div className={styles['card2-title']}>More comprehensive reports</div>
          <div className={styles['card2-description']}>
            It would be great to see a more detailed breakdown of solutions.
          </div>
        </div>
        <div className={styles['feature-btn']}>
          <button className={styles['btn']}>Feature</button>
        </div>
        <div className={styles['interaction-section']}>
          <div>
            <div className={styles['upvote-container']}>
              <div className={styles['upvote-icon']}>
                <Image src={up} alt="" />
              </div>
              <div className={styles['upvote-count']}>123</div>
            </div>
          </div>
          <div className={styles['cloud-container']}>
            <div className={styles['cloud-icon']}>
              <Image src={cloud} alt="" />
            </div>
            <div className={styles['cloud-count']}>1</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
