# This script is simply printing all values
# to a file named "log.txt"
# The goal is to properly chunk out the data
# so it can be written neatly to csv

import csv
import serial
import time
from datetime import datetime


def write_data(val, filename):
    """
    Take value and output to JSON
    :param val: {float} value of output
    :param filename: {str} name of output file
    :return {void}
    """
    with open(filename, 'ab') as csv_out:
        writer = csv.writer(csv_out)
        writer.writerow(val)  # Write integer to log


def handle_value(val):
    row = []
    row.append(val)
    if len(row) > 30:
        write_data(row, 'data.csv')


def main():
    device = '/dev/cu.usbmodem621'
    ser = serial.Serial(device, 115200)

    repeat_time = 10000
    header = [
        'gx1', 'gy1', 'gz1', 'units_g',
        'ax1', 'ay1', 'az1', 'units_a',
        'mx1', 'my1', 'mz1', 'units_m',
        'pitch', 'roll', 'heading'
    ]

    with open('data.csv', 'ab') as csv_out:
        writer = csv.writer(csv_out)
        writer.writerow(header)

    timer = time.time()
    while True:
        # time.sleep(0.25)  # sleep for 250 ms
        # if time.time() - timer > repeat_time:
            # ser.write('t\n')
            # ser.write('t')
            # timer = time.time()  # start the timer over

        if ser.inWaiting() > 2:
            with open('log.txt', 'ab') as f:
                value = ser.read()
                f.write(value)


if __name__ == '__main__':
    print 'Collecting data...'
    main()
