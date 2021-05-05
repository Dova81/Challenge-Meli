const Axios = require("axios");


const server = "https://api.mercadolibre.com/sites/MLA/"

const reducerItems = (accumulator, currentValue) => {
    return {
        items: [...accumulator["items"],
        {
            id: currentValue.id,
            title: currentValue.title,
            price: {
                currency: currentValue.currency_id,
                amount: currentValue.price,
                decimals: 0
            },
            picture: currentValue.thumbnail,
            condition: currentValue.condition,
            free_shipping: currentValue.shipping.free_shipping,
            adress: {
                ...currentValue.address
            }
        }
        ],
    }
}


const reducerCategories = (accumulator, currentValue) => [...accumulator, currentValue.name]


function itemsHandler({ query: { q, limit, offset } }, res, next) {
    Axios.get(`${server}search?q=${q}&limit=${limit}&offset=${offset}`)
        .then(({ data: { results, paging, filters } }) => {

            const reducedItems = results.reduce(reducerItems, { items: [], })
            const categories = filters.find(e => e.id === "category")
            const reducedCategories = categories ? categories.values[0].path_from_root.reduce(reducerCategories, []) : []
            res.send({
                ...reducedItems,
                categories: reducedCategories,
                author: {
                    name: "Tobias",
                    lastname: "Calvento",
                },
                paging
                ,
            });
        }
        )
        .catch((err) => {
            console.log(err)
            res.status(500)
            res.end()
        });
}

module.exports = itemsHandler;