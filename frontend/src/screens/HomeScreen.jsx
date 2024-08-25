
import {Row,Col} from 'react-bootstrap';
import Product from '../component/Product.jsx';
import { useGetProductsQuery } from '../slices/productApiSlice.js';
import Loader from '../component/Loader.jsx';
import Message from '../component/Message.jsx';


const HomeScreen = () => {
  const {data:products,isLoading, error} =useGetProductsQuery();

  return (
  <>
  {isLoading ? (<Loader />) : error ? (<Message variant={'danger'}>{error?.data?.message || error.error}</Message>) : (
    <>
  <h1>Latest Product</h1>
  <Row>
      {products.map((pro)=>(
          <Col key={pro._id} sm={6} md={3} lg={4} xl={3}>
              <Product product={pro}/>
          </Col>
      ))}
  </Row>
  </>)}
  
    </>
  )
}

export default HomeScreen