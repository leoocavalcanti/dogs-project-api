import React from 'react'
import {Navigate} from "react-router-dom"
import { UserContext } from '../../UserContext'
import LoginForm from './LoginForm'
import styles from "./Login.module.css"


const Login = () => {

  const {login} = React.useContext(UserContext);
  if (login) return <Navigate to="/conta"/>
  return (
    <section className={styles.login}>
        <div className={styles.forms}>
          <LoginForm/>
        </div>
    </section>
  )
}

export default Login