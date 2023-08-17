import React from 'react';
import Sidebar from '../common/sidebar';
import AddSuggestion from '../common/addsuggestion';
import Card from '../common/card';
import styles from './SuggestionActive.module.scss'; // Import the generated Sass file

interface SuggestionActiveProps {}

const SuggestionActive: React.FC<SuggestionActiveProps> = () => {
  return (
    <div className={styles['suggestion-active-container']}>
      <div className={styles['sidebar-section']}>
        <Sidebar />
      </div>
      <div className={styles['content-section']}>
        <AddSuggestion />
        <div className={styles['card-section']}>
          <Card />
        </div>
        <div className={styles['card-section']}>
          <Card />
        </div>
        <div className={styles['card-section']}>
          <Card />
        </div>
        <div className={styles['card-section']}>
          <Card />
        </div>
        <div className={styles['card-section']}>
          <Card />
        </div>
      </div>
    </div>
  );
}

export default SuggestionActive;
