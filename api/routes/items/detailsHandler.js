const Axios = require("axios");


const server = "https://api.mercadolibre.com/"

const transformItem = (item) => {
    return {
        id: item.id,
        title: item.title,
        price: {
            currency: item.currency_id,
            amount: item.price,
            decimals: 0,
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        sold_quantity: item.sold_quantity,
    }
}

function getItemDetails(id) {
    return Axios.get(`${server}items/${id}`)
        .then(response =>
            Axios.get(`${server}categories/${response.data.category_id}`)
                .then(({ data: { path_from_root } }) => {
                    return (
                        {
                            categories: path_from_root.map(e => e.name),
                            item: {
                                ...transformItem(response.data),
                            }
                        }
                    )
                })
        )
}


function getItemDescription(id) {
    return (
        Axios.get(`${server}items/${id}/description`)
            .then(({ data: { plain_text } }) => {
                return plain_text
            })

    )
}

function detailsHandler({ params: { id } }, res, next) {

    Promise.all([getItemDetails(id, res), getItemDescription(id, res)])
        .then(response => {
            const data = {
                categories: response[0].categories,
                item: {
                    ...response[0].item,
                    description: response[1]
                }
            }
            res.send(data)
        }
        ).catch((err) => {
            console.log(err)
            res.status(500)
            res.end()
        })

}

module.exports = detailsHandler;