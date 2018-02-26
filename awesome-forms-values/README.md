# awesome-forms-values
We've all been there before. You want to add a commonly asked question to your web app form. E.g. "What is your academic major?" or "Select your Dietary Preference" but you don't want to manually add every single option. Use these data sources to  automatically creat the options for your forms.

## Getting Started
Each folder in the table of contents is a collection of form values. Consisting of json files (_TODO Add other formats csv, sql, etc._), python scripts for values that were scraped from other websites and a README. 

Protip: Use [jqplay](https://jqplay.org/#) to manipulate the json values:
E.g. to convert blood type from A -> B. Type: 
`map(.symbol)`
A: 
```
[
    {"symbol": "A-", "name": "A Negative"},
    {"symbol": "A+", "name": "A Positive"},...
```
B: 
```
[
  "A-",
  "A+",...
```



### Table of Contents
[Sports List]()[Source](http://www.topendsports.com/sport/recognized-sports.htm)
[Activities List]()[Source](https://en.wikipedia.org/wiki/List_of_hobbies)
[Countries List]()[Source](https://github.com/umpirsky/country-list/blob/master/data/en/country.json)
[Languages List]()[Source](https://github.com/umpirsky/language-list/blob/master/data/en/language.json)
[Majors List]()[Source](https://github.com/ademidun/atila-angular/blob/master/src/app/_models/constants.ts#L437)[Source](https://www.mcgill.ca/undergraduate-admissions/programs)
[Universities List]()[Source](https://github.com/Hipo/university-domains-list)
[Religion List]()[Source](https://www.theregister.co.uk/2006/10/06/the_odd_body_religion/)
[ETHNICITIES List]()[Source](https://www.google.com/search?q=list+of+ethnic+groups)
[DISABILITY List]()[Source](https://www.lds.org/topics/disability/list?lang=eng&old=true)
[Diet Types and Allergies List]()[Source](http://universityevents.harvard.edu/sites/universityevents.harvard.edu/files/FOOD%20RESTRICTIONS%20AND%20ALLERGIES.pdf)
[Blood Types]()[Source](https://www.redcrossblood.org/learn-about-blood/blood-types.html)
http://kidshealth.org/en/teens/blood-types.html#