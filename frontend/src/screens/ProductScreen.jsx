import { useParams, Link } from "react-router-dom";
import {Row, Col, Image, ListGroup, Card, Button, Form, ListGroupItem} from 'react-bootstrap'
import Rating from "../component/Rating";
import { useGetProductsDetailsQuery } from "../slices/productApiSlice";
import Loader from "../component/Loader";
import Message from "../component/Message";
import { useState } from "react";

const ProductScreen = () => {

 const {id: productId} =useParams();
 const [qty,setQty] = useState(1)
 const {data:product,isLoading,error}=useGetProductsDetailsQuery(productId);


  return (
    <>
    <Link className="btn btn-light my-3" to="/">
        Go Back
        </Link>
        

        {isLoading ? (<Loader />) : error ? (<Message variant={'danger'}>{error?.data?.message || error.error}</Message>) : (<Row>
            <Col md={5}>
                <Image src={product.image} alt={product.name} fluid/>
            </Col>
            <Col md={4}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={product.rating} text={`${product.numReviews} Reviews`}/>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Description: {product.description}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                <ListGroup variant="flush">
                <ListGroup.Item>
                    <Row>
                        <Col>Price:</Col>
                        <Col>
                        <strong>&#8377; {product.price}</strong></Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col>Status:</Col>
                        <Col>
                        <strong>{product.countInStock > 0 ? "InStock" : "Out of Stock"}</strong></Col>
                    </Row>
                </ListGroup.Item>
                      
                {product.countInStock > 0 && (
                    <ListGroup.Item>
                        <Row>
                            <Col>Qty</Col>
                            <Col>
                            <Form.Control as='select' value={qty}
                            onChange={(e)=>setQty(Number(e.target.value))}>

                                    {[...Array(product.countInStock).keys()].map((x)=>(
                                        <option key={x+1} value={x+1}>{x+1}</option>
                                    ))}

                            </Form.Control>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                )}
                <ListGroup.Item>
                    <Button
                    className="btn-block"
                    type="button"
                    disabled={product.countInStock === 0}>
                        Add To Cart
                    </Button>
                </ListGroup.Item>
                </ListGroup>
                </Card>
            </Col>
        </Row>)}
        
    </>
  )
}

export default ProductScreen