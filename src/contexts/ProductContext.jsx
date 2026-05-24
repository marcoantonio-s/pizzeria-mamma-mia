import { createContext, useEffect, useState } from "react";
export const ProductContext = createContext()

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        const getProducts = async () => {
            let res = await fetch ("http://localhost:5001/api/pizzas")
            let data = await res.json()
            setProducts(data)
        }
        getProducts()
    },[])

    return (
        <ProductContext.Provider value={{products}}>
            { children }
        </ProductContext.Provider>
    )
}

export default ProductProvider