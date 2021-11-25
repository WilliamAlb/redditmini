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
`;