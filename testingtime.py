#!/usr/bin/python

import sys
from time import time, sleep, strftime, gmtime

time()

print(strftime("%a %d %b %Y %H:%M:%S +0000", gmtime()))
