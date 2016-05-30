import os

list = []

destination_dir = 'C:\Users\Ali\Desktop\Cleanup'
os.makedirs(destination_dir)

list = os.listdir('C:\Users\Ali\Desktop')

for x in list:
	print x
