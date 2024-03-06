import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Formulario = ({ setMessage }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const validateData = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || password === "" || rePassword === "") {
        setMessage('Completa todos los campos!');
        return;
    }

    if (password !== rePassword) {
        setMessage('Las contraseñas deben ser iguales');
        return;
    }

    if (password.length < 8 || !/[!@+\-*]/.test(password)) {
        setMessage('La contraseña debe tener al menos 8 caracteres y contener caracteres especiales como @, +, -, *');
        return;
    }

    setMessage('Registro exitoso');
};



  return (
    <Form onSubmit={validateData}>
      <Form.Group className="mb-2 px-5" controlId="formBasicname">
        <Form.Control
          type="name"
          placeholder="name"
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
