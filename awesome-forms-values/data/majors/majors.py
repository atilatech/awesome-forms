import json

import bs4
import requests

res = requests.get('https://www.mcgill.ca/undergraduate-admissions/programs')

res.raise_for_status()
soup = bs4.BeautifulSoup(res.text, "html.parser")

programs = soup.select('.program')

programs_dict = []
keys_list = []


def parse_name(name):
    i = name.find('(')

    if i > -1:
        name = name[:i]
    if any([ c in name for c in ['-','of',','] ]):
        pass
    else:
        i = name.find('and')
        name = name[:i]

    return name.strip()


# programs = programs[:5]

for program in programs:
    program = program.select('.content')[0]
    program_name = parse_name(program.getText())
    # print('program, program.getText(): ', program, program.getText())

    if program_name not in keys_list:
        programs_dict.append({'name': program_name})
        keys_list.append(program_name)


with open('majors-pretty.json', 'w') as fp:
    json.dump(programs_dict, fp, indent=4)