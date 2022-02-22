-- 1. Monte uma query que exiba seu nome na tela;
-- 2. Monte uma query que exiba seu nome, sobrenome, cidade natal e idade na tela;
-- 3. Monte uma query que, além de exibir todas as informações já mencionadas, identifique cada coluna usando o AS , que é chamado de alias na linguagem SQL ( alias é como um apelido no português);
-- 4. Qual é o resultado de 13 * 8 ? Descubra usando apenas o SELECT ;
-- 5. Monte uma query que exiba a data e hora atuais. Dê a essa coluna o nome "Data Atual".

/* 1 */ SELECT 'Gabriel';

/* 2 */ SELECT 'Gabriel', 'Silvestre',
'S. J. do Rio Preto', 21;

/* 3 */ SELECT 'Gabriel' AS `first-name`, 'Silvestre' AS `last-name`,
'S. J. do Rio Preto' AS `city`, 21 AS `age`;

/* 4 */ SELECT 13 * 8;

/* 5 */ SELECT NOW() AS `Data Atual`;
