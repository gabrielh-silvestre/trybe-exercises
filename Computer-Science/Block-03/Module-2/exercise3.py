import requests
from parsel import Selector


def get_content(url: str) -> str:
    response = requests.get(url)
    return response.text


def get_content_as_navigator(url: str) -> str:
    response = requests.get(
        url,
        headers={"User-Agent": "Mozilla", "Accept": "text/html"}
    )
    return response.text


def check_if_valid(content: str):
    if (content.find("bot detected") != -1):
        return False

    return True


if __name__ == '__main__':
    URL = "https://scrapethissite.com/pages/advanced/?gotcha=headers"

    navigator_content = get_content_as_navigator(URL)
    print("Navigator: ", check_if_valid(navigator_content))

    content = get_content(URL)
    print("Non navigator: ", check_if_valid(content))
