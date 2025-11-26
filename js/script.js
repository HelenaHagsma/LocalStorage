document.getElementById("formcadastro").addEventListener("submit", function(event){
    /*Submete dados sem que outra página seja carregada */
    event.preventDefault(); 
    /*Declara as variáveis e pega os valores das caixas de texto*/
    var nome = document.getElementById("nome").value
    var idade = document.getElementById("idade").value
    /*Declara o obejto com os atributos nome e idade e atribui os dados que estão nas variáveis acima */
    var aluno = {nome:nome, idade: idade}
    /*Criar lista de alunos, carregar os alunos preexistentes ou carregar uma lista vazia */
    var listaAlunos = JSON.parse(localStorage.getItem('listagem')) || []
    /*Inserir o aluno na lista */
    listaAlunos.push(aluno)
    /*Adicionar o aluno no arquivo do local storage */
    localStorage.setItem('listagem', JSON.stringify (listaAlunos))
    /*limpa o formulário */
    document.getElementById("formcadastro").reset()
    exibirAlunos()
})
function exibirAlunos()
{
    var listaAlunos = JSON.parse(localStorage.getItem('listagem'))|| []
    var output = document.getElementById("output")
    output.innerHTML = ""
    for(let i=0; i<listaAlunos.length; i++)
    {
        let li = document.createElement("li")
        li.textContent = "Nome: " + listaAlunos[i].nome + " | Idade: " + listaAlunos[i].idade
        output.appendChild(li)
    }
}