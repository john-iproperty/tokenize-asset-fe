import { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const LoginModal = ({ isOpened, title, onSubmit, onClose }) => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleClose = () => onClose();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(state);
  };

  return (
    <Modal show={isOpened} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="register-form" onSubmit={handleSubmit}>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" value={state.email} placeholder="Email address" name="email" onChange={handleInputChange} />
          </Form.Group>
          <Form.Group controlId="Password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={state.password} placeholder="Enter Password" name="Password" onChange={handleInputChange} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSubmit}>
          Log In
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;
