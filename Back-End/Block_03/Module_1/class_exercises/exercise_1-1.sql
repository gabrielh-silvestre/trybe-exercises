/*
1. Faça uma query que exiba a palavra 'trybe' em CAIXA ALTA.
2. Faça uma query que transforme a frase 'Você já ouviu falar do DuckDuckGo?' em 'Você já ouviu falar do Google?' .
3. Utilizando uma query , encontre quantos caracteres temos em 'Uma frase qualquer' .
4. Extraia e retorne a palavra "JavaScript" da frase 'A linguagem JavaScript está entre as mais usadas' .
5. Por fim, padronize a string 'RUA NORTE 1500, SÃO PAULO, BRASIL' para que suas informações estejam todas em caixa baixa.
*/

/* 1 */ SELECT UCASE('trybe');

/* 2 */ SELECT REPLACE('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google');

/* 3 */ SELECT CHAR_LENGTH('Uma frase qualquer');

/* 4 */ SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 12, 11);

/* 5 */ SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');
