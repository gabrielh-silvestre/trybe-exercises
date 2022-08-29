"""
2. Suponha que se está escrevendo uma função para um jogo de batalha naval.
Dado um array bidimensional com n linhas e m colunas, e um par de coordenadas x para linhas e y para colunas,
o algoritmo verifica se há um navio na coordenada alvo. Por exemplo:

entrada = [
    [0 0 0 0 1]
    [0 0 0 0 1]
    [1 1 1 1 1]
    [0 0 0 1 0]
    ]

resultado para (0, 4) = True
resultado para (1, 1) = False
"""


from typing import List


def check_ship(entry: List[List[int]], x: int, y: int) -> bool:
    ship = entry[x][y]

    return ship == 1


if __name__ == "__main__":
    ENTRY = [
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1],
        [0, 0, 0, 1, 0]
    ]

    print("0, 4", check_ship(ENTRY, 0, 4))
    print("1, 1", check_ship(ENTRY, 1, 1))
