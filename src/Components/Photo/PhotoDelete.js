import React from 'react'
import { PHOTO_DELETE } from '../../api';
import useFetch from '../../Hooks/useFetch';
import styles from "./PhotoDelete.module.css"
import {useNavigate} from "react-router-dom";

const PhotoDelete = ({id}) => {

    const {loading, request} = useFetch();
    const navigate = useNavigate();

    const handleClick = async () => {

        const confirm = window.confirm("Tem certeza que deseja deletar?");
        if(confirm){

            const {url, options} = PHOTO_DELETE(id);
            const {response} = await request(url, options);
            if(response.ok) window.location.reload();
        }

    }

  return (
    <>
        {loading ? <button disabled className={styles.delete}>Deletando...</button> : <button onClick={handleClick} className={styles.delete}>Deletar</button>}
    </>
  )
}

export default PhotoDelete