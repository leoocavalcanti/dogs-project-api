import React from 'react'
import {useParams} from "react-router-dom";
import Feed from '../Feed/Feed';

const UserProfile = () => {

    const {user} = useParams();

  return (

    <section className="container mainSection">
        <h1 style={{marginBottom: "2rem"}}className="title">Perfil de: {user}</h1>
        <Feed user={user}/>
    </section>
  )
}

export default UserProfile