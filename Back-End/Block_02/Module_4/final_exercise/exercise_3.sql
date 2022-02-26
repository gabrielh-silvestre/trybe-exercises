-- Exercício 3: O diretor do filme "Procurando Nemo" está incorreto, na verdade ele foi dirigido por Andrew Staton. Corrija esse dado utilizando o UPDATE.

SELECT id FROM Pixar.Movies
WHERE title = 'Procurando Nemo';

UPDATE Pixar.Movies
SET director = 'Andrew Staton'
WHERE id = 9;
