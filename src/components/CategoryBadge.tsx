// components/CategoryBadge.tsx
import React from 'react';
import styles from './HotelCategories.module.css';

interface CategoryBadgeProps {
  type: string;
}

const CategoryBadge: React.FC<CategoryBadgeProps> = ({ type }) => {
  return (
    <div className={styles.categoryBadge}>
      <span className={styles.categoryType}>{type}</span>
    </div>
  );
};

export default CategoryBadge;