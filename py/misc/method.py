#!/usr/bin/env python
import pprint

pp = pprint.PrettyPrinter(indent=4)

def convert_to_dict(list_to_convert):
    target = {}
    for x in range(len(list_to_convert)):
        target[str(x)] = list_to_convert[x]
    return target

fruits = [
    'orange',
    'grape',
    'strawberry',
    'apple',
    'watermelon',
    'cantoloupe',
    'cherry',
]

fruits.append('honeydew')
res = convert_to_dict(fruits)
pp.pprint(res)

lis = convert_to_dict((1, 2, 3, 2, 1, 4, 2, 1))

pp.pprint(lis)
