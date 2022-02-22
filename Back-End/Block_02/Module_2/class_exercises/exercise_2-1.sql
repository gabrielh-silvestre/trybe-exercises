-- 1. Na tabela sakila.film , monte uma query que exiba o título e o ano de lançamento dos filmes em uma coluna e dê a ela o nome Lançamento do Filme .
-- 2. Na tabela sakila.film , crie uma query que exiba o título do filme e sua classificação indicativa (PG, G, NC-17) em apenas uma coluna. Dê a ela o nome Classificação . Não se esqueça de deixar um espaço entre as palavras para que fiquem legíveis.
-- 3. Na tabela sakila.address , monte uma query que exiba a rua e o distrito de cada registro em uma coluna apenas, e dê a essa coluna o nome Endereço .

/* 1 */ SELECT CONCAT(title, ' ', release_year) AS `Lançamento do Filme`
FROM sakila.film;

/* 2 */ SELECT CONCAT(title, ' ', rating) AS `Classificação`
FROM sakila.film;

/* 3 */ SELECT CONCAT(`address`, ' ', district) AS `Endereço`
FROM sakila.address;
