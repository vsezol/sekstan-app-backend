import time
import requests
while True:
    try:
        response = requests.get('http://localhost:5000/py?=time=24:12:06&date=12.06.2020&value=23098&degs=25&mins=19')
    except requests.exceptions.HTTPError as err:
        print('Oops. HTTP Error occured')
        print('Response is: {content}'.format(content=err.response.content))
    time.sleep(2)