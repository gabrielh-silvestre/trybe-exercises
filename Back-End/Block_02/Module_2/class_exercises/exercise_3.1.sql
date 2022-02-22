CREATE DATABASE `Escola`;
CREATE TABLE IF NOT EXISTS Escola.Alunos (
    `Nome` VARCHAR(7) CHARACTER SET utf8,
    `Idade` INT
);
INSERT INTO Escola.Alunos VALUES
    ('Rafael', 25),
    ('Amanda', 30),
    ('Roberto', 45),
    ('Carol', 19),
    ('Amanda', 25);

-- 1. Monte uma query para encontrar pares únicos de nomes e idades .
-- 2. Quantas linhas você encontraria na query anterior?
-- 3. Monte uma query para encontrar somente os nomes únicos.
-- 4. Quantas linhas você encontraria na query anterior?
-- 5. Monte uma query para encontrar somente as idades únicas.
-- 6. Quantas linhas você encontraria na query anterior?

/* 1 */ SELECT DISTINCT Nome, Idade FROM Escola.Alunos;

/* 2. Foram encontradas 5 linhas. */

/* 3 */ SELECT DISTINCT Nome FROM Escola.Alunos;

/* 4. Foram encontradas 4 linhas. */

/* 5 */ SELECT DISTINCT Idade from Escola.Alunos;

/* 6. Foram encontradas 4 linhas. */