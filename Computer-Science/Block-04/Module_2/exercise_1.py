"""
1. Crie um algoritmo não recursivo para contar quantos números pares existem em uma sequência numérica (1 a n).
"""


def how_many_evens(n: int) -> int:
    sequence = range(1, n + 1)

    return len([n for n in sequence if n % 2 == 0])


if __name__ == "__main__":
    LENGTH = 4
    print(how_many_evens(LENGTH))
