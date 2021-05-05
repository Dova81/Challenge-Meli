import { Item } from 'types/';
import React, { useMemo } from 'react';
import styled from 'styled-components'
import media from "styled-media-query";



const StyledItemContainer = styled.div`
    display:flex;
    background-color:#ffffff;
    border-radius:4px;
    cursor: pointer;
`


const Thumbnail = styled.img`
    width:180px;
    height:180px;
    margin:16px;
    ${media.lessThan("medium")`
        width:95px;
        height:95px;
        margin: 8px;
    `}
`


const FreeShipping = styled.img`
    margin:0 5%;
`

const BodyWrapper = styled.div`
    display:flex;
    justify-content: flex-start;
    flex-direction: column;
`

const StyledPrice = styled.div`
    font-size:24px;
    margin: 17px 0 32px 0;
    ${media.lessThan("medium")`
        font-size: 16px;
        margin: 13px 0 5px 0;
    `}
`

const StyledTitle = styled.div`
    font-size:18px;
    ${media.lessThan("medium")`
        padding:0px 50px 0px 0px;
        font-size:10px;
    `}
`

const AddressWrapper = styled.div`
    display:flex;
    justify-content: flex-start;
    flex-direction: column;
    margin: 20px 15px 0px auto;
    font-size:12px;
    ${media.lessThan("medium")`
        margin: 10px 5px 0px auto;
    `}
`

interface Props {
    item: Item
}

export default function Items({ item }: Props): JSX.Element {

    const formatedPrice = useMemo(() =>
        item.price.amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".")
        , [item])

    return (
        <StyledItemContainer>
            <Thumbnail src={item.picture} />
            <BodyWrapper>
                <StyledPrice>
                    $ {formatedPrice}
                    {item.free_shipping &&
                        <FreeShipping src="/Assets/ic_shipping.png" />
                    }
                </StyledPrice>
                <StyledTitle>
                    {item.title}
                </StyledTitle>
            </BodyWrapper>
            <AddressWrapper>
                {item.adress.state_name}, {item.adress.city_name}
            </AddressWrapper>
        </StyledItemContainer>
    )

}

