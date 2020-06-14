import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function PopOut(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const nameStyle = {
      display: 'inline-block', 
      color: '#5496ff',
      fontWeight: 'bold'
    }
    const jobStyle = {
      fontWeight: 'bold'
    }
    const imageStyle = {
      float: 'left',
      width: '300px',
      height: '300px',
      paddingRight: '20px',
      objectFit: 'cover'
    }

    return (
      <>
        <Button style={{display: 'block',margin:'auto'}}variant="primary" onClick={handleShow}>
          More Info
        </Button>
  
        <Modal size='xl' show={show} onHide={handleClose} centered >
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <h3 style={nameStyle}>Speaker Name</h3>
            <img style={imageStyle} src={props.image} alt='popImage'/>
            <p style={jobStyle}>Job Title, Department Name, Company Name</p>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          </Modal.Body>
        </Modal>
      </>
    );
  }
  
  export default PopOut;