import React from 'react';
import styled from 'styled-components';


const BreadCrumbWrapper = styled.div`
    display:flex;
    margin:16px 0%;

`

const StyledBreadCrumb = styled.a`
        &:first-child{
            span{
                display:none;  
            } 
        }
        cursor:pointer;
`
interface Props {
    categories: Array<String>
}

export default function BreadCrumb({ categories }: Props): JSX.Element {

    return (

        <BreadCrumbWrapper>
            {categories.map((category) =>
                <StyledBreadCrumb>
                    <span> &#62; </span>
                    {category}
                </StyledBreadCrumb>
            )}
        </BreadCrumbWrapper>

    )

}

