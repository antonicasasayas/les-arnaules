import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Product from "./Product/Product";
import data from "../data.json";

const ProductList = () => {
  return (
    <Container>
      <h2>Els nostres productes</h2>

      <Row xs={1} md={4} className="g-4">
        {data.map((product) => (
          <Product {...product} key={product.id} />
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
