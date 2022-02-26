-- Exercício 7: Exclua da tabela Movies todos os filmes dirigidos por "Andrew Staton".

SELECT id, director FROM Pixar.Movies
WHERE director = 'Andrew Staton';

DELETE FROM Pixar.BoxOffice
WHERE movie_id IN (2, 9);

DELETE FROM Pixar.Movies
WHERE director = 'Andrew Staton';
