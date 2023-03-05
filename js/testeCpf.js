export default function testeDeCPF(campo) {
    const cpf = campo.value.replace(/\.|-/g,"");

    if(validaNumerosRepetidos(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)){
        campo.setCustomValidity('Este CPF não é valido.');
    }
}

function validaNumerosRepetidos(cpf) {
    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
    ]

    return numerosRepetidos.includes(cpf);
}

// função de verifica o primeiro número dos dois últimos dígitos.
function validaPrimeiroDigito(cpf) {
    let soma = 0;
    let multiplicado = 10;

    for(let tamanho = 0; tamanho < 9; tamanho++) {
        soma += cpf[tamanho] * multiplicado
        multiplicado--
    }

    soma = (soma * 10) % 11;

    if(soma == 10 || soma == 11){
        soma = 0;
    }

    return soma != cpf[9];
}

// função de verificar o segundo número dos dois últimos dígitos
function validaSegundoDigito(cpf) {
    let soma = 0;
    let multiplicado = 11;

    for(let tamanho = 0; tamanho < 10; tamanho++) {
        soma += cpf[tamanho] * multiplicado
        multiplicado--
    }

    soma = (soma * 10) % 11;

    if(soma == 10 || soma == 11){
        soma = 0;
    }

    return soma != cpf[10];
}
