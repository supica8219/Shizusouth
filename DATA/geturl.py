import re
import requests
from bs4 import BeautifulSoup
import time
def GetURL(url):
    time.sleep(1)
    html_text = requests.get(url).text
    soup = BeautifulSoup(html_text, 'html.parser')
    for page in soup.find_all(class_="diagram-link"):
        url = page.find('a').get('href')+"&trainType=普通"
        f1.writelines(url+"\n")
def GetURL2(url):
    time.sleep(1)
    html_text = requests.get(url).text
    soup = BeautifulSoup(html_text, 'html.parser') 
    for page in soup.find_all(class_="diagram-link"):
        url = page.find('a').get('href')+"&trainType=普通"
        f2.writelines(url+"\n")
f1 = open('./URL1.csv','w',encoding='UTF-8')
f2 = open('./URL2.csv','w',encoding='UTF-8')
#豊橋から浜松
url = 'https://www.navitime.co.jp/diagram/stops/00000112/006201ff/?node=00008206&year=2024&month=08&day=15&from=timetable'
GetURL(url)
#浜松から熱海
url = 'https://www.navitime.co.jp/diagram/stops/00000112/006201c3/?node=00007841&year=2024&month=08&day=15&from=timetable'
GetURL(url)
#豊橋から浜松
url = 'https://www.navitime.co.jp/diagram/stops/00000112/006201ff/?node=00008206&year=2024&month=08&day=15&from=timetable'
GetURL2(url)
#浜松から熱海
url = 'https://www.navitime.co.jp/diagram/stops/00000112/006201c3/?node=00007841&year=2024&month=08&day=15&from=timetable'
GetURL2(url)
f1.close()
f2.close()