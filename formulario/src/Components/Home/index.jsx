import "./style.css"
import {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"

import {useHistory} from "react-router-dom"

function Home({setDados}){

    const history= useHistory()

    const fromSchema = yup.object().shape({
        username:yup.string().required("Item obrigatório").max(18),
        fullname:yup.string().required("Item obrigatório").max(18),
        email:yup.string().required("Item obrigatorio")
        .email("E-mail incorreto"),
        confemail:yup.string().required("Item obrigatorio").oneOf([yup.ref("email")],"E-mail incorreto"),
        age:yup.number().required("Item obrigatorio"),
        // eslint-disable-next-line no-useless-escape
        password:yup.string().required("Item obrigatório")
        .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%*()_+^&}{:;?.])(?:([0-9a-zA-Z])(?!\1)|[!@#$%;*(){}_+^&]){6,}$/,
        "A senha deve ter pelo menos uma letra maiúscula, uma minuscula, um numero e o carácter especial"),
        confpassword:yup.string().required("Item obrigatório").oneOf([yup.ref("password")],"senha incorreta")
    })

    const {register,handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(fromSchema)
    })

    const onSub = (data) => {
        console.log("data ",data)
        setDados(data)
        history.push("/results")
      } 

    return (
      <>
        <h2>Cadastro do cliente</h2>
        <form className="formulario" onSubmit={handleSubmit(onSub)}>
            <input placeholder="Nome de usuário" {...register("username")}/>
            {errors.username?.message}
            <input placeholder="Nome completo" {...register("fullname")}/>
            {errors.fullname?.message}
            <input placeholder="Email" {...register("email")}/>
            {errors.email?.message}
            <input placeholder="Confirmação de email" {...register("confemail")}/>
            {errors.confemail?.message}
            <input placeholder="idade" {...register("age")}/>
            {errors.age?.message}
            <input type="password" placeholder="Senha" {...register("password")}/>
            {errors.password?.message}
            <input type="password" placeholder="Confirmação de senha" {...register("confpassword")}/>
            {errors.confpassword?.message}
            <button type="submit" >Enviar</button>
        </form>
      </>
    )
}

export default Home