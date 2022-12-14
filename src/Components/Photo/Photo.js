import React from 'react'
import {useParams} from "react-router-dom";
import { PHOTO_GET } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import PhotoContent from './PhotoContent';
import styles from "./Photo.module.css"

const Photo = () => {

    const {id} = useParams();
    const {data, loading, error, request} = useFetch();
    React.useEffect(() => {

        const handlePhotoGet = async () => {

            const {url, options} = PHOTO_GET(id);
            await request(url, options);
        }

        handlePhotoGet();

    }, [request, id]);

    if(error) return <Error error={error}/>
    if(loading) return <Loading/>
    if(data)

  return (
    <section className={`animeLeft container ${styles.section}`}>
        <PhotoContent data={data}/>
    </section>
  )
  return null;
}

export default Photo