import React from 'react';
import './filters.css';
import Item from './item';

const Filters = ({filterList}) => {
  return (
    <div className='filters'>
      {filterList &&
      filterList.map((filter) => {
        return  <Item filter={filter} key={filter.id} />; 
      })}
    </div>
  ); 
};

export default Filters;