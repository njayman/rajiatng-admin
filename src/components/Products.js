import { useState, useEffect, Fragment } from 'react'
import axios from 'axios'

export default function Products() {
    const [products, setProducts] = useState([])
    const getProducts = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_NOT_AXIOS_DEFAULT_BASE_URL}/api/admin/products`)
            setProducts(data)
        } catch (error) {
            console.log(error.message)
        }

    }

    const deleteProduct = async (id) => {
        try {
            const { data } = await axios.delete(`${process.env.REACT_APP_NOT_AXIOS_DEFAULT_BASE_URL}/api/admin/product/delete/${id}`)
            console.log(data)
            getProducts()
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            {products?.map((product, id) => (
                <Fragment key={id}>
                    <p>{product.name}</p>
                    <button value={product._id} onClick={e => deleteProduct(e.target.value)}>Delete</button>
                </Fragment>
            ))}
        </div>
    )
}
