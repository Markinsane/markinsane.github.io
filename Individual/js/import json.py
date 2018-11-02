import json 

with open("data/Sightingineachstate.json", "w") as write_file:
    json.dump(data, write_file)


print("hello")