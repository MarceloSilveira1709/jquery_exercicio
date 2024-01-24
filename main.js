const form = document.getElementById('form-tarefa');
let linhas = '';


form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeTarefa = document.getElementById('nome-tarefa');
    
    linha = `<li>${inputNomeTarefa.value}</li>`;
    linhas += linha;
    
    const corpoTabela = document.querySelector('li');
    corpoTabela.innerHTML = linhas;
    inputNomeTarefa.value = '';


    corpoTabela.addEventListener('click', function (e) {
    e.target.classList.add('checked');
    }) 
})

    

