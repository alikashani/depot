#!/bin/bash

while :
do
  cat file | sh write_index.sh > /var/www/html/index.html
done
