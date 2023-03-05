import testeDeCPF from "./testeCpf.js";
import maiorDeIdade from "./testeIdade.js";

const formulario = document.querySelector("[data-formulario]");
const camposDoFormulario = document.querySelectorAll('[required]');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    window.location.href = 'paginas/camera.html'
})

// variável com os tipos de erros.
const tiposDeErros = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError',
    'tooShort'
];

// variável com mensagens de erro.
const mensagems = {
    nome:{
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O cmapo de e-mail não pode estar vazio.",
        typerMismatch: "Por favor, preencha um e-mail válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: "O campo de CPF não pode estar vazio.",
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo CPF não tem caractéres sulficientes."   
    },
    aniversario: {
        valueMissing: "O campo de data de nascimento não pode estar vazio.",
        customError: "Você deve ser maior que 18 anos para se cadastrar."
    },
    termos: {
        valueMissing: "Você deve aceitar nossos termos antes de continuar"
    }
}

// adicionando a evento de verificação.
camposDoFormulario.forEach( (campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
})

// função de verificação de erros e validações.
function verificaCampo(campo) {
    let mensagem = "";
    campo.setCustomValidity('');

    // teste do cpf.
    if(campo.name == 'cpf' && campo.value.length >= 11) {
        testeDeCPF(campo);
    }

    // teste de maior de idade
    if(campo.name == "aniversario") {
        maiorDeIdade(campo);
    }
    
    tiposDeErros.forEach( erro => {

        if(campo.validity[erro]) {
            mensagem = mensagems[campo.name][erro];            
        }        
    })

    const mensagemDeErro = campo.parentNode.querySelector('.mensagem_erro');
    const validadorDoInput = campo.checkValidity();
    
    

    if(!validadorDoInput) {
        mensagemDeErro.textContent = mensagem;
    } else {
        mensagemDeErro.textContent = "";
    }
}
