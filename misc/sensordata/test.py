import os
import time
from time import sleep
from datetime import datetime

file_ = open("data_log.csv", "a")
i = 0

if os.stat("data_log.csv").st_size == 0:
    file_.write("Time,Sensor1,Sensor2,Sensor3,Sensor4,Sensor5\n")

while True:
        i += 1
        now = datetime.now()
        file_.write(
            '%s,%s,%s,%s,%s,%s\n' % (
                now, i, -i, (i - 10), (i + 5), (i * i)
            )
        )
        file_.flush()
        time.sleep(5)
        file_.close()
