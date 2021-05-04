import { useEffect, useState } from "react";
import API from "api-client/api-client";


export default function useItems(id) {

    const [item, setItem] = useState();

    useEffect(() => {
        API.getItemDetail(id).then(res => {
            setItem(res.item)
        })
    }, [id]);

    return [item]

}