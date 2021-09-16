import "./style.css"
import {Link} from "react-router-dom"
function Results({dados}){
    return (
        // eslint-disable-next-line no-undef
        <div className="card">
            {console.log(dados)}
            <h2>Name: {dados.fullname}</h2>
            <h3>Username: {dados.username}</h3>
            <h3>Email: {dados.email}</h3>
            <h3>Idade: {dados.age}</h3>
            <h3>Senha: {dados.password}</h3>
            <button className="button"><Link to="/">Ir para formulário</Link></button>
        </div>
    )
}

export default Results