#exercise1
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

new_dict = zip(keys, values)
print(dict(new_dict))

#exercise2
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
total_price=0

for name, age in family.items():
    if age<3:
        price=0
    elif age>=3 and age<=12:
        price=10
    else:
        price=15
    total_price+=price
    print(f"{name} has to pay {price}")
print(total_price)

family_user={}

#exercise3:
#2
brand = {
    "name": "Zara", 
"creation_date": 1975,
"creator_name": "Amancio Ortega Gaona",
"type_of_clothes": ["men", "women", "children", "home"], 
"international_competitors": ['Gap', 'H&M', 'Benetton'],
'number_stores': 7000, 
'major_color':{ 
    'France': 'blue', 
    'Spain': 'red', 
    'US': ['pink', 'green']
}
}
#3
brand['number_stores']=2
#4
print(f"Zara's clients are: {', '.join(brand['type_of_clothes'])}")
#5
brand['country_creation']='Spain'
#6

if brand['international_competitors']:
    brand['international_competitors'].append('Desigual')

print(brand['international_competitors'])
#7
del brand['creation_date']
#print(brand)
#8
print(brand['international_competitors'][-1])
#9
print(brand['major_color']['US'])
#10
print(len(brand))
#11
print(brand.keys())
#12
more_on_zara={
    "creation_date": 1975,
"number_stores": 10000
}
#13
#more_on_zara.update(brand)
brand.update(more_on_zara)
print(brand)
#14
print(brand['number_stores'])

#exercise4:
users = ["Mickey","Minnie","Donald","Ariel","Pluto"]

#1
#disney_users_A={}
#for index, name in enumerate(users):
#    disney_users_A[name]=index
disney_users_A={name:index for (index, name) in enumerate(users)}
print(disney_users_A)
#2
#disney_users_B={}
#for index, name in enumerate(users):
#    disney_users_B[index]=name
disney_users_B={index:name for(index, name) in enumerate(users)}
print(disney_users_B)
#3
#disney_users_C={}
#for index, name in enumerate(sorted(users)):
#    disney_users_C[name]=index
disney_users_C={name:index for (index, name) in enumerate(sorted(users))}
print(disney_users_C)
#4
disney_users_D={name:index for (index, name) in enumerate(users) if 'i' in name and name[0].lower() in ['m','p']}
print(disney_users_D)

