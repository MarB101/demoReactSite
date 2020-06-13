import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function Example() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <img src={process.env.PUBLIC_URL + '/images/logo.jpg'} alt='popImage'/>Woohoo, you're reading this text in a modal!</Modal.Body>
        </Modal>
      </>
    );
  }
  
  export default Example;