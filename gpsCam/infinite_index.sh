#!/bin/bash
while :
do
  cat file | .write_index.sh > /var/www/index.html
done
