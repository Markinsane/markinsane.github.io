import json 

# with open("../data/Sightingineachstate.json", "w") as write_file:
#     json.dump(data, write_file)

with open('../data/Sightingineachstate.json') as f:
    data = json.load(f)



pprint(data)