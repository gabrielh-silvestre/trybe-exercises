-- 1. Escreva uma query para exibir a string "This is SQL Exercise, Practice and Solution".
-- 2. Escreva uma query para exibir três números em três colunas.
-- 3. Escreva uma query para exibir a soma dos números 10 e 15.
-- 4. Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.
-- 5. Escreva uma query para exibir todas as informações de todos os cientistas.
-- 6. Escreva uma query para exibir o nome como "Nome do Projeto" e as horas como "Tempo de Trabalho" de cada projeto.
-- 7. Escreva uma query para exibir o nome dos cientistas em ordem alfabética.
-- 8. Escreva uma query para exibir o nome dos Projetos em ordem alfabética descendente.
-- 9. Escreva uma query que exiba a string "O projeto Name precisou de Hours horas para ser concluído." para cada projeto.
-- 10. Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.
-- 11. Escreva uma query para exibir o código de todos os projetos da tabela AssignedTo sem que haja repetições.
-- 12. Escreva uma query para exibir o nome do projeto com maior quantidade de horas.
-- 13. Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.
-- 14. Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.
-- 15. Escreva uma query que exiba a string "Existem Number cientistas na tabela Scientists.", em que Number se refira a quantidade de cientistas.

/* 1 */ SELECT 'This is SQL Exercise, Practice and Solution';

/* 2 */ SELECT 1, 2, 3;

/* 3 */ SELECT 10 + 15;

/* 4 */ SELECT 10 * 2 + 4;

/* 5 */ SELECT * FROM Scientists.Scientists;

/* 6 */ SELECT
`Name` AS `Nome do Projeto`,
`Hours` AS `Tempo de Trabalho`
FROM Scientists.Projects;

/* 7 */ SELECT `Name` FROM Scientists.Scientists
ORDER BY `Name`;

/* 8 */ SELECT `Name` FROM Scientists.Projects
ORDER BY `Name` DESC;

/* 9 */ SELECT
CONCAT('O projeto ', `Name`, ' precisou de '
, `Hours` , ' horas para ser concluído')
FROM Scientists.Projects;

/* 10 */ SELECT `Name`, `Hours`
FROM Scientists.Projects
ORDER BY `Hours` DESC
LIMIT 3;

/* 11 */ SELECT DISTINCT Scientist
FROM Scientists.AssignedTo;

/* 12 */ SELECT `Name`
FROM Scientists.Projects
ORDER BY `Hours` DESC
LIMIT 1;

/* 13 */ SELECT `Name`
FROM Scientists.Projects
ORDER BY `Hours`
LIMIT 1 OFFSET 1;

/* 14 */ SELECT *
FROM Scientists.Projects
ORDER BY `Hours`
LIMIT 5;

/* 15 */ SELECT CONCAT('Existem ', COUNT(*), ' cientistas na tabela Scientists')
FROM Scientists.Scientists;
