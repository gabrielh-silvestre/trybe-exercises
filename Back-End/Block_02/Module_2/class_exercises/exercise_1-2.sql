-- 1. Escreva uma query que selecione todas as colunas da tabela city ;
-- 2. Escreva uma query que exiba apenas as colunas first_name e last_name da tabela customer ;
-- 3. Escreva uma query que exiba todas as colunas da tabela rental ;
-- 4. Escreva uma query que exiba o título, a descrição e a data de lançamento dos filmes registrados na tabela film ;
-- 5. Utilize o SELECT para explorar todas as tabelas do banco de dados.

/* 1 */ SELECT * FROM sakila.city;

/* 2 */ SELECT first_name, last_name FROM sakila.customer;

/* 3 */ SELECT * FROM sakila.rental;

/* 4 */ SELECT title, `description`, release_year
FROM sakila.film;

/* 5 */ SELECT * FROM sakila;

/* 6 */ SHOW TABLES;
