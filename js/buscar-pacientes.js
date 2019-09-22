var botaoAdicionar = document.querySelector('#adicionar-pacientes');

botaoAdicionar.addEventListener('click', function(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');

    xhr.addEventListener('load', function(){
        var resposta = xhr.responseText;
        console.log(resposta);
        console.log(typeof resposta);
        var pacientes = JSON.parse(resposta);
        console.log(pacientes);
        console.log(typeof pacientes);
    });

    xhr.send();
});