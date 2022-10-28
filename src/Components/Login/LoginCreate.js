import React from 'react'
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { USER_POST } from '../../api';
import { UserContext } from '../../UserContext';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';

const LoginCreate = () => {

  const username = useForm("username");
  const email = useForm("email");
  const password = useForm("password");

  const {userLogin} = React.useContext(UserContext);
  const {loading, error, request} = useFetch();

  const handleSubmit = async (e) => {

    e.preventDefault();
    if(username.validate() && email.validate() && password.validate()){

      const {url, options} = USER_POST({

        username: username.value,
        email: email.value,
        password: password.value
      })

      const {response} = await request(url, options);
      if (response.ok) userLogin(username.value, password.value)
    }

  }
  return (
    <section className={"animeLeft container"}>
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
      <Input type="text" label="Usuário" {...username}/>
      <Input type="text" label="E-mail" {...email}/>
      <Input type="password" label="Senha" {...password}/>
      {loading ? <Button disabled>Cadastrando...</Button> : <Button>Cadastrar</Button>}
      <Error error={error}/>
      </form>
    </section>
  )
}

export default LoginCreate