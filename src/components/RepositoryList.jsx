import { useState, useEffect } from "react"; //Aqui eu estou chamando useState e useEffect de dentro do react.
import { RepositoryItem } from "./RepositpryItem";//Aqui eu estou importando RepositoryItem de RepositoryItem.

import '../styles/repositores.scss';//Aqui é a importacao do styles css

// Essa é a função
export function RepositoryList(){

  //O useState nao muda a variavel primaria, só acressenta.
  const [repositories, setRepositories] = useState([]);

  //Aqui eu seto oque eu quero pegar dentro de useEffect.
  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')//Aqui eu busco os itens
    .then(Response=>Response.json()) //Aqui eu converto para Json.
    .then(data=> setRepositories(data))
  }, []);


  return( //Aqui eu uso o return para retornar algo
    //O className é usado aqui pois nao usamos class normal, chamo ela no css para modificar.
    <section className="repository-list"> 
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repository =>{
          return <RepositoryItem key={repository.name} repository={repository}/>
        })} 
      </ul>
    </section>
  );
}