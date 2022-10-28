import React from 'react'
import styles from "./UserHeader.module.css"
import UserHeaderNav from './UserHeaderNav'

const UserHeader = ({title}) => {
  return (
    <header className={styles.header}>
        
        <h1 className="title">{title}</h1>
        
        <UserHeaderNav/>
        
    </header>
  )
}

export default UserHeader