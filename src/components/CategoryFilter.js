import React from 'react';

const CategoryFilter = () => {
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    const bookCategories = ['All'].concat(categories);

        return (
            <label htmlFor="filter" id="category-filter-label">
              Categories
              <select id="categories" selected="All">
                { bookCategories.map(category => <option value={category} key={`${category}_option`}>{category}</option>)}
              </select>
            </label>
        );
};

export default CategoryFilter;