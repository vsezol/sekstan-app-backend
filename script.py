import time
import requests
while True:
    try:
        response = requests.get('http://localhost:5000/py?data=44.55.4444&time=23:44:44&angle=44.44')
    except requests.exceptions.HTTPError as err:
        print('Oops. HTTP Error occured')
        print('Response is: {content}'.format(content=err.response.content))
    time.sleep(1)