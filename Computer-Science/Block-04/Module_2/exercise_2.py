"""
2. Transforme o algoritmo abaixo em recursivo.

def how_many_evens(n: int) -> int:
    sequence = range(1, n + 1)

    return len([n for n in sequence if n % 2 == 0])
"""


def how_many_evens(n: int) -> int:
    if n == 0:
        return 0
    elif n % 2 == 0:
        return 1 + how_many_evens(n - 1)
    else:
        return how_many_evens(n - 1)


if __name__ == "__main__":
    LENGTH = 4
    print(how_many_evens(LENGTH))
