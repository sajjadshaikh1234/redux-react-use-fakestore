import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios'
import { setproduct } from '../redux/Action'


const ProductListing = () => {

    const products = useSelector((state) => state.allproducts.products)
    const dispatch = useDispatch()

    const fetchdata = async () => {
        const resp = await axios.get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("Err: ", err)
            });
        dispatch(setproduct(resp.data))
    }
    useEffect(() => {
        fetchdata()
    }, [])
    console.log("products: ", products)
    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    );
}

export default ProductListing;