#!/usr/bin/env python3
import json, sys

SITE_TITLE = "Rainy Blog"
HOME_URL = "https://taichi800.github.io/"  # or your custom domain root
FEED_URL = "https://taichi800.github.io/rainyblog/feed.json"

def load_posts(path="posts.json"):
    with open(path, "r", encoding="utf-8") as f:
        posts = json.load(f)
    posts.sort(key=lambda x: x.get("date_published",""), reverse=True)
    return posts

def make_json_feed(posts):
    return {
        "version": "https://jsonfeed.org/version/1.1",
        "title": SITE_TITLE,
        "home_page_url": HOME_URL,
        "feed_url": FEED_URL,
        "description": "Static updates without email newsletters.",
        "items": [
            {
                "id": p["url"],
                "url": p["url"],
                "title": p["title"],
                "content_text": p.get("summary",""),
                "date_published": p["date_published"]
            } for p in posts
        ]
    }

def make_search_index(posts):
    return [{"t": p["title"], "u": p["url"], "k": p.get("keywords","")} for p in posts]

def main():
    posts = load_posts()
    with open("feed.json","w",encoding="utf-8") as f:
        json.dump(make_json_feed(posts), f, ensure_ascii=False, indent=2)
    with open("index.json","w",encoding="utf-8") as f:
        json.dump(make_search_index(posts), f, ensure_ascii=False, indent=2)
    print("OK")

if __name__ == "__main__":
    sys.exit(main())
