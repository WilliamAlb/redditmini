import * as S from "./contentBox.style";
import placeholder from '../../resources/img/placeholder.png'
import { icons } from "../../resources/icons/icons";
export function ContentBox({data:{data}}){

    const {author,title,ups,url,selftext,is_video,media} = data;
    console.log({author,title,ups,url,selftext,});
    
    return(
        <S.ContentBoxDiv>
            {
                is_video?
                    <S.ContentVid controls>
                        <source src={media.reddit_video.fallback_url}></source>
                    </S.ContentVid>:
                    url.match(/\.(jpeg|jpg|gif|png)$/) != null?
                        <S.ContentImg src={url} alt={title+' thumbnail'}/>:
                        <S.ContentImg src={placeholder} alt={title+' thumbnail'}/>
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