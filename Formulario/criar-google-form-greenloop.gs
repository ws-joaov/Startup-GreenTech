/**
 * Cria o formulário GreenLoop — Teste de Validação do MVP.
 * Como usar: https://script.google.com/ -> Novo projeto -> cole este código -> Executar.
 * O Google solicitará autorização para criar o formulário na sua conta.
 */
function criarFormularioGreenLoop() {
  const form = FormApp.create('GreenLoop — Teste de Validação do MVP');
  form.setDescription(
    'Obrigado por testar o protótipo GreenLoop! Esta avaliação leva cerca de 3 minutos e faz parte de uma atividade acadêmica sobre logística reversa de resíduos eletrônicos em condomínios.\n\n' +
    'A participação é voluntária e anônima. Não solicitamos nome, telefone ou e-mail. Você pode deixar de responder a qualquer momento.\n\n' +
    'Importante: o aplicativo, a pontuação, os cupons e os parceiros apresentados são apenas demonstrativos. Não há benefício comercial real nesta etapa.'
  );
  form.setConfirmationMessage('Obrigado! Sua opinião foi registrada e ajudará a melhorar o GreenLoop.');
  form.setCollectEmail(false);
  form.setProgressBar(true);

  form.addSectionHeaderItem()
    .setTitle('1. Perfil e hábitos atuais')
    .setHelpText('As respostas ajudam a entender o perfil das pessoas que avaliaram a proposta.');

  addMC(form, '1. Qual é o seu vínculo com condomínio?', [
    'Morador(a)', 'Síndico(a) ou administrador(a)',
    'Conselheiro(a) ou integrante da comissão', 'Trabalho em condomínio',
    'Não moro nem trabalho em condomínio', 'Outro'
  ], true, true);

  addMC(form, '2. O que você costuma fazer com cabos velhos, pilhas, baterias ou eletrônicos quebrados?', [
    'Guardo em casa', 'Descarto no lixo comum',
    'Levo a um ponto de coleta específico', 'Entrego a catadores ou a alguém que reaproveite',
    'Faço doação quando ainda funciona', 'Outro / varia conforme o item'
  ], true, true);

  form.addPageBreakItem()
    .setTitle('2. Experiência com o protótipo')
    .setHelpText('Responda depois de navegar pelas cinco telas. Não há respostas certas ou erradas.');

  form.addScaleItem()
    .setTitle('3. Foi fácil entender como identificar o coletor e registrar um descarte?')
    .setBounds(1, 5)
    .setLabels('Muito difícil', 'Muito fácil')
    .setRequired(true);

  addMC(form, '4. Como você avalia a etapa de identificação do coletor por QR Code (código escaneável)?', [
    'Muito clara', 'Clara', 'Nem clara nem confusa', 'Confusa', 'Não entendi para que serve'
  ], true, false);

  addMC(form, '5. Como você se sente em relação à solicitação de uma foto do item descartado?', [
    'Acho útil como forma de conferência',
    'Aceitaria, desde que fosse rápida',
    'Acho desnecessária',
    'Acho burocrática e poderia desistir',
    'Tenho dúvidas sobre privacidade ou uso da imagem'
  ], true, true);

  form.addPageBreakItem()
    .setTitle('3. Interesse e proposta de valor')
    .setHelpText('Considere a hipótese de existir um coletor GreenLoop instalado na área comum do seu condomínio.');

  addMC(form, '6. A possibilidade de acumular pontos e trocar por descontos aumentaria sua disposição para usar o coletor?', [
    'Sim, aumentaria bastante', 'Sim, um pouco',
    'Não faria diferença', 'Diminuiria minha disposição', 'Não sei avaliar'
  ], true, false);

  addMC(form, '7. Se o coletor estivesse disponível no seu condomínio, qual seria a chance de você utilizá-lo?', [
    'Muito alta — usaria sempre que tivesse itens para descartar',
    'Alta — provavelmente usaria', 'Baixa — talvez usasse raramente',
    'Nenhuma — não usaria', 'Não sei dizer'
  ], true, false);

  form.addPageBreakItem()
    .setTitle('4. Barreiras e melhorias')
    .setHelpText('Marque todas as opções que representem uma preocupação sua.');

  const checks = form.addCheckboxItem()
    .setTitle('8. O que poderia dificultar ou impedir o uso do GreenLoop?')
    .setChoiceValues([
      'Dúvida sobre o destino final dos resíduos',
      'Receio de sujeira ou descarte de lixo comum no coletor',
      'Falta de espaço na área comum',
      'Dúvida sobre como os pontos seriam calculados ou trocados',
      'Ter que fotografar os itens',
      'O coletor ficar longe ou ser de difícil acesso',
      'Preocupação com privacidade ou dados pessoais',
      'Nenhuma dessas preocupações'
    ])
    .showOtherOption(true)
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('9. O que você mais gostou, o que mudaria ou que recurso sente falta?')
    .setHelpText('Resposta aberta e opcional. Seja específico(a), se possível.')
    .setRequired(false);

  Logger.log('FORMULÁRIO CRIADO COM SUCESSO');
  Logger.log('Link para responder: ' + form.getPublishedUrl());
  Logger.log('Link para editar: ' + form.getEditUrl());
}

function addMC(form, title, values, required, other) {
  const item = form.addMultipleChoiceItem().setTitle(title).setChoiceValues(values).setRequired(required);
  if (other) item.showOtherOption(true);
  return item;
}
