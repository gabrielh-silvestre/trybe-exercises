import requests
import json

from typing import Dict, List


def get_content(url: str) -> Dict[str, str]:
    response = requests.get(url)
    return {
        "content_type": response.headers["Content-Type"],
        "content": response.text
    }


def parse_json(content: str) -> List[Dict[str, str]]:
    return json.loads(content)


if __name__ == '__main__':
    content = get_content("https://api.github.com/users")
    github_users = parse_json(content["content"])

    for user in github_users:
        print(user['login'], user['html_url'])
