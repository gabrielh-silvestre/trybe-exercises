def smaller_int(*numbers: int) -> int:
    """Bonus Exercise 1"""

    return min(numbers)


def star_triangle(n: int) -> None:
    """Bonus Exercise 2"""

    for _ in range(n):
        print("*" * (_ + 1))


def all_sum(n: int) -> int:
    """Bonus Exercise 3"""

    return sum(range(n + 1))
