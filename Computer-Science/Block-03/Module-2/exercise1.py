import requests
from parsel import Selector


def get_content(url: str) -> str:
    response = requests.get(url)
    return response.text


def readable_content(content):
    selection = Selector(content)
    return selection.get()


if __name__ == '__main__':
    content = get_content("https://httpbin.org/encoding/utf8")
    print(readable_content(content))
