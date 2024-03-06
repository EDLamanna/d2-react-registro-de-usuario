import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function BasicExample() {
  return (
    <Form>
      <Form.Group className="mb-2 px-5" controlId="formBasicNombre">
        <Form.Control type="name" placeholder="Nombre" />
      </Form.Group>
      <Form.Group className="mb-2 px-5" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="tuemail@ejemplo.cl" />
      </Form.Group>
      <Form.Group className="mb-2 px-5" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Contraseña" />
      </Form.Group>
      <Form.Group className="mb-2 px-5" controlId="formBasicPasswordReEnter">
        <Form.Control type="passwordReEnter" placeholder="Repite tu contraseña" />
      </Form.Group>
        <Button className="btn my-3 mx-5" variant="success" type="submit" >Registrarse</Button>
    </Form>
  );
}

export default BasicExample;
