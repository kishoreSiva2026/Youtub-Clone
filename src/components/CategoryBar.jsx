import React from 'react';
import { categories } from '../data/videos';
import './CategoryBar.css';

const CategoryBar = ({ selectedCategory, onCategorySelect }) => {
  return (
    <div className="category-bar">
      {categories.map(category => (
        <button
          key={category}
          className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
          onClick={() => onCategorySelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryBar;