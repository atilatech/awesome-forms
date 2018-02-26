import json

import bs4
import requests

res = requests.get('http://www.topendsports.com/sport/recognized-sports.htm')

res.raise_for_status()
soup = bs4.BeautifulSoup(res.text, "html.parser")

sports_list = []
sports = soup.select('#content td  a')

for sport in sports:
    if sport.text == 'Hockey (field)':
        sport_str = 'Field Hockey'
    else:
        sport_str = sport.text.title().replace("  ", " ").replace("  ", " ")

    sports_list.append(sport_str)

missing_fields = ["Swimming", "Track and Field", "Soccer", "Figure Skating",
                  "Speed Skating", "Kung Fu", "Yoga", "Ultimate Frisbee", "Ringette"]
sports_list.extend(missing_fields)
sports_list.sort()

with open('sports-list.json', 'w') as fp:
    json.dump(sports_list, fp, indent=4)