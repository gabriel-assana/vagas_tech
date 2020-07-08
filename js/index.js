const btnSearch = document.querySelector(".btn-search");

btnSearch.addEventListener("click", getRepos);


async function getRepos(event) {

    event.preventDefault();

    const urlFront = "https://api.github.com/repos/frontendbr/vagas/issues"
    const urlBack = "https://api.github.com/repos/backend-br/vagas/issues"
    let url = ""

    let select = document.getElementById("search");
    let text = select.options[select.selectedIndex].text
    let sessaoVaga = document.querySelector('#sessao-vagas');
    sessaoVaga.innerHTML = "";

    if (text === "Front-end") {
        url = urlFront;
    } else if (text === "Back-end") {
        url = urlBack;
    }

    let response = await fetch(url);
    let result = await response.json();

    result.forEach(element => {

        const vaga = `
      <ul class= "vagas">
        <li class= "titulo-vagas">Vaga: ${element.title}</li>    
        <li class= "desc-vagas">Descricao: ${element.body}</li>
        <br>     
      </ul> 
  `;

        sessaoVaga.innerHTML += vaga;

    });
};