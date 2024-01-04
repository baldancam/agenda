import validator from "validator";

export default class Contatos {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
        this.errorContainer = document.querySelector('.error-container'); // Elemento HTML para exibir as mensagens de erro
    }

    init() {
        this.events();
    }

    events() {
        if (!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e) {
        const el = e.target;
        const nomeInput = el.querySelector('input[id="nome"]');
        const sobrenomeInput = el.querySelector('input[id="sobrenome"]');
        const emailInput = el.querySelector('input[id="email"]');
        const telefoneInput = el.querySelector('input[id="telefone"]');

        let errors = []; // Array para armazenar mensagens de erro

        if (nomeInput.value.length === 0 && sobrenomeInput.value.length === 0) {
            errors.push('Os campos "Nome" ou "Sobrenome" são obrigatórios.');
        } if (emailInput.value.length === 0 && telefoneInput.value.length === 0) {
            errors.push('Os campos "E-mail" ou "Telefone" são obrigatórios.');
        }

        // Você pode adicionar mais validações aqui conforme necessário

        if (errors.length > 0) {
            // Se houver erros, exiba-os em um elemento HTML com a classe 'alert-danger'
            this.displayErrors(errors);
        } else {
            // Se não houver erros, continue com o envio do formulário ou faça o que for necessário
            // (por exemplo, enviar os dados para o servidor)
            console.log(nomeInput.value, sobrenomeInput.value, emailInput.value, telefoneInput.value);
            el.submit();
        }
    }

    displayErrors(errors) {
        // Limpe quaisquer mensagens de erro anteriores
        this.errorContainer.innerHTML = "";

        // Crie um elemento <div> com a classe 'alert-danger' para exibir mensagens de erro
        const errorDiv = document.createElement("div");
        errorDiv.className = "alert alert-danger";

        // Crie uma lista não ordenada <ul> para listar as mensagens de erro
        const errorList = document.createElement("ul");

        errors.forEach(error => {
            // Crie elementos <li> para cada mensagem de erro
            const errorItem = document.createElement("li");
            errorItem.textContent = error;

            // Adicione cada item de erro à lista
            errorList.appendChild(errorItem);
        });

        // Adicione a lista de erros ao elemento de erro
        errorDiv.appendChild(errorList);

        // Adicione o elemento de erro ao container de erros
        this.errorContainer.appendChild(errorDiv);
    }
}
