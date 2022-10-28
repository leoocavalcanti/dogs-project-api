import React from 'react'
import { PHOTO_POST } from '../../api'
import useFetch from '../../Hooks/useFetch'
import useForm from '../../Hooks/useForm'
import Button from '../Forms/Button'
import Input from '../Forms/Input'
import Error from '../Helper/Error'
import UserHeader from './UserHeader'
import styles from "./UserPhotoPost.module.css"
import {useNavigate} from "react-router-dom"


const UserPhotoPost = () => {

    const nome = useForm("name");
    const peso = useForm("weight");
    const idade = useForm("age");

    const [img, setImg] = React.useState({});

    const {data, error, loading, request} = useFetch();
    const navigate = useNavigate();

    React.useEffect(() =>{

        if(data) navigate("/conta")

    }, [data, navigate])


    const handleSubmit = async (e) => {

        e.preventDefault();
        const formData = new FormData();
        formData.append("img", img.raw);
        formData.append("nome", nome.value);
        formData.append("peso", peso.value);
        formData.append("idade", idade.value);

        const token = window.localStorage.getItem("token");
        const {url, options} = PHOTO_POST(formData, token);
        await request(url, options)

        nome.setValue("");
        peso.setValue("");
        idade.setValue("");

    }

    const handleImgChange = ({target}) => {

        setImg({

            preview: URL.createObjectURL(target.files[0]),
            raw: target.files[0]

        })
    }



  return (

    <section className="container">
      <section className={`${styles.photoPost} animeLeft`}>
      
      <form onSubmit={handleSubmit}>

        <UserHeader title="Postar foto"/>
        <Input label="Nome" type="text" {...nome}/>
        <Input label="Peso" type="number" {...peso}/>
        <Input label="Idade" type="number" {...idade} />
        <input className={styles.file} type="file" name="img" id="img" onChange={handleImgChange}/>
        {loading ? <Button disabled>Enviando...</Button> : <Button>Enviar</Button>}
        <Error error={error}/>
      </form>

      <div>
        {img.preview && <div className={styles.preview}
        style={{backgroundImage: `url("${img.preview}")`}}></div>}
      </div>

      </section>
    </section>

  )
}

export default UserPhotoPost