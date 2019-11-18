import requests

url = "https://api.bithumb.com/public/ticker/all"
data = requests.get(url).json()['data']

for name, value in data.items():
    if type(value) == type(dict()):
        maximum = float(value['max_price'])
        minimum = float(value['min_price'])
        coin_range = maximum - minimum
        # coinRange =

        start_price = float(value['opening_price'])

        if start_price + coin_range > maximum:
            printf("{} : 상승장".foramt(name))
        else :
            printf("{} : 하락장".format(name))
    else :
        continue




