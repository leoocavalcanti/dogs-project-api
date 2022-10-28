import React from 'react'
import FeedPhotosItem from './FeedPhotosItem'
import useFetch from "../../Hooks/useFetch"
import { PHOTOS_GET } from '../../api';
import Loading from '../Helper/Loading';
import Error from "../Helper/Error"
import styles from "./FeedPhoto.module.css"
import {Link} from "react-router-dom";

const FeedPhoto = ({user, setModalPhoto}) => {

    const {data, loading, error, request} = useFetch();

    React.useEffect(() => {

        const fetchPhotos = async () => {

            const {url, options} = PHOTOS_GET({page: 1, total: 6, user})
            const {response, json} = await request(url, options);
            console.log(json)

        } 
        fetchPhotos();

    }, [request, user]);

    if (error) return <Error error={error}/>
    if (loading) return <Loading/>
    if (data)

  return (
    <ul className={`${styles.feed} animeLeft`}>
        {data.length === 0 && 
        <p className={styles.post}>
            Você ainda não fez nenhuma publicação!
            <Link to="/conta/postar">Postar foto</Link>
        </p>}
        {data.map((photo) =>(

            <FeedPhotosItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto}/>
        ))}
        
    </ul>
  )
  
  else return null
}

export default FeedPhoto