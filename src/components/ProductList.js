
import Row from "react-bootstrap/Row"
import styles from "./Navbar/Navbar.module.css"
import Container from "react-bootstrap/Container";
import Product from "./Product/Product";
import InputGroup from "react-bootstrap/InputGroup";
import { FiSearch } from "react-icons/fi";
import FormControl from "react-bootstrap/FormControl";

const ProductList = () => {
    return (
      <Container>
        <h2>Els nostres productes</h2>
        <InputGroup style={{ position: "relative" }} className=" w-25">
          <FormControl
            id="searchBar"
            style={{
              borderRadius: "5px",
              border: "none",
            }}
            placeholder="Buscar"
            aria-label="Producte"
            aria-describedby="basic-addon2"
          />
          <FiSearch className={styles.searchIcon} size={24} />
        </InputGroup>
        <Row xs={1} md={4} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Product />
          ))}
        </Row>
      </Container>
    );
}

export default ProductList
