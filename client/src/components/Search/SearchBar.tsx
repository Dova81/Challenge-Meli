import React, { useCallback, useState } from 'react'
import styled from 'styled-components'

import { useHistory } from "react-router-dom";


const StyledSearchBar = styled.div`
    display:flex;
    align-items:center;
    background-color:#FFE600;
    padding:15px;
    form{
        display:flex;
        width: 100%;
    }
`
const StyledInput = styled.input`
    color:#999999;
    border:none !important;
    outline: none;
    border-radius: 1px;
    padding: 15px 40% 15px 15px;
`

const StyledLogo = styled.img`
    margin: 0% 2% 0% 20%;
`

const StyledButton = styled.button`
    padding: 12px;
    border: none;
    border-radius: 1px;
`


export default function SearchBar(): JSX.Element {
    const history = useHistory();

    const [keyword, setKeyword] = useState("")

    const searchKeyword = useCallback((e) => {
        e.preventDefault()
        history.push(`/items?q=${keyword}`)
    }, [keyword])

    return (
        <StyledSearchBar>
            <StyledLogo src="/Assets/Logo_ML.png" />
            <form onSubmit={(e) => searchKeyword(e)}>
                <StyledInput type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="Nunca dejes de buscar" />
                <StyledButton type="submit">
                    <img src="/Assets/ic_Search.png" />
                </StyledButton>
            </form>
        </StyledSearchBar>

    )

}

