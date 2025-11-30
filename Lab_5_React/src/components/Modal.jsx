import { useState } from 'react';
import { Modal as BootstrapModal, Button, Form } from 'react-bootstrap';

export default function Modal({ isOpen, onClose }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <BootstrapModal show={isOpen} onHide={onClose} centered>
      <BootstrapModal.Header closeButton style={{ borderBottom: '3px solid #d2691e' }}>
        <BootstrapModal.Title className="text-center w-100" style={{ color: '#d2691e' }}>
          Попередження
        </BootstrapModal.Title>
      </BootstrapModal.Header>

      <BootstrapModal.Body>
        <p style={{ lineHeight: 1.6, fontSize: '1.05rem', textAlign: 'justify' }}>
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
        <Button
          variant="primary"
          onClick={onClose}
          style={{ backgroundColor: '#003366' }}
        >
          Закрити
        </Button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
}
