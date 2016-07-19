import os
import json
from pprint import pprint
import subprocess

# couple of strings we'll mess with
a = 'No way this is working.'
b = 'Cool beans, bruh'
print(['-'.join(a.split())])
# print( (a.split()).join(b.split()))
ls = os.listdir('.') # list of cwd items
json_f = 'schema.json' # json file to parse
arr = ['four', 'two', 'three', 'forty-two']

# TODO decorators
def json_print(filename):
    try:
        with open(filename) as json_file:
            json_data = json.load(json_file)
            print map(lambda x: x.encode('utf-8'), json_data)
    except Exception as err:
        print err
    finally:
        print 'we are in the finally block, it\'s warm in here!'

def set_practice():
    hey = [1, 4, 5, 4, 2, 1, 5, 3, 6, 3, 7, 55, 2, 44, 0]
    print 'hey: ' + str(hey)
    print set(hey)
    heyo = []
    for x in hey:
        tmp = x
        if tmp not in heyo:
            heyo.append(x)
    print heyo

def makeDictFromArray(array):
    d = set([])
    for x in array:
        d.add(x)
    return d

def unique(array):
    found = set([])
    keep = []
    for i in array:
        if i not in found:
            found.add(i)
            keep.append(i)
    return keep

if __name__ == '__main__':
    json_print(json_f)
    print('\n')
    set_practice()
    print('\n')
    print 'make dict from array returns: ' + str(makeDictFromArray(arr))
    print('\n')
    print 'unique is returning: ' + str(unique([1, 1, 1, 2, 2, 3]))
    print( list(map(lambda x: x**2, range(10))) )
    print( [ x**2 for x in range(10) ] )
    print( [ x for x in range(5) if x % 2 == 0 ] )
