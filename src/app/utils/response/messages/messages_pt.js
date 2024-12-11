const MESSAGES = {
    // DUPLICATE_ENTRY
    EXISTING_USER: "Usuário já cadastrado no sistema: ",

    EXISTING_ISF_TEACHER: "Professor IsF já cadastrado no sistema: ",
    EXISTING_SPECIALIZATION_STUDENT: "Cursista de Especialização já cadastrado no sistema: ",
    EXISTING_GRADUATION_STUDENT: "Aluno de Graduação já cadastrado no sistema: ",
    EXISTING_ADVISOR_TEACHER: "Docente Orientador já cadastrado no sistema: ",

    EXISTING_PRACTICAL_REPORT: 'Relatório Prática já cadastrado no sistema: ',

    EXISTING_ISF_STUDENT: "Aluno IsF já cadastrado no sistema: ",
    EXISTING_INSTITUTION_STUDENT: "Aluno de Instituição já cadastrado no sistema: ",
    EXISTING_FOREIGN_STUDENT: "Aluno Estrangeiro já cadastrado no sistema: ",
    
    EXISTING_PROEFICIENCY: "Proeficência já cadastrada no sistema: ",
    
    EXISTING_INSTITUTION: "Instituição de Ensino já cadastrada no sistema: ",
    EXISTING_INSTITUTION_USER_RELATIONSHIP: "Usuário já cadastrado na Instituição de Ensino ",
    
    EXISTING_CLASS_SPECIALIZATIONSTUDENT_RELATIONSHIP: 'Cursista já cadastrado na turma',
    EXISTING_SPECIALIZATIONSTUDENT_DISCIPLINE_INTEREST: 'Cursista já manifestou interesse nessa disciplina esse ano: ',

    ALREADY_IN_SYSTEM: ' já está no sistema',
    ALREADY_IN_CLASS: ' já está nessa turma',
    ALREADY_MINISTERING_CLASS: ' já ministra essa turma',
    ADVISOR_ADVISES_STUDENT: 'Esse orientador já orienta esse cursista',
    EXISTING_MENTORSHIP: 'Esse cursista já está sendo orientado por ',

    // NOT_FOUND
    NOTIFICATION_NOT_FOUND: "Notificação não encontrada: ",

    USER_NOT_FOUND: 'Usuário não encontrado: ',

    INSTITUTION_NOT_FOUND: 'Instituição de Ensino não encontrada: ',

    LANGUAGE_NOT_FOUND: 'Idioma não encontrado: ',
    CLASS_NOT_FOUND: 'Turma de Especialização não encontrada: ',
    DISCIPLINE_NOT_FOUND: 'Disciplina não encontrada: ',

    PRACTICAL_REPORT_NOT_FOUND: 'Relatório Prático não encontrado: ',

    NOT_FOUND: ' não encontrado',

    MENTORSHIP_NOT_FOUND: 'Não foi encontrada nenhuma relação de orientação com o cursista: ',

    // AUTHORIZATION
    ACCESS_DENIED: 'Você não possui permissão para acessar essa página',
    INVALID_TOKEN: 'Token de acesso inválido',
    INVALID_PASSWORD: 'Senha inválida',
    USER_WITHOUT_PROEFICIENCY_LEVEL: 'Nível de proeficiência não é o suficiente para este curso',
    ANY_CHANGE: 'Nenhuma alteração realizada',
    FEEDBACK_IS_NEEDED: 'Feedback necessário para essa atividade',
    DOMAIN_NOT_SUPPORTED: 'Domínio inserido não suportado. Por favor insira um email com um dos seguintes domínios: gmail.com, yahoo.com, outlook.com ou hotmail.com',
    EXISTING_ACRONYM: ' já está cadastrada para outra universidade',
    LOGIN_NECESSARY: 'É preciso estar logado para acessar essa página',
    
    // NEW_DATA
    NEW_MATERIAL: ' postou um material novo',
    NEW_SPECIALIZATIONSTUDENT_DISCIPLINE_INTEREST: 'Disciplina inserida com sucesso: ',
    NEW_GUIDANCE_REPORT: ' preencheu um novo relatório de orientação',

    // Tratamento de erros
    INTERNAL_SERVER_ERROR: 'Ocorreu um erro interno no servidor: ',
}

export default MESSAGES