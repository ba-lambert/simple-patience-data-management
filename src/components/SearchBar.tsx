import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Importing the search icon

function SearchBar() {
  return (
    <div className='flex justify-center mt-3'>
      <div className='relative'>
        <input
          type="text"
          placeholder='Search here'
          className='w-[600px] text-center h-8 rounded-full border outline-none border-blue-700 tracking-widest pr-8' // Added some padding to the right for the icon
        />
        <button
          type="button"
          className='absolute right-2 top-1/2 transform -translate-y-1/2 focus:outline-none'
        >
          <FaSearch style={{ color: 'blue' }}/>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
