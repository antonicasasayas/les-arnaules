import  Container  from "react-bootstrap/Container";
import  Carousel  from "react-bootstrap/Carousel"
import { Col, Row } from "react-bootstrap";

const Header = () => {
    return (
      <Container>
        <Row style={{ height: "100vh" }}>
          <Col md={6} className="d-flex flex-column justify-content-center">
            <h5 style={{ color: "#6EC68C" }}>
              Cistelles personalitzables lliurades a domicili
            </h5>
            <h1>Compra verdura de proximitat des de casa</h1>
            <p>Verdura de qualitat cultivada i collida diàriament </p>
          </Col>
          <Col className="d-flex align-items-center" md={6}>
            <Carousel controls={false} indicators={false}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://previews.123rf.com/images/jinga/jinga1306/jinga130600040/20337318-fresh-vegetables-in-basket-isolated-on-white.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://previews.123rf.com/images/jinga/jinga1306/jinga130600040/20337318-fresh-vegetables-in-basket-isolated-on-white.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://previews.123rf.com/images/jinga/jinga1306/jinga130600040/20337318-fresh-vegetables-in-basket-isolated-on-white.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    );
}

export default Header
