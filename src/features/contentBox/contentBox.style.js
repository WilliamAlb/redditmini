import styled from "styled-components";

export const ContentBoxDiv = styled.div`
    width:70%;
    height:fit-content;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:10px;
    box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom:20px;
    
    @media only screen and (max-width:600px){
        width:80%;
    }
`

export const ContentImg = styled.img`
    width:80%;
    height:auto;
    border-radius:10px;
`
export const ContentVid = styled.video`
    width:80%;
    height:auto;
    border-radius:10px;
`
export const ContentTextDiv = styled.div`
    margin:20px 0px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    width:75%;
`
export const ContentTitle = styled.h2`
    font-size:2rem;
    font-weight:300;
    margin:10px 0px;
    color:${({theme})=>theme.textColor};

    @media only screen and (max-width:400px){
        font-size:1.5rem;
        font-weight:400;
    }
`
export const ContentAuthor = styled.h3`
    font-size:1rem;
    margin:10px 0px;
    color:${({theme})=>theme.textColor};

    @media only screen and (max-width:400px){
        font-size:0.8rem;
    }
`
export const ContentText = styled.p`
    font-size:1rem;
    margin:10px 0px;
    overflow:auto;
    height:100px;
    color:${({theme})=>theme.textColor};

    @media only screen and (max-width:400px){
        font-size:0.8rem;
    }
`

export const ContentRatingDiv = styled.div`
    width:100%;
    height:fit-content;
    display:flex;
    justify-content:flex-end;
    align-items:center;
`
export const ContentRatingLike = styled.svg`
    width:40px;
    height:40px;
    color:${({theme})=>theme.textColor};

    @media only screen and (max-width:400px){
            width:30px;
            height:30px;
    }
`
export const ContentRatingCount = styled.p`
    font-size:1rem;
    color:${({theme})=>theme.textColor};

    @media only screen and (max-width:400px){
        font-size:0.8rem;
    }
`