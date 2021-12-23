import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectproduct, removeproduct } from '../redux/Action';
import { Link } from 'react-router-dom';
import Addcart from './Addcart';

const ProductDetail = () => {

    const { productId } = useParams();
    console.log(productId)
    const dispatch = useDispatch()
    const slector = useSelector((state) => state.detail)
    const { image, title, price, category, description } = slector
        ;

    console.log(slector)

    const fetchdetails = async () => {
        const result = await axios.get(`https://fakestoreapi.com/products/${productId}`).
            catch((err) => {
                console.log("Err: ", err)
            })
        dispatch(selectproduct(result.data))
    }

    useEffect(() => {
        if (productId && productId !== '') fetchdetails();
        return () => {
            dispatch(removeproduct());
        }

    }, [productId]);


    const detailchange = () => {
        <div>
            <h1>hiii</h1>
        </div>
    }


    return (
        <div className="ui grid container">
            {Object.keys(slector).length === 0 ? (
                <div style={{ fontSize: "50px" }}>...Loading</div>
            ) : (
                <div className="ui placeholder segment">
                    <div className="ui two column stackable center aligned grid">
                        <div className="ui vertical divider">AND</div>
                        <div className="middle aligned row">
                            <div className="column lp">
                                <img className="ui fluid image" src={image} />
                            </div>
                            <div className="column rp">
                                <h1>{title}</h1>
                                <h2>
                                    <a className="ui teal tag label">${price}</a>
                                </h2>
                                <h3 className="ui brown block header">{category}</h3>
                                <p>{description}</p>
                                <div className="ui vertical animated button" tabIndex="0">
                                    <div className="hidden content">
                                        <i className="shop icon"></i>
                                    </div>
                                    {/* <Link to="/add"> */}
                                        <a  href="/add" className="visible content">Add to Cart</a>
                                    {/* </Link> */}

                                    {/* <a href="/f=">Read more</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductDetail;