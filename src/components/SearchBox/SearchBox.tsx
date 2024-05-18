import React from 'react';
import Input from '../UI/Input/Input';

function SearchBox({ searchTerm, setSearchTerm }: any) {
  return (
    <Input
      name='search'
      type='text'
      placeholder='Search posts...'
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className='w-70 mx-auto my-12'
    />
  );
}

export default SearchBox;
