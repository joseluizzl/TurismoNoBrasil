function pesquisar() {
    // Essa função é responsável por realizar uma pesquisa e exibir os resultados na página.
  
    // Obtém a seção onde os resultados da pesquisa serão inseridos.
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    console.log(campoPesquisa)
  
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar algo!</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
    let titulo = "";
    let descricao = "";
  
    // Itera sobre cada destino na lista de destinos.
    for (let destino of destinos) {
        titulo = destino.titulo.toLowerCase()
        descricao = destino.descricao.toLowerCase()
        if (titulo.includes(campoPesquisa) || 
        descricao.includes(campoPesquisa)) {
            // Cria um novo elemento
            resultados += `
            <div class="item-resultado">
              <h2><a href="#" target="_blank">${destino.titulo}</a></h2>
              <p class="descricao-meta">${destino.descricao}</p>
              <a href="${destino.link}" target="_blank">Mais informações</a>
            </div>
          `;
        }
        console.log(destino.titulo.includes(campoPesquisa))
     
    }
  
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }
    // Insere o HTML gerado na seção de resultados.
    section.innerHTML = resultados;

    // Limpa o campo de pesquisa após exibir os resultados
  document.getElementById("campo-pesquisa").value = "";
  }


