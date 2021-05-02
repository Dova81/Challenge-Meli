import { useEffect, useState, useMemo, useCallback } from "react";
import API from "api-client/api-client";


export default function useItems(keyword, defaultLimit = 4) {

    const [data, setData] = useState();
    const [currentPage, setCurrentPage] = useState(0);
    const [limit, setLimit] = useState(defaultLimit)

    const next = useCallback(() => {
        if (currentPage > 0) {
            setCurrentPage((c) => c + 1)
        }
    }, [currentPage])

    const previous = useCallback(() => {
        if (currentPage > 0) {
            setCurrentPage((c) => c - 1)
        }
    }, [currentPage])

    useEffect(() => {
        API.getResults({
            keyword,
            limit,
            offset: limit * currentPage,
        }).then(resData => setData(resData))
    }, [currentPage, keyword]);

    const items = useMemo(() => {
        return (data && data.items) || []
    }, data)

    return [items, next, previous, setLimit]
}