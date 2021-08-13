import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import styles from './Product.module.css'

import { AiOutlineMinus, AiOutlinePlus, AiOutlineShoppingCart } from "react-icons/ai";
const Product = () => {
  return (
    <Col>
      <Card
        style={{
          borderRadius: "15px",
          fontFamily: "Roboto-Bold",
          border: "2px solid rgb(233,233,233)",
        }}
      >
        <Card.Img
          className="p-5 pt-0 pb-0"
          variant="top"
          src="/images/eggplant.jpg"
        />
        <Card.Body>
          <Card.Title>Albergínia</Card.Title>
          <Card.Text className={styles.cardPrice}>
            2,50
            <span className={styles.cardSymbol}>
              € <span className={styles.cardKG}>/ KG</span>{" "}
            </span>
          </Card.Text>
          <div className="d-flex align-items-center justify-content-between">
            <Card.Text className={styles.cardText}>
              <span className={styles.minus}>
                <AiOutlineMinus />
              </span>
              <span className={styles.buttonKG}>1 KG</span>
              <span className={styles.plus}>
                <AiOutlinePlus />
              </span>
            </Card.Text>
            <button
              type="button"
              style={{ backgroundColor: "#77CB93", color: 'white' }}
              className="btn  px-3 py-2 rounded-pill mb-3 "
            >
              <AiOutlineShoppingCart size={24} />
            </button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
