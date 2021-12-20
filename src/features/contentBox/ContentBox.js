import { useRef } from "react";
import { useEffect } from "react";

import * as S from "./contentBox.style";

import { icons } from "../../resources/icons/icons";
import placeholder from '../../resources/img/placeholder.png'

export function ContentBox({data:{data}}){

    const {author,title,ups,url,selftext,is_video,media} = data;
    const ref = useRef(null);

    useEffect(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            if(entry.isIntersecting){
                ref.current.classList.add('on-screen');
                observer.unobserve(ref.current);
            }
        },{threshold:0.4});

        if(ref.current){
            observer.observe(ref.current);
        }
    },[ref]);

    return(
        <S.ContentBoxDiv ref={ref}>
            {
                is_video?
                    <S.ContentVid controls>
                        <source src={media.reddit_video.fallback_url}></source>
                    </S.ContentVid>:
                    url.match(/\.(jpeg|jpg|gif|png)$/) != null?
                        <S.ContentImg src={url} alt={title+' thumbnail'} loading="lazy"/>:
                        <S.ContentImg src={placeholder} alt={title+' thumbnail'} loading="lazy"/>
                        }
            <S.ContentTextDiv>
                <S.ContentTitle>{title}</S.ContentTitle>
                <S.ContentAuthor>{'posted by u/'+author}</S.ContentAuthor>
                <S.ContentText>{selftext}</S.ContentText>
            </S.ContentTextDiv>
            <S.ContentRatingDiv>
                <S.ContentRatingCount>{ups}</S.ContentRatingCount>
                <S.ContentRatingLike xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">{icons.like}</S.ContentRatingLike>
            </S.ContentRatingDiv>
        </S.ContentBoxDiv>
    )
}