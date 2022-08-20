import requests
from typing import Dict, List
from parsel import Selector


def get_content(url: str) -> str:
    response = requests.get(url)
    return response.text


def select_content(content: str, *, tag: str, css_class: str = None, css_id: str = None) -> List[str]:
    selection = Selector(content)

    if css_class:
        return selection.css(f"{tag}.{css_class}::text").getall()
    elif css_id:
        return selection.css(f"#{css_id}::text").getall()

    return selection.css(f"{tag}::text").getall()


def select_img_url(base_url: str, content: str) -> str:
    selection = Selector(content)
    img_url = selection.css("#product_gallery img::attr(src)").get()

    return f"{base_url}/{img_url.lstrip('../../')}"


def book_constructor(book_url: str) -> Dict[str, str]:
    content = get_content(book_url)

    return {
        "title": select_content(content, tag="h1")[0],
        "price": select_content(content, tag="p", css_class="price_color")[0],
        "description": select_content(content, tag="p")[10][:-len("...more")],
        "img_url": select_img_url(book_url, content)
    }


if __name__ == '__main__':
    URL = "http://books.toscrape.com/catalogue/the-grand-design_405/index.html"

    print(book_constructor(URL))
