import React, { useCallback, useState, useEffect } from 'react';

import useItems from 'utils/useItems';
import { useLocation } from "react-router-dom";


export default function Items() {

    const query = new URLSearchParams(useLocation().search);
    const [items, next, previous] = useItems(query.get("q"))


    return (
        <div>
            {items && items.map((item) =>
                <> {item.nombre}</>
            )}
        </div>
    )

}

