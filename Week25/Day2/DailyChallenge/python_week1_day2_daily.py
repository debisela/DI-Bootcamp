user_string=input("please enter a string that is 10 character long")
if len(user_string)<10:
    print("string is not long enough")
elif len(user_string)>10:
    print("string is too long")
else:
    print("perfect string")

print(user_string[0])
print(user_string[9])

built_string=""
for x in user_string:
    built_string+=x
    print(built_string)