import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Button onClick={openPopup}>Open Popup</Button>

      <Modal show={isOpen} onHide={closePopup}>
        <Modal.Header closeButton>
          <Modal.Title>Popup Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This is the content of the popup.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closePopup}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Popup;
