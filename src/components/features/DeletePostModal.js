import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';

const AppModal = ({ show, onClose, onConfirm, postTitle}) => {
    return (
        <Modal show={show} onHide={onClose} centered>
        <Modal.Header closeButton>
            <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            This operation will completely remove{" "}
            <strong>{postTitle}</strong>.
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
            Cancel
            </Button>
            <Button variant="danger" onClick={onConfirm}>
            Remove
            </Button>
        </Modal.Footer>
        </Modal>
  );
};

export default AppModal;        
