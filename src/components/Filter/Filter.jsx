import React from 'react';
import { setFilter } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilterValue } from 'redux/selectors';

export default function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilterValue);
  const onFilterChange = evt => {
    dispatch(setFilter(evt.target.value));
  };
  return (
    <input
      type="text"
      name="filter"
      value={filterValue}
      onChange={onFilterChange}
      required
    />
  );
}
