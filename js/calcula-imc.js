var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

var pacientes  = document.querySelectorAll('.paciente');

for(var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector('.info-peso');
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector('.info-imc');

    var imc = 0;

    alturaEhValida = validaAltura(altura);
    pesoEhValido = validaPeso(peso);

    if(pesoEhValido === false) {
        // pesoEhValido = false;
        imc = 'Peso inválido!';
        paciente.classList.add('paciente-invalido');
    }

    if(alturaEhValida === false) {
        // alturaEhValida = false;
        imc = 'Altura inválida!';
        paciente.classList.add('paciente-invalido');
    }

    if (alturaEhValida && pesoEhValido) {
        imc = calculaImc(peso, altura);
        imc = imc;
    }
    tdImc.textContent = imc;
}

function validaPeso(peso)
{
    if(peso >= 0 && peso < 1000) {
        return true;
    }

    return false;
}

function validaAltura(altura)
{
    if (altura >= 0 && altura < 3.0) {
        return true;
    }

    return false;
}

function calculaImc(peso, altura)
{
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}
