const btnSearch = document.querySelector(".btn-search");

btnSearch.addEventListener("click", getRepos);


async function getRepos(event){
  
  event.preventDefault();
  
 const urlFront = ("https://api.github.com/repos/frontendbr/vagas/issues")
 
 let response = await fetch(urlFront);
 let result = await response.json();
 
 result.forEach(element =>{
      const card = `
      <ul class= vagas>
        <li>Vaga: ${element.title}</li>    
        <li>Descricao: ${element.body}</li>
        <br>     
      </ul>
  `;
  
    document.querySelector('#sessao-vagas').innerHTML += card; 

     console.log(result);
  });
};