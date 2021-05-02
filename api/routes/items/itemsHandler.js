const Axios = require("axios");


const server = "https://api.mercadolibre.com/sites/MLA/"

const reducer = (accumulator, currentValue) => {
    return {
        author: {
            name: "Tobias",
            lastname: "Calvento",
        },
        categories: [...accumulator["categories"], currentValue.category_id],
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
        }
        ],
        paging: currentValue.paging
    }
}


function itemsHandler({ query: { q, limit, offset } }, res, next) {
    Axios.get(`${server}search?q=${q}&limit=${limit}&offset${offset}`)
        .then(({ data: { results, paging } }) => {
            const defaultValue = {
                categories: [],
                items: [],

            }
            const reducedData = results.reduce(reducer, defaultValue)

            res.send({
                ...reducedData,
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