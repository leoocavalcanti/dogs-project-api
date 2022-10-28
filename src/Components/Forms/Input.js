import React from 'react'
import styles from "./Input.module.css"

const Input = ({type, label, value, onChange, error, onBlur}) => {

  return (

    <div className={styles.wrapper}>
        <label className={styles.label}>
        {label}
        <input type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={styles.input}/>
        {error && <p className={styles.error}>{error}</p>}
        </label>
    </div>
  )
}

export default Input