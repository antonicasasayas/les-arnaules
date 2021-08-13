import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar"
import InputGroup from "react-bootstrap/InputGroup";
import {FiSearch} from "react-icons/fi"
import FormControl from "react-bootstrap/FormControl"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { IoLocationOutline } from "react-icons/io5"

import styles from './Navbar.module.css'


const MyNavbar = ({setModalShow}) => {
    return (
      <Navbar
        className="shadow fixed-top "
        style={{
          backgroundColor: "#232F3E",
          fontFamily: "Roboto-Light",
          color: "white",
        }}
      >
        <Container className="mb-2 mt-2">
          <h4 className="mb-0" style={{ fontFamily: "Roboto-Bold" }}>
            Les Arnaules
          </h4>
          <div>
            <span className={styles.deliveryInfo}>
              Enviar a <IoLocationOutline className="ms-2" />
              <span
                onClick={() => setModalShow(true)}
                style={{ fontFamily: "Roboto-Bold" }}
              >
                Pl. Catalunya 9 3r 2a
              </span>
            </span>
          </div>
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
          <div className="d-flex align-items-center ">
            <span className="me-5">Hola, Antoni</span>
            <div className="d-flex flex-column align-items-center ">
              <AiOutlineShoppingCart size="24" />
              Cistella
            </div>
          </div>
        </Container>
      </Navbar>
    );
}

export default MyNavbar
