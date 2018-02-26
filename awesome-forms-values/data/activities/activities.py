import json

import bs4
import requests

res = requests.get('https://en.wikipedia.org/wiki/List_of_hobbies')

res.raise_for_status()
soup = bs4.BeautifulSoup(res.text, "html.parser")
activity_list = []
with open('sports-list.json') as fp:
    sports_list = json.load(fp)

categories = soup.select('.div-col')

categories.extend(soup.select(' ul:nth-of-type(11)'))
categories.extend(soup.select(' ul:nth-of-type(12)'))

for category in categories:
    activities = category.select('li a')

    for activity in activities:
        if 'title' not in activity.attrs:
            continue
        else:
            name = activity.attrs['title']
            name = name.title()
            activity_list.append(name)



activity_list = set(activity_list) - set(sports_list)

activity_list = list(activity_list)
activity_list.sort()

with open('activity-list.json', 'w') as fp:
    json.dump(activity_list, fp, indent=4)