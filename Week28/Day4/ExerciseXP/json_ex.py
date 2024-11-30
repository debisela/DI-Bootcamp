import json
sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

company=json.loads(sampleJson)
print(company)
salary=company['company']['employee']['payable']['salary']
print(salary)
birthday=company['company']['employee']['birth-date']="07.01.87"
print(birthday)
print(company)
json_file="sample.json"
with open(json_file, "w") as file:
    json.dump(company, file, indent=4)



