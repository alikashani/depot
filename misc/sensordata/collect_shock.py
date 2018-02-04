import csv
import serial
from datetime import datetime


def run():

    baud = 9600
    device = '/dev/cu.usbserial-A603RPRZ'
    stream = serial.Serial(device, baud)

    file_time = datetime.now().strftime('%m_%d_%y__%H_%M_%S')
    csv_filename = 'shock_data_%s.csv' % file_time

    rg_header = ['value', 'created_at']

    with open(csv_filename, 'ab') as output:
        writer = csv.writer(output)
        writer.writerow(rg_header)

    while True:
        lines = stream.readlines(2)
        timestamp = datetime.now().strftime('%m/%d/%y %H:%M:%S %f')
        print lines
        with open(csv_filename, 'ab') as output:
            writer = csv.writer(output)
            writer.writerow([lines[0].strip(), timestamp])


if __name__ == '__main__':
    'Collecting shock sensor data...'
    run()
