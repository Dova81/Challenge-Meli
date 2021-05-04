import { useEffect, useState, useMemo } from "react";
import API from "api-client/api-client";
import { Item, Categories, ServerItem } from 'types/index'


export default function useItems(id: string): [Categories, Item?] {

    const [data, setData] = useState<ServerItem>();

    useEffect(() => {
        API.getItemDetail(id).then(res => {
            setData(res)
        })
    }, [id]);

    const item = useMemo<Item | undefined>(() => {
        return data && data.item
    }, [data])

    const categories = useMemo<Categories>(() => {
        return (data && data.categories) || []
    }, [data])

    return [categories, item]

}