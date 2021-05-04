export interface Item {
    id: string
    title: string
    price: {
        currency: string
        amount: Number
        decimals: Number
    },
    picture: string
    condition: string
    free_shipping: Boolean
    description?: string
    sold_quantity: number
    adress: {
        state_id: string
        state_name: string
        city_id: string
        city_name: string
    }
}

export interface Paging {
    total: number,
    primary_results: number,
    offset: number,
    limit: number
}


export interface ServerItem {
    author: Author
    item: Item
    categories: Categories
}

export interface ServerItemList {
    author: Author
    items: Array<Item>
    categories: Categories
    paging: Paging
}



interface Author {
    name: string
    lastname: string
}

export type Categories = Array<string>;