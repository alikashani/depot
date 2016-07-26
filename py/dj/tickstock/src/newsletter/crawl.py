#!/usr/bin/env python

from HTMLParser import HTMLParser
from urllib import urlopen
import urllib2

class LinkParser(HTMLParser):
    def handle_starttag(self, tag, attrs):
        if tag == 'a':
            for (key, value) in attrs:
                if key == 'href':
                    new_url = parse.urljoin(self.base_url, value)
                    self.link = self.links + [new_url]

    def get_links(self, url):
        self.links = []
        self.base_url = url
        response = urlopen(url)
        if response.getheader('Content-Type') == 'text/html':
            html_bytes = response.read()
            html_string = html_bytes.decode('utf-8')
            self.feed(html_string)
            return html_string, self.links
        else:
            return '', []

def spider(url, word, max_pages):
    pages_to_visit = [url]
    number_visited = 0
    found_word = False

    while number_visited < max_pages and pages_to_visit != [] and not found_word:
        number_visited += 1
        url = pages_to_visit[0]
        pages_to_visit = pages_to_visit[1:]
        try:
            print(number_visited, 'Visiting: ', url)
            parser = LinkParser()
            data, links = parser.get_links(url)
            if data.find(word) > -1:
                found_word = True
            pages_to_visit = pages_to_visit + links
            print('SUCCESS!!!')
        except Exception as err:
            print(' ----FAILED---- ')
            print err

    if found_word:
        print('The word ', word, ' was found at ', url)
    else:
        print('Word never found')

spider('http://www.hm.com/us/department/sale', 'sale', 200)
