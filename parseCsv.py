import csv
from pymongo import MongoClient
client = MongoClient()
db = client.covid

with open('dp1.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    line_count = 0
    headers = []
    months_headers = []
    comunas = []
    for row in csv_reader:
        if line_count == 0:
            print(f'Column names are {", ".join(row)}')
            for i, header in enumerate(row):
                headers.append(header.replace(" ", "").lower())
                if i > 4 and len(header) > 5:
                    months_headers.append(header[:7])

            line_count += 1
        else:
            doc = {}
            doc['values'] = []
            for i, value in enumerate(row):
                if i < 5:
                    doc[headers[i]] = value
                    if headers[i] == 'comuna':
                        comunas.append(value)
                else:
                    quantity = 0
                    try:
                        quantity = float(value)
                    except:
                        quantity = 0
                    doc['values'].append(
                        {'date': headers[i], 'quantity': quantity})

            db.dp.insert_one(doc)

            line_count += 1
    set_months = set(months_headers)

    db.meta.insert_one({'comunas': comunas, 'months': list(set_months)})
    print(f'Processed {line_count} lines.')
