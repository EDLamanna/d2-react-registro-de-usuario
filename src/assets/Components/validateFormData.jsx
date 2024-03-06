const validateFormData = ({ name, email, password, rePassword }, setMessage) => {
  if (name === "" || email === "" || password === "" || rePassword === "") {
    setMessage("Completa todos los campos!");
    return false;
  }

  if (password !== rePassword) {
    setMessage("Las contraseñas deben ser iguales");
    return false;
  }

  if (password.length < 8 || !/[!@+\-*]/.test(password)) {
    setMessage(
      "La contraseña debe tener al menos 8 caracteres y contener caracteres especiales como @, +, -, *"
    );
    return false;
  }

  setMessage("Registro exitoso");
  return true;
};

export default validateFormData;
