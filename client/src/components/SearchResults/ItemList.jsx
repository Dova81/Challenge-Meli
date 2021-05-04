import React, { useCallback } from 'react';

import useItems from 'utils/useItems';
import { useLocation } from "react-router-dom";
import ListedItem from 'components/SearchResults/Item'
import styled from 'styled-components';

import { useHistory } from "react-router-dom";



const PaginationWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const PaginationAnchor = styled.a`
    margin:15px;
    cursor:pointer;
    color:#3425ff;
`

const BreadCrumbWrapper = styled.div`
    display:flex;
    margin:16px 5%;

`

const BreadCrumb = styled.a`
        &:first-child{
            span{
                display:none;  
            } 
        }
        cursor:pointer;
`

const StyledBorder = styled.span`
        cursor: pointer;
        .separator{
            margin: 0% 2%;
            background-color: #eeeeee;
            border-radius: 5px;
            height:2px;
        }

        .container{
            margin:0% 5%;
            background-color:white;
            height:2px;
        }

        *:first-child{
            hr{
                display:none;  
            } 
        }
`

export default function ItemList() {

    const query = new URLSearchParams(useLocation().search);
    const [items, categories, next, previous] = useItems(query.get("q"))
    const history = useHistory();


    const searchId = useCallback((id) => {
        history.push(`items/${id}`)
    }, [])

    return (
        <>
            <BreadCrumbWrapper>
                {categories.map((category) =>
                    <BreadCrumb>
                        <span> &#62; </span>
                        {category}
                    </BreadCrumb>
                )}
            </BreadCrumbWrapper>

            {items && items.map((item) =>
                <StyledBorder onClick={() => searchId(item.id)}>
                    <ListedItem item={item} />
                    <div className="container">
                        <div className="separator" />
                    </div>
                </StyledBorder>
            )}

            <PaginationWrapper>
                <PaginationAnchor onClick={previous}>
                    {"<"} Anterior
                </PaginationAnchor>
                <PaginationAnchor onClick={next}>
                    Siguiente {">"}
                </PaginationAnchor>
            </PaginationWrapper>
        </>
    )

}

