import { useNavigate } from 'react-router-dom';
import { AddNewSearchList } from '../../store/modules/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const SearchBox = ({ setIsShown, isShown, search, setSearch }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.isLoginUser);
    const { allMovies } = useSelector((state) => state.channel);
    const { isLoginUser } = useSelector((state) => state.auth);
    const allTitle = allMovies.map((movie) => movie.movie_title);

    const onSubmit = (e) => {
        e.preventDefault();
        if (search) {
            dispatch(AddNewSearchList({ user_id: user.user_id, search }));
            navigate(`/movies/${search}`);
            setSearch('');
        } // 검색어 저장
    };

    return (
        <form onSubmit={onSubmit} className='search-box' onClick={() => setIsShown(!isShown)}>
            <input
                type='text'
                name='search'
                id='search'
                placeholder='검색'
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
                list='search-options'
            />
            <datalist id='search-options'>
                {isLoginUser.user_search_list.length === 0 &&
                    allTitle
                        .filter((title) => title.includes(search))
                        .slice(0, 10)
                        .map((item, idx) => (
                            <option key={idx} value={item}>
                                {item}
                            </option>
                        ))}
            </datalist>
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
