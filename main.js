$(document).ready(function(){                            // quando o documento pronto, chama a função
    $('form').on('submit', function (e){                  // esta chamando o form e pegando o evento submit
        e.preventDefault();                              // impede que o form recarregue
        const nomeTarefa = $('input').val();             // const esta recebendo valor do campo input
        constNovaTarefa = $(`<li>${nomeTarefa}</li>`)    // crase concatena texto e valor da variavel(pegando valor de NomeTarefa para a const NovaTarefa)

        $(constNovaTarefa).appendTo('ul')                // passando o valor da NovaTarefa para a lista
        $('input').val('')                               // string vazia para limpar o valor da input
    })

    $('ul').on('click', 'li', function(e){               // funçao chama "ul" e adiciona o evento click
        e.preventDefault();
        $(this).toggleClass('riscarTarefa')             //this informa o elemento que foi clicado, toggleclass implementa o riscarTarefa

    })

})