import React from 'react'
import styles from "./PhotoContent.module.css"
import {Link} from "react-router-dom"
import PhotoComments from './PhotoComments';
import { UserContext } from '../../UserContext';
import PhotoDelete from './PhotoDelete';
import Image from '../Helper/Image';

const PhotoContent = ({data}) => {

    const {data: user} = React.useContext(UserContext)
    const {photo, comments} = data;

    const commentsSection = React.useRef()

    React.useEffect(() => {

        commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
        
    }, [comments])

  return (
    <div ref={commentsSection} className={styles.photo}>
        <div className={styles.img}>
        <Link to={`/foto/${photo.id}`}><Image src={photo.src} alt={photo.title}/></Link>
            <div className={styles.details}>
                <div>
                    <p className={styles.author}>
                        {user && user.username === photo.author ? 
                        <PhotoDelete id={photo.id}/> : <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>}
            
                        <span className={styles.views}>{photo.acessos}</span>
                    </p>
                        <h1 className="title">
                            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
                        </h1>
                        <ul className={styles.attributes}>
                            <li>{photo.peso} kg</li>
                            <li>{photo.idade > 1 ? `${photo.idade} anos` : `${photo.idade} ano`}</li>
                        </ul>
                </div>
            </div>
        </div>
        <PhotoComments id={photo.id} comments={comments}/>
    </div>
  )
}

export default PhotoContent