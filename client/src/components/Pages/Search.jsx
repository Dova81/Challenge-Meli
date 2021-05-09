import React from 'react'

import { Helmet } from "react-helmet";
import SearchBar from 'components/Search/SearchBar'

function Results() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Busqueda</title>
            </Helmet>
            <SearchBar />
        </>
    );
}

export default Results;
