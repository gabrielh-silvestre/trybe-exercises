"""
3. Crie um algoritmo recursivo que encontre, em uma lista, o maior número inteiro.
"""

from typing import List, Union


def find_max_int_aux(list: List[int], length: int) -> Union[int, List[int]]:
    if length == 1:
        return list[0]
    else:
        biggest_one = find_max_int_aux(list, length - 1)

        if biggest_one > list[length - 1]:
            return biggest_one
        else:
            return list[length - 1]


def find_max_int(numbers: list) -> int:
    return find_max_int_aux(numbers, len(numbers))


if __name__ == "__main__":
    NUMBERS = [1, 2, 7, 4, 5]
    print(find_max_int(NUMBERS))
