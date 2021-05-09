import React, { useMemo } from 'react';
import useItemDetails from 'utils/useItemDetails';
import capitalize from 'utils/capitalize';
import { useParams } from "react-router-dom";
import BreadCrumbWrapper from 'components/BreadCrumb/BreadCrumb'
import Spinner from 'components/Spinner/Spinner';

import styled from 'styled-components';
import media from 'styled-media-query'


const DetailsWrapper = styled.div`
    display:flex;
    background-color:#ffffff;
    border-radius:10px;
    flex-direction: column;
`

const Container = styled.div`
    margin: 0 10%;
    ${media.lessThan("medium")`
        margin-bottom:10%;
    `}
`

const HeaderAndThumbnail = styled.div`
    display:flex;
    width:100%;
    ${media.lessThan("medium")`
        margin:5%;
    `}
`

const State = styled.span`
    font-size:14px;
    margin-bottom:8px;
    ${media.lessThan("medium")`
        font-size: 8px;
        margin-bottom: 5px;
    `}
`

const Title = styled.span`
    font-size:24px;
    margin-top:8px;
    margin-bottom:16px;
    ${media.lessThan("medium")`
        font-size: 10px;
        margin-top: 4px;
        margin-bottom: 5px;
    `}
`

const Price = styled.span`
    font-size:36px;
    margin-top:16px;
    margin-bottom:32px;
    ${media.lessThan("medium")`
        font-size: 18px;
        margin-top: 8px;
        margin-bottom: 16px;
    `}
`

const Button = styled.button`
    cursor: pointer;
    border-radius:5px;
    border:none;
    background-color:#3483FA;
    margin:0px 50% 0px 0px;
    padding:2%;
    color:white;
`

const Description = styled.div`
    display:flex;
    flex-direction: column;
    margin-left:3%;
`
const DescriptionTitle = styled.span`
    font-weight:28px;
`

const DescriptionBody = styled.span`
    margin:32px 27% 32px 0px;
    font-size:16px;
    color:#999999;
    ${media.lessThan("medium")`
    font-size:9px;
    margin:32px 2% 32px 0px;
    `}
`


const ItemInfo = styled.div`
    display:flex;
    flex-direction: column;
    margin:32px 10px;
    ${media.lessThan("medium")`
        margin:0px 10px;
    `}
`

const Picture = styled.img`
    width:45%;
    margin:0% 1%;
    ${media.lessThan("medium")`
        width:60%;
        height:60%;
    `}
`

interface ParamType {
    id: string
}


export default function Item(): JSX.Element {

    let { id } = useParams<ParamType>();
    const [categories, isLoading, item] = useItemDetails(id)

    const formatedPrice = useMemo(() =>
        item?.price.amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".")
        , [item])

    if (isLoading) { return <Spinner /> }

    return (
        <Container>
            <BreadCrumbWrapper categories={categories} />
            <DetailsWrapper>
                <HeaderAndThumbnail>
                    <Picture src={item?.picture} />
                    <ItemInfo>
                        <State>{capitalize(item?.condition)} - {item?.sold_quantity}</State>
                        <Title><b>{item?.title}</b></Title>
                        <Price>${formatedPrice}</Price>
                        <Button>
                            Comprar
                        </Button>
                    </ItemInfo>
                </HeaderAndThumbnail>
                <Description>
                    <DescriptionTitle> Descripcion del Producto</DescriptionTitle>
                    <DescriptionBody> {item?.description}</DescriptionBody>
                </Description>
            </DetailsWrapper>

        </Container>
    )

}

