import { useState } from 'react';
import { Modal as BootstrapModal, Button, Form } from 'react-bootstrap';

export default function Modal({ isOpen, onClose }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <BootstrapModal show={isOpen} onHide={onClose} centered>
      <BootstrapModal.Header closeButton className="modal-header-custom">
        <BootstrapModal.Title className="text-center w-100 modal-title-custom">
          Попередження
        </BootstrapModal.Title>
      </BootstrapModal.Header>

      <BootstrapModal.Body>
        <p className="modal-text">
          <strong>Увага!</strong> У зв'язку з військовим станом в Україні, деякі напрями діяльності можуть мати обмеження.
          Інформація про співпрацю з державними установами може бути конфіденційною.
          Будь ласка, підтвердіть, що ви розумієте та приймаєте ці умови.
        </p>

        <Form.Check
          type="checkbox"
          id="consent-checkbox"
          label="Я розумію та приймаю умови"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
          className="text-center mt-3"
        />
      </BootstrapModal.Body>

      <BootstrapModal.Footer className="justify-content-center">
        <Button variant="primary" onClick={onClose} className="modal-btn">
          Закрити
        </Button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
}
