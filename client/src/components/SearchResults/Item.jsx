import React, { useMemo } from 'react';
import styled from 'styled-components'

const StyledItemContainer = styled.div`
    display:flex;
    background-color:#ffffff;
    margin:0% 5%;
    border-radius:4px;
`


const Thumbnail = styled.img`
    width:180px;
    height:180px;
    margin:16px;
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
`

const StyledTitle = styled.div`
    font-size:18px;
`

const AddressWrapper = styled.div`
    display:flex;
    justify-content: flex-start;
    flex-direction: column;
    margin: 20px 15px 0px auto;
`


export default function Items({ item }) {

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

