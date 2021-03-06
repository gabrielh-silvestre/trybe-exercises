/*
1. Usando a query a seguir, exiba apenas as durações médias que estão entre 115.0 a 121.50. Além disso, dê um alias (apelido) à coluna gerada por AVG(length) , de forma que deixe a query mais legível. Finalize ordenando os resultados de forma decrescente.

SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;
*/

/* 1 */ SELECT rating, AVG(`length`) AS 'Film length average'
FROM sakila.film
GROUP BY rating
HAVING AVG(`length`) BETWEEN 115.0 AND 121.59
ORDER BY AVG(`length`) DESC;

/*
2. Usando a query a seguir, exiba apenas os valores de total do custo de substituição que estão acima de $3950.50. Dê um alias que faça sentido para SUM(replacement_cost) , de forma que deixe a query mais legível. Finalize ordenando os resultados de forma crescente.

SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;
*/

/* 2 */ SELECT rating, SUM(replacement_cost) AS 'Replacement cost'
FROM sakila.film
GROUP by rating
HAVING SUM(replacement_cost) > 3950.50
ORDER BY SUM(replacement_cost);
