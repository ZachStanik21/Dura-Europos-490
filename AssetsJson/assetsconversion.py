import json
import csv

with open("query.json") as jQuery:
    arr = json.load(jQuery)

groupArray = [group['groupLabel'].lower() for group in arr]
groupArray.append('field')

groupArray.sort()
groupArray.insert(0, 'ungrouped')
groupArray.insert(0, 'all groups')

data = []

with open("AssetsFinal.csv", encoding='utf-8') as f:
        reader = csv.DictReader(f)

        for row in reader:
            groups = []
            for group in groupArray:
                for key in row:
                    if group in row[key].lower():
                        groups.append(group)

            if len(groups) == 0:
                groups.append('ungrouped')
            row['groups'] = groups
            data.append(row)

with open("imageData.json", 'w', encoding='utf-8') as jsonf:
    jsonf.write(json.dumps(data))

groupArray = [group.title() for group in groupArray]

with open("groups.json", 'w', encoding='utf-8') as jsonf:
    jsonf.write(json.dumps(groupArray))