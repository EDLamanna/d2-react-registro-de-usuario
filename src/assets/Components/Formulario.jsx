import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import validateFormData from "./validateFormData";

const Formulario = ({ setMessage }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const validateSubmit = (e) => {
    e.preventDefault();
    const isValid = validateFormData(
      { name, email, password, rePassword },
      setMessage
    );
    if (isValid) {
    }
  };

  return (
    <Form onSubmit={validateSubmit}>
      <Form.Group className="mb-2 px-5" controlId="formBasicname">
        <Form.Control
          type="name"
          placeholder="Nombre"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </Form.Group>

      <Form.Group className="mb-2 px-5" controlId="formBasicEmail">
        <Form.Control
          type="email"
          placeholder="tuemail@ejemplo.cl"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </Form.Group>

      <Form.Group className="mb-2 px-5" controlId="formBasicPassword">
        <Form.Control
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </Form.Group>

      <Form.Group className="mb-2 px-5" controlId="formBasicPasswordReEnter">
        <Form.Control
          type="passwordReEnter"
          placeholder="Repite tu contraseña"
          onChange={(e) => setRePassword(e.target.value)}
          value={rePassword}
        />
      </Form.Group>

      <Button className="btn my-3 mx-5" variant="success" type="submit">
        Registrarse
      </Button>
    </Form>
  );
};

export default Formulario;
