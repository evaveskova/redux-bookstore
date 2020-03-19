import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeFilter } from '../actions';

const CategoryFilter = props => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const handleFilterChange = event => {
    const { changeFilter } = props;
    if (event.target.value !== 'All') {
      changeFilter(event.target.value);
    } else {
      changeFilter('All');
    }
  };

  return (
    <label htmlFor="filter" id="category-filter-label">
      Filter By:
      <select id="categories" onChange={handleFilterChange}>
        { categories.map(category => <option value={category} key={`${category}_filter`}>{category}</option>)}
      </select>
    </label>
  );
};

CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  changeFilter: category => dispatch(changeFilter(category)),
});

export default connect(null, mapDispatchToProps)(CategoryFilter);
