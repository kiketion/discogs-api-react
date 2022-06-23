import '../styles.css';

export default function SearchBar() {
  return (
    <div className='searchbar'>
      <input placeholder='Artists, albums and more...' />
      <button>SEARCH</button>
    </div>
  );
}
