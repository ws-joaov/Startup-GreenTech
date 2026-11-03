# GreenLoop — Kit de MVP

## Conteúdo
- `tela-1-inicio.svg` até `tela-5-recompensas.svg`: cinco telas vetoriais individuais (390 × 844 px), prontas para importar no Figma.
- `greenloop-prototipo-navegavel.html`: versão navegável do fluxo para conduzir testes com participantes em um navegador.
- `criar-google-form-greenloop.gs`: script do Google Apps Script para criar automaticamente o formulário na sua conta Google.

## Importar as telas para o Figma
1. Abra um arquivo novo no Figma.
2. Arraste os cinco arquivos `.svg` para a página, ou use File → Place image.
3. Cada SVG é um quadro de 390 × 844 px. Os elementos vetoriais e textos podem ser desagrupados e editados após a importação.
4. Para apresentar a experiência clicável, use o HTML do protótipo ou conecte os quadros no modo Prototype do Figma. O HTML já simula os botões, a seleção de quantidades, o fluxo de descarte, os filtros e o resgate ilustrativo.

## Abrir e testar o protótipo
Abra `greenloop-prototipo-navegavel.html` no Chrome, Edge ou Firefox. Em celular, envie o arquivo para um local acessível ou hospede-o em um serviço web antes de compartilhar o link com os participantes. O protótipo não usa câmera, QR code real, banco de dados ou parceiros comerciais: esses passos são simulados.

## Criar o Google Forms
1. Acesse https://script.google.com/ com a conta Google que será proprietária do formulário.
2. Clique em Novo projeto.
3. Apague o código inicial e cole todo o conteúdo de `criar-google-form-greenloop.gs`.
4. Selecione a função `criarFormularioGreenLoop` e clique em Executar.
5. Autorize o acesso solicitado pelo Google.
6. Abra o Registro de execução (Execution log). Lá aparecerão o link público para responder e o link de edição do formulário.

## Roteiro de aplicação
1. Convide pelo menos cinco pessoas, preferencialmente moradores ou síndicos de condomínio. A participação deve ser voluntária.
2. Apresente o protótipo e peça que a pessoa percorra o caminho sem explicar cada botão: início → identificar coletor → selecionar item → confirmar → recompensas.
3. Observe onde ela hesita, erra ou pede ajuda. Não induza respostas nem defenda a solução durante o teste.
4. Depois, envie o formulário e peça que responda individualmente.
5. Registre o número de participantes e sintetize elogios, críticas, dificuldades e sugestões. Não invente respostas nem preencha resultados antes de realizar os testes.

## Hipótese sugerida
Moradores de condomínios demonstrarão intenção de utilizar um ponto de coleta de resíduos eletrônicos no próprio prédio quando o processo for simples e oferecer acompanhamento por pontos/recompensas.

## Critério exploratório sugerido (não é validação estatística)
Considere haver um sinal inicial favorável se pelo menos 4 de 5 participantes avaliarem o fluxo com nota 4 ou 5 e pelo menos 3 de 5 declararem chance alta ou muito alta de usar o coletor. Com cinco pessoas, o resultado é apenas indicativo e serve para orientar a próxima iteração.

## Decisões de conteúdo e limites do protótipo
- Saldo, massa de resíduos, cupons, descontos, código de resgate e pontuação são dados fictícios de demonstração.
- O texto sobre “evitar a contaminação de 400 litros de água” foi removido: a relação depende do tipo e da quantidade de material e não foi demonstrada por uma fonte/metodologia para este MVP.
- A foto foi descrita como apoio à conferência, e não como garantia antifraude. Uma foto isolada não elimina a possibilidade de fraude.
- O protótipo não realiza leitura real de QR code, verificação de descarte, cálculo ambiental, transferência de pontos ou resgate comercial.


## Relatório acadêmico
Use `modelo-relatorio-teste-MVP.md` como base e preencha apenas depois de realizar os testes. Não há resultados de participantes incluídos neste pacote.

## Sobre o arquivo Figma
Os cinco SVGs são telas vetoriais prontas para importar no Figma; este pacote não contém um arquivo nativo `.fig` nem links de um projeto hospedado no Figma. Após importar, revise agrupamentos, fontes e conexões do modo Prototype.
