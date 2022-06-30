import React, {useEffect} from "react";
import multiData from "../../../Data/product";
import { Button, Card } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Main.css";
import { listProducts } from '../../../Redux/actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../shared/Loader'
import ProductScreen from "./ProductScreen";

const Main = () => {
  const dispatch = useDispatch();
   const productList = useSelector(state => state.productList);
   const { loading, products, error } = productList
   useEffect(() =>{
     dispatch(listProducts())
  },[])
    return (
        <>
        {
            loading ? <Loader/> :
            error ? <h2> { error }</h2> :
            <Row>
            {
                products.map((product) => (
                    <Col key={product._id} md={4}>
                        <ProductScreen product={product} />
                    </Col>
                ))
            }
        </Row>
        }
        </>
    )
};

export default Main;
