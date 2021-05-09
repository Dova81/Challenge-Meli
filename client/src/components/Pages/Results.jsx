import React from 'react'

import { Helmet } from "react-helmet";
import SearchBar from 'components/Search/SearchBar'
import SearchResults from 'components/SearchResults/ItemList'


function Results() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Resultados</title>
            </Helmet>
            <SearchBar />
            <SearchResults />
        </>
    );
}

export default Results;
