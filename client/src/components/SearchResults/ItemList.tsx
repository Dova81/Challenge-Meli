import React, { useCallback } from 'react';

import useItems from 'utils/useItems';
import { useLocation } from "react-router-dom";
import ListedItem from 'components/SearchResults/Item'
import BreadCrumbWrapper from 'components/BreadCrumb/BreadCrumb'
import styled from 'styled-components';

import { useHistory } from "react-router-dom";
import Spinner from 'components/Spinner/Spinner';

const ListWrapper = styled.div`
    margin:0% 5%;
`

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



const StyledBorder = styled.span`
        .separator{
            margin: 0% 2%;
            background-color: #eeeeee;
            border-radius: 5px;
            height:2px;
        }

        .container{
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
    const [items, categories, next, previous, setLimit, isLoading] = useItems(query.get("q"))
    const history = useHistory();


    const searchId = useCallback((id) => {
        history.push(`/items/${id}`)
    }, [])


    if (isLoading) { return <Spinner /> }

    return (
        <ListWrapper>
            <BreadCrumbWrapper categories={categories} />

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
        </ListWrapper>
    )

}

