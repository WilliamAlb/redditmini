import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";


import { fetchSearchResults, selectSearchResults,selectSearchState } from "../slices/searchResultSlice";

import { ContentBox } from "../contentBox/ContentBox";

import { DashboardSection } from "./dashboard.style";

import { initialQuery } from "../../utils/CONSTS";
import { LoadingScreen } from "../loadingscreen/LoadingScreen";

export function Dashboard(){
    
    const dispatch = useDispatch();
    const state = useSelector(selectSearchState);
    const searchResults = useSelector(selectSearchResults);

    useEffect(()=>{
        dispatch(fetchSearchResults(initialQuery));
    },[dispatch])
    

    return(
        <DashboardSection>
            {
                state==='loading'||state==='idle'?
                    <LoadingScreen />:
                    searchResults.map((item)=>{
                        return <ContentBox data={item}></ContentBox>
                    })
            }
            
        </DashboardSection>
    )
}