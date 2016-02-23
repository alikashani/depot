import time, thread

def myFunction(string, sleeptime, lock, *args):
	while 1:
		lock.acquire()
		time.sleep(sleeptime)
		lock.release()
		time.sleep(sleeptime)

if __name__ == '__main__':
	lock = thread.allocate_lock()
	thread.start_new_thread(myFunction, ("Thread #: 1", 2, lock))
	thread.start_new_thread(myFunction, ("Thread #: 2", 2, lock))
