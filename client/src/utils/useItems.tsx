import { useEffect, useState, useMemo, useCallback, useContext, SetStateAction, Dispatch } from "react";
import API from "api-client/api-client";
import { Item, Categories, ServerItemList, Paging } from 'types/index'


interface Props {
    keyword: string | null
    size: number
    offset: number
}


export default function useItems({ keyword, size, offset }: Props): [
    Array<Item>,
    Categories,
    boolean,
    Paging?,
] {

    const [data, setData] = useState<ServerItemList>();

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        API.getResults({
            keyword,
            size,
            offset: size * offset,
        }).then(res => {
            setIsLoading(false)
            setData(res)
        })
    }, [offset, keyword]);

    const paging = useMemo(() => {
        return (data && data.paging)
    }, [data, offset])

    const items = useMemo(() => {
        return (data && data.items) || []
    }, [data, offset])

    const categories = useMemo(() => {
        return (data && data.categories) || []
    }, [data, offset])

    return [items, categories, isLoading, paging]
}