import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handelSubmit(e) {
    e.preventDefault();
    navigate(`/order/${query}`);
  }

  return (
    <form onSubmit={handelSubmit}>
      <input
        placeholder="Search Order..."
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-full w-28 bg-yellow-100 px-4 py-2 text-sm placeholder:text-stone-400 sm:w-64 focus:outline-none
        focus:w-72 focus: ring focus: ring-yellow-500 transition-all duration-300 focus : ring-opacity-50
        "
      />
    </form>
  );
}

export default SearchOrder;
