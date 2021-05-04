import { useEffect, useState, useMemo, useCallback, useContext, SetStateAction, Dispatch } from "react";
import API from "api-client/api-client";
import { Item, Categories, ServerItemList } from 'types/index'




export default function useItems(keyword: string | null, defaultLimit = 4): [
    Array<Item>,
    Categories,
    () => void,
    () => void,
    Dispatch<SetStateAction<number>>
] {

    const [data, setData] = useState<ServerItemList>();
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [limit, setLimit] = useState<number>(defaultLimit)

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