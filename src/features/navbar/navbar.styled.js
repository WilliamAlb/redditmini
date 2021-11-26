import styled from "styled-components";

export const Nav = styled.nav`
    width:100%;
    height:80px;
    background-color:${({theme})=>theme.backgroundColor};
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position:fixed;
    top:0px;
    left:0px;
    z-index:999;
`;
export const Navlogo = styled.svg`
    color:${({theme})=>theme.detailColor};
    height:80px;
    width:80px;
`
export const Navlogodiv = styled.div`
    width:fit-content;
    height:fit-content;
    display:flex;
    justify-content:center;
    align-items:center;
`

export const Navlogotext = styled.h1`
    font-size:1.5rem;
    color:${({theme})=>theme.textColor};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
export const SearchForm = styled.form`
    width:200px;
    border-radius:20px;
    background-color:white;
    padding:10px;
    display:flex;
    align-items:center;
    box-shadow: 0px 0px 4px 4px rgba(0,0,0,0.25);
`
export const SearchButton = styled.svg`
    width:15%;
`
export const SearchBar = styled.input`
    width:80%;
    background-color:transparent;
    font-size:1.5rem;
    border:none;
    outline:none;
`