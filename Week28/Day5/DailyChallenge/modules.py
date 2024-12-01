import requests
import time

def get_time_to_load(website):
    start_time=time.time()
    x=requests.get(website)
    end_time=time.time()
    passed_time=end_time-start_time
    print(x.status_code)
    print(f"{passed_time} seconds")

get_time_to_load("https://octopus.developers.institute/courses/")