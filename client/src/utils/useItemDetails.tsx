import { useEffect, useState, useMemo } from "react";
import API from "api-client/api-client";
import { Item, Categories, ServerItem } from 'types/index'


export default function useItems(id: string): [Categories, boolean, Item?] {

    const [data, setData] = useState<ServerItem>();
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        API.getItemDetail(id).then(res => {
            setData(res)
            setIsLoading(false)
        })
    }, [id]);

    const item = useMemo<Item | undefined>(() => {
        return data && data.item
    }, [data])

    const categories = useMemo<Categories>(() => {
        return (data && data.categories) || []
    }, [data])

    return [categories, isLoading, item]

}