import csv
import serial
import time
from datetime import datetime


def get_scrubbed_data(data):
    """
    Strip newline characters and rm blank entries
    :param data: {list} data to be scrubbed
    :return: {list} scrubbed data
    """
    return map(
        lambda ele: ele.replace('"', '').replace('\r\n', ''),
        filter(lambda item: item.strip(), data)
    )


def run():

    baud = 115200
    device = '/dev/cu.usbmodem621'
    stream = serial.Serial(device, baud)

    file_created_at = datetime.now().strftime('%m_%d_%y__%H_%M_%S')
    csv_filename = 'gyro_data_%s.csv' % file_created_at

    rg_header = [
        'gx', 'gy', 'gz',
        'ax', 'ay', 'az',
        'mx', 'my', 'mz',
        'pitch', 'roll',
        'heading', 'created_at'
    ]

    with open(csv_filename, 'ab') as output:
        writer = csv.writer(output)
        writer.writerow(rg_header)

    while True:
        lines = stream.readlines(128)
        timestamp = datetime.now().strftime('%m/%d/%y %H:%M:%S %f')
        print lines
        with open(csv_filename, 'ab') as output:
            writer = csv.writer(output)

            scrubbed_data = map(
                lambda ele: ele.replace('"', '').replace('\r\n', ''),
                filter(lambda item: item.strip(), lines)
            )

            row = []

            for each in scrubbed_data:
                tmp = each.split(':')[1]
                okay = tmp.split(', ')
                for ok in okay:
                    row.append(
                        ok.replace('deg/s', '').replace(
                            'gauss', '').replace('g', '').strip()
                    )

            row.append(timestamp)  # Timestamp

            writer.writerow(row)


if __name__ == '__main__':
    print 'Collecting gyroscope data...'
    run()
