import React from 'react'
import UserHeader from './UserHeader'
import Feed from '../Feed/Feed'
import { UserContext } from '../../UserContext'

const User = () => {

  const {data} = React.useContext(UserContext);

  return (
    <section className="container">
        <UserHeader title="Meu perfil"/>
        <Feed user={data.id}/>
    </section>
  )
}

export default User