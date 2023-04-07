import React from 'react';
import { filterContact } from '../../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterValue } from 'redux/contactsSlice';

export default function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);
  const onFilterChange = evt => {
    dispatch(filterContact(evt.target.value));
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
