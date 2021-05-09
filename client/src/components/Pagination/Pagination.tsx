import React, { useCallback, useState } from 'react';

import styled from 'styled-components';




const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const PaginationAnchor = styled.button`
    background-color:#ffffff;
    border-radius:2px;
    font-size: 20px;
    font-weight:bold;
    border:none;
    margin: 15px 10px;
    padding: 15px;
    cursor:pointer;
    color:#3425ff;

    :hover{
        background-color:#b6b3b3;
    }
`

interface Props {
    current: number
    total: number
    setPage: (x: number) => void
}



export default function Pagination({ current, total, setPage }: Props) {


    if (current == 0) {
        return (
            <PaginationWrapper>
                <PaginationAnchor >
                    {current}
                </PaginationAnchor>
                <PaginationAnchor onClick={() => setPage(current + 1)}>
                    {current + 1}
                </PaginationAnchor>
                <PaginationAnchor onClick={() => setPage(current + 2)}>
                    {current + 2}
                </PaginationAnchor>
                ...
                <PaginationAnchor onClick={() => setPage(total)}>
                    {total}
                </PaginationAnchor>
            </PaginationWrapper>
        )
    }


    if (current == total) {
        return (
            <PaginationWrapper>
                <PaginationAnchor onClick={() => setPage(1)}>
                    1
                </PaginationAnchor>
                ...
                <PaginationAnchor onClick={() => setPage(current - 1)}>
                    {current - 1}
                </PaginationAnchor>
                <PaginationAnchor onClick={() => setPage(current - 2)}>
                    {current - 2}
                </PaginationAnchor>
                <PaginationAnchor >
                    {current}
                </PaginationAnchor>
            </PaginationWrapper>
        )
    }

    return (
        <PaginationWrapper>
            <PaginationAnchor onClick={() => setPage(1)}>
                1
            </PaginationAnchor>
            ...
            <PaginationAnchor onClick={() => setPage(current - 1)}>
                {current - 1}
            </PaginationAnchor>
            <PaginationAnchor >
                {current}
            </PaginationAnchor>
            <PaginationAnchor onClick={() => setPage(current + 1)}>
                {current + 1}
            </PaginationAnchor>
            ...
            <PaginationAnchor onClick={() => setPage(total)}>
                {total}
            </PaginationAnchor>
        </PaginationWrapper>

    )

}

