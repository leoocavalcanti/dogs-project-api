import React from 'react'

const types = {

    email: {

        regex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        message: "O e-mail digitado é inválido!"
    }
}

const useForm = (type) => {

    const [value, setValue] = React.useState("");
    const [error, setError] = React.useState(null);

    const validate = () => {

        if(!type) return true;
        if(value.length === 0){

            setError("Preencha um valor!");
            return false;
        }

        else if(types[type] && !types[type].regex.test(value)){

            setError(types[type].message);
            return false;
        }

        else{

            setError(null);
            return true;
        }
    }

    const onChange = (e) => {

        setValue(e.target.value);
        setError(null);
    }

    const onBlur = () =>{

        if(!validate(value)){

            return validate(value);
        }
    }

  return {
    value,
    error,
    setValue,
    onChange,
    validate: () => validate(value),
    onBlur
    }
}

export default useForm