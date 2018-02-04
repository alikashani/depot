#!/usr/bin/env python
import pprint
pp = pprint.PrettyPrinter(indent=4)

def convert_to_dict(list_to_convert):
    target = {}
    for x in range(len(list_to_convert)):
        target[str(x)] = list_to_convert[x]
    return target

def dict2list(dict_arg):
    res = []
    for x in dict_arg:
        res.append(dict_arg.get(x))
        print res
    return res

fruits = [
    'orange',
    'grape',
    'strawberry',
    'apple',
    'watermelon',
    'cantoloupe',
    'cherry',
]

testings = {
    'ore'   : 20,
    'gold'  : 30,
    'blue'  : 40,
    'duol'  : 10,
    'plow'  : 17,
    'double': 48,
    'dolph' : 83
}

if __name__ == '__main__':
    fruits.append('honeydew')

    res = convert_to_dict(fruits)
    lis = convert_to_dict((1, 2, 3, 2, 1, 4, 2, 1))

    pp.pprint(res)
    pp.pprint(lis)
    pp.pprint(list(set(dict2list(testings))))
