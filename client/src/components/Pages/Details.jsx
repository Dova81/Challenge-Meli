import React from 'react'

import { Helmet } from "react-helmet";
import SearchBar from 'components/Search/SearchBar'
import ItemDetails from 'components/ItemDetails/Item'


function Details() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Detalles</title>
            </Helmet>
            <SearchBar />
            <ItemDetails />
        </>
    );
}

export default Details;
