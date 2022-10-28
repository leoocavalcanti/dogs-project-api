import React from 'react'
import { COMMENT_POST } from '../../api';
import {ReactComponent as Enviar} from "../../Assets/enviar.svg"
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import styles from "./PhotoCommentsForm.module.css"

const PhotoCommentsForm = ({id, setComments}) => {

    const {request, error, loading} = useFetch();
    const [comment, setComment] = React.useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();
        const {url, options} = COMMENT_POST(id, {comment});
        const {response, json} = await request(url, options)
        if (response.ok) {

            setComment("");
            setComments((comments) => [...comments, json]);
        }
    }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
        <textarea 
        className={styles.textarea}
        value={comment} 
        onChange={({target}) => setComment(target.value)}
        id="comment"
        name="comment"
        placeholder="Comente aqui..."/>
        {loading ? <button disabled className={styles.button}><Enviar/></button> : <button className={styles.button}><Enviar/></button>}
        <Error error={error}/>
    </form>
  )
}

export default PhotoCommentsForm