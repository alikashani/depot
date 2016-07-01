#!/bin/bash

while :
do
  cat file | .write_index.sh > /var/www/html/index.html
done
