'''
    Python application that will process input string (250 character max)
    Returns a JSON response in accordance with schema in data.json

    Requirements:
        - Generate a public/private RSA, DSA, or EC keypair
          and persisting the keypair on the filesystem

        - Subsequent invocations of application should read from the same file

        - Document code: must at least annotate functions with parameter types
          and return values

        - Include unit tests with instructions on how a continuous integrate
          system will execute the tests

        - Can only use FIRST ORDER libraries
'''
# from subprocess import Popen, PIPE
# import shlex
#
# def get_pub_key(path):
#     args = shlex.split('ssh-keygen -y -f')
#     args.append(path)
#     p = Popen(args, stdout=PIPE)
#     stdout = p.communicate()[0]
#     if p.returncode != 0:
#         raise Exception("Error handling would be nice, eh?")
#     return stdout.strip()
#
# print get_pub_key('/tmp/my.key')


import unittest
import re

orange = 'orange juice'

def add_dash(string):
    fin = '-'.join(string.split())
    print fin + '\n'
add_dash(orange)

s = "many   fancy word \nhello    \thi"
this = re.split('\s+', s)

print this


class TestStringMethods(unittest.TestCase):

    def test_upper(self):
        self.assertEqual('foo'.upper(), 'FOO')

    def test_isupper(self):
        self.assertTrue('FOO'.isupper())
        self.assertFalse('Foo'.isupper())

    def test_split(self):
        s = 'hello world'
        self.assertEqual(s.split(), ['hello', 'world'])
        # check that s.split fails when the separator is not a string
        with self.assertRaises(TypeError):
            s.split(2)

if __name__ == '__main__':
    unittest.main()
