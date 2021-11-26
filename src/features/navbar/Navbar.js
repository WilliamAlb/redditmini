import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { fetchSearchResults } from '../slices/searchResultSlice';

import * as S from './navbar.styled';

import { icons } from '../../resources/icons/icons';
import { initialQuery } from '../../utils/CONSTS';

export function Navbar(){
    const dispatch = useDispatch();
    const [search,setSearch] = useState(initialQuery);


    const handleChange = (e) =>{
        setSearch(e.target.value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(fetchSearchResults(search));
        setSearch('');
    }
    return (
        <S.Nav>
            <S.Navlogodiv>
            <S.Navlogo xmlns="http://www.w3.org/2000/svg" height="800" width="1200" viewBox="-25.65 -42.75 222.3 256.5">{icons.redditLogo}</S.Navlogo>
            <S.Navlogotext>Mini</S.Navlogotext>
            </S.Navlogodiv>
            <S.SearchForm onSubmit={handleSubmit}>
                <S.SearchBar type="text" onChange={handleChange} value={search}></S.SearchBar>
                <S.SearchButton xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">{icons.searchGlass}</S.SearchButton>
            </S.SearchForm>
        </S.Nav>
    )
}