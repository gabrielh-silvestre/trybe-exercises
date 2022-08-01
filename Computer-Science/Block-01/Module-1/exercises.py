from math import ceil
from typing import Tuple


def greater_one(*numbers: int) -> int:
    """Exercise 1"""

    return max(numbers)


def average(*numbers: int) -> float:
    """Exercise 2"""

    return sum(numbers) / len(numbers)


def star_square(n: int) -> None:
    """Exercise 3"""

    for _ in range(n):
        print("*" * n)


def greater_word(*strings: str) -> str:
    """Exercise 4"""

    return max(strings, key=len)


def paint_price(wall_size: int) -> Tuple[int, int]:
    """Exercise 5"""

    PAINT_CAN_LITTERS = 18
    PAINT_CAN_PRICE = 80
    CANS_PER_METER = PAINT_CAN_LITTERS / 3

    paint_needed = ceil(wall_size / CANS_PER_METER)

    return paint_needed, paint_needed * PAINT_CAN_PRICE


def triangle_identifier(l1: int, l2: int, l3: int) -> str:
    """Exercise 6"""

    IS_TRIANGLE = l1 + l2 > l3 and l2 + l3 > l1 and l1 + l3 > l2

    if not IS_TRIANGLE:
        return "Não é um triângulo"

    if l1 == l2 == l3:
        return "Triângulo Equilátero: três lados iguais"
    elif l1 == l2 or l2 == l3 or l1 == l3:
        return "Triângulo Isósceles: quaisquer dois lados iguais"
    else:
        return "Triângulo Escaleno: três lados diferentes"
