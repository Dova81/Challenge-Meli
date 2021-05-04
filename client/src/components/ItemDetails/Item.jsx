import React from 'react';

import useItemDetails from 'utils/useItemDetails';
import { useParams } from "react-router-dom";
import styled from 'styled-components';




export default function Item() {

    let { id } = useParams();
    const [item] = useItemDetails(id)

    return (
        <>
            {item && item.title}
        </>
    )

}

