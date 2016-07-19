import os
import json
from pprint import pprint

a = 'No way this is working.'
b = 'Cool beans, bruh'

ls = os.listdir('.')

print ls

try:
    with open('data.json') as json_file:
        json_data = json.load(json_file)
        pprint(json_data.strip('\u'))
except Exception:
    print Exception
