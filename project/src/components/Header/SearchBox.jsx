import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBox = ({ setIsShown, isShown }) => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/movies/${search}`);
        setSearch('');
    };
    return (
        <form onSubmit={handleSubmit} className='search-box' onClick={() => setIsShown(!isShown)}>
            <input
                type='text'
                name='search'
                id='search'
                placeholder='검색'
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
            />
            <button type='submit' className='search-btn'>
                <img
                    src='https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Search.svg'
                    alt='search'
                />
            </button>
        </form>
    );
};

export default SearchBox;
