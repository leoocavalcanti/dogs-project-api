import React from 'react'
import {Link} from "react-router-dom"
import { USER_GET, TOKEN_POST } from '../../api';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import Error from '../Helper/Error';
import styles from "./LoginForm.module.css"
import stylesBtn from "../Forms/Button.module.css"

const LoginForm = () => {

    const username = useForm("usuario");
    const password = useForm("password");   

    const {userLogin, error, loading} = React.useContext(UserContext)
    
    const handleSubmit = async (e) => {

        e.preventDefault();

        if(username.validate() && password.validate()){

            userLogin(username.value, password.value)
        }

    }

  return (

    <section className="animeLeft">

        <h1 className="title">Login</h1>
        
        <form className={styles.form} onSubmit={handleSubmit}>
            <Input label="Usuário" type="text" {...username}/>
            <Input label="Senha" type="password" {...password}/>
            {loading ? <Button disabled>Carregando...</Button> : <Button>Entrar</Button>}
            <Error error={error}/>
        </form>

        <div className={styles.cadastro}>
            <h2 className={styles.subtitle}>Cadastre-se</h2>
            <p>Ainda não possui conta? Cadastre-se no site</p>
            <Link className={stylesBtn.button} to="/login/criar">Cadastre-se</Link>
        </div>
        

    </section>
  )
}

export default LoginForm