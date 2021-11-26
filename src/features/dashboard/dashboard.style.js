import styled from "styled-components";

export const DashboardSection = styled.section`
    min-height:calc(100vh - 100px);
    padding-top:100px;
    background-color:${({theme})=>theme.backgroundColor};
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
`