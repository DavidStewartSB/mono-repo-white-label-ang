import { IMessageValidations } from "./input-message.interface";

export const MENSAGENS_VALIDACAO: IMessageValidations = {
    dateOrderInvalid: 'Data de final deve ser maior ou igual a data inicial.',
    futureDateInvalid: 'A data não pode ser posterior que a do dia atual.',
    beforeDateInvalid: 'A data não pode ser anterior que hoje.',
    required: 'Campo Obrigatório!',
    email: 'E-mail inválido',
    password: 'E-mail ou senha inválidos',
    notMatchPassword: 'As senhas não são iguais',
    notMatchEmail: 'Os e-mails não coincidem',
    minlength: 'Caracteres insuficientes',
    maxlength: 'Caracteres excedidos!',
    passwordStrength: 'A senha não atende aos requisitos mínimos.',
    pattern: 'Caracteres inválidos',
    cnpjInvalido: 'Digite um Cnpj válido!',
    cpfInvalido: 'Digite um CPF válido!',
    documentoExistente: 'Este documento já está cadastrado!',
    nomeCompleto: 'Digite um nome completo',
    invalidDate: 'Data inválida',
    contatoSolicitante: 'Insira um ramal ou celular válido'
};
