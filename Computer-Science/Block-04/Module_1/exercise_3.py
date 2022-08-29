"""
3. Utilize o módulo random da linguagem Python para gerar um array com 100 números.
Cada um desses números deve ser a média de n números gerados aleatoriamente. Qual é a ordem de complexidade de tempo e de espaço deste programa?
"""

import random

from typing import List


def generate_random_array(n: int) -> List[int]:
    random_array: List[int] = []
    avg = 0

    for _ in range(100):
        avg = sum([random.randrange(1, n) for _ in range(n)])
        random_array.append(avg)

    return random_array


if __name__ == "__main__":
    print(generate_random_array(5))
