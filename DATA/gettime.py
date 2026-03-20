import re
import requests
from bs4 import BeautifulSoup
import time
def GetCSV(url):
    html_text = requests.get(url).text
    soup = BeautifulSoup(html_text, 'html.parser')
    for page in soup.find_all(class_="diagram-link"):
        while True:
            time.sleep(5)
            try:
                url = page.find('a').get('href')#+"&trainType=普通"
                html_text = requests.get(url).text
                time.sleep(3)
                soup = BeautifulSoup(html_text, 'html.parser')
                title = soup.select_one("#body-left > div.station-frame > h2 > ruby > rb").text
                title = title.replace("(静岡県)","")
                title = title.replace("(東海道本線)","")
                print(title)
                break  # if everything is successful, then break the loop
            except AttributeError:  # if there is any error, continue with the loop
                print("ERROR")
                continue
        count = 0
        for direction in soup.select(".diagram-frame"):
            count += 1
            if count <=2:
                if count == 1:
                    f = open('./'+title+'_s.txt', 'w',encoding='UTF-8')
                if count == 2:
                    f = open('./'+title+'_h.txt', 'w',encoding='UTF-8')
                for line in direction.select("dl"):
                    hour = line.find(class_="diagram-frame__hour").text
                    for cell in line.find_all(class_="time-frame"):
                        f.writelines(hour.zfill(2)+cell.find(class_="time").text+cell.find(class_="ruby-dest").text[:2]+cell['data-name'][:2])
                f.close()
def GetCSV2(url):
    html_text = requests.get(url).text
    soup = BeautifulSoup(html_text, 'html.parser')
    for page in soup.find_all(class_="diagram-link"):
        while True:
            time.sleep(5)
            try:
                url = page.find('a').get('href')#+"&trainType=普通"
                html_text = requests.get(url).text
                time.sleep(3)
                soup = BeautifulSoup(html_text, 'html.parser')
                title = soup.select_one("#body-left > div.station-frame > h2 > ruby > rb").text
                title = title.replace("(静岡県)","")
                title = title.replace("(東海道本線)","")
                print(title)
                break  # if everything is successful, then break the loop
            except AttributeError:  # if there is any error, continue with the loop
                print("ERROR")
                continue
        count = 0
        for direction in soup.select(".diagram-frame"):
            count += 1
            if count >=3 and count <=4:
                if count == 3:
                    f = open('./'+title+'2_s.txt', 'w',encoding='UTF-8')
                if count == 4:
                    f = open('./'+title+'2_h.txt', 'w',encoding='UTF-8')
                for line in direction.select("dl"):
                    hour = line.find(class_="diagram-frame__hour").text
                    for cell in line.find_all(class_="time-frame"):
                        f.writelines(hour.zfill(2)+cell.find(class_="time").text+cell.find(class_="ruby-dest").text[:2]+cell['data-name'][:2])
                f.close()
#熱海駅0542のタイムテーブル
url='https://www.navitime.co.jp/diagram/timetable?node=00007326&lineId=00000112'
html_text = requests.get(url).text
soup = BeautifulSoup(html_text, 'html.parser')
href = soup.select_one("#holiday-1 > div > dl:nth-child(9) > dd > ul > li:nth-child(1) > a").get('href')
text = soup.select_one("#holiday-1 > div > dl:nth-child(9) > dd > ul > li:nth-child(1) > a").text
print(href + text)

#熱海から豊橋
print('https://www.navitime.co.jp'+href)
url1='https://www.navitime.co.jp'+href
#平日
print("平日_URL1-----------------------")
GetCSV(url1)
print("平日_URL2-----------------------")
GetCSV(url1)
#休日
print("休日_URL1-----------------------")
GetCSV2(url1)
print("休日_URL2-----------------------")
GetCSV2(url1)