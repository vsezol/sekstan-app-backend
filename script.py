import time
import requests
from random import randint as ri
while True:
    try:
        t = f'{ri(0, 23)}:{ri(0, 59)}'
        d = f'{ri(1, 31)}.{ri(1, 11)}.20{ri(10, 20)}'
        value = ri(20000, 25000)
        degs = ri(1, 89)
        mins = ri(0, 59)
        req_str = f'http://localhost:5000/py?=time={t}&date={d}&value={value}&degs={degs}&mins={mins}'
        response = requests.get(req_str)
    except requests.exceptions.HTTPError as err:
        print('Oops. HTTP Error occured')
        print('Response is: {content}'.format(content=err.response.content))
    time.sleep(2)