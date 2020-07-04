const btnSearch = document.querySelector(".btn-search");

btnSearch.addEventListener("click", getRepos);


async function getRepos(event){
  
  event.preventDefault();
  
 const urlFront = ("https://api.github.com/repos/frontendbr/vagas/issues")
 
 let response = await fetch(urlFront);
 let result = await response.json();
 let vagas = result.results;

     resultado = result.title 

     console.log(result);
     console.log(resultado);

}