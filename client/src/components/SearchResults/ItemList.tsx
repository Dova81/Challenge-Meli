import React, { useCallback, useState } from 'react';

import useItems from 'utils/useItems';
import { useLocation } from "react-router-dom";
import ListedItem from 'components/SearchResults/Item'
import BreadCrumbWrapper from 'components/BreadCrumb/BreadCrumb'
import styled from 'styled-components';

import { useHistory } from "react-router-dom";
import Spinner from 'components/Spinner/Spinner';
import Pagination from 'components/Pagination/Pagination';

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
    const [offset, setOffset] = useState<number>(0);
    const [size, setSize] = useState<number>(4)

    const [items, categories, isLoading, paging,] = useItems({
        keyword: query.get("q"),
        size,
        offset

    })
    const history = useHistory();

    const currentPage = Math.floor(offset / size)
    const totalPage = Math.ceil((paging?.total ?? 0) / size)

    const setPage = useCallback((newPage) => {
        setOffset(size * newPage)
    }, [size])

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

            {totalPage > 1 &&
                <Pagination
                    current={currentPage}
                    total={totalPage}
                    setPage={setPage}
                />}
        </ListWrapper>
    )

}

