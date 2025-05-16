"use client";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import PrivacyPolicyText from "./PrivacyPolicyText"; 

export default function PrivacyModal({ linkLabel = "Privacy Policy" }) {
  const [show, setShow] = useState(false);

  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };
  const handleClose = () => setShow(false);

  return (
    <>
      <a href="#" onClick={handleShow}>{linkLabel}</a>

      <Modal show={show} onHide={handleClose} size="lg" centered scrollable>
        <Modal.Header closeButton>
          <Modal.Title>
            Privacy Policy / Политика конфиденциальности / Գաղտնիության քաղաքականություն
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#fff", color: "#000", maxHeight: "70vh", overflowY: "auto" }}>
          <PrivacyPolicyText />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close / Закрыть / Փակել
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
