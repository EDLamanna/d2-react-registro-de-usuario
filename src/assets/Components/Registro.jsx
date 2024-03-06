import Formulario from "./Formulario"   
import Card from 'react-bootstrap/Card';
import SocialButton from "./SocialButton";


const Registro = () =>{

    return(
        <Card style={{ width: '25rem', height: "35em", borderRadius:"6%"}}>
            <h1 className='title'>Crea una Cuenta</h1>
            <div className="iconsRS">
                <SocialButton url="www.facebook.com" rrss="fa-brands fa-facebook"/>
                <SocialButton url="www.github.com" rrss="fa-brands fa-github"/>
                <SocialButton url="www.linkedin.com" rrss="fa-brands fa-linkedin-in"/>
            </div>
            <p className='text'>
            O usa tu email para registrarte
            </p>
            <Formulario />

        </Card>
    )
}

export default Registro