import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import styles from "./Modal.module.css"
export default function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className={styles.titleContainer} closeButton>
              <Modal.Title
                  style={{fontSize: '20px'}}
          className={styles.title}
          id="contained-modal-title-vcenter"
        >
          Tria la teva ubicació
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className={styles.address}>
          {" "}
          Plaça Catalunya 9, 3r 2a, Manresa, Barcelona, 08240
          <p>Predeterminada</p>
        </p>
        <p className={styles.modifyLink}>
          Modificar direcció de lliurament
                  <div className={styles.addressChange}>
            <span>o escriu un correu postal a Espanya</span>
          </div>
        </p>

        <InputGroup className="mb-3">
          <FormControl
            name="postcode"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />

                  <Button onClick={props.onHide}variant="outline-secondary" id="button-addon2">
            Confirmar
          </Button>
        </InputGroup>
      </Modal.Body>
    </Modal>
  );
}




