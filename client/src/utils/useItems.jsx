import { useEffect, useState, useMemo, useCallback, useContext } from "react";
import API from "api-client/api-client";


export default function useItems(keyword, defaultLimit = 4) {

    const [data, setData] = useState();
    const [currentPage, setCurrentPage] = useState(0);
    const [limit, setLimit] = useState(defaultLimit)

    const next = useCallback(() => {
        if (data && data.paging.total / limit > currentPage) {
            setCurrentPage((c) => c + 1)
        }
    }, [data, currentPage])

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
        }).then(res => {
            setData(res)
        })
    }, [currentPage, keyword]);

    const items = useMemo(() => {
        return (data && data.items) || []
    }, [data, currentPage])

    const categories = useMemo(() => {
        return (data && data.categories) || []
    }, [data, currentPage])

    return [items, categories, next, previous, setLimit]
}