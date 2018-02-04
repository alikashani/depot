#!/bin/zsh

#                                   #
# Quick clang build, compile, & run #
#                                   #

# echo vars
echo $1;


# Check if passed filename exists
if [ ! -f ./$1 ]; then
	make main && ./main
else
	rm main ; make main && ./main
fi
