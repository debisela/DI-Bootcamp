#Challenge 1:
user_number=int(input("Please enter a number"))
user_length=int(input("Please enter a length"))
numbers_list=[]

for i in range(1,user_length+1):
    numbers_list.append(user_number*i)
print(numbers_list)

#challenge 2:
user_string=input("please enter a string")
final_word=""

for x in range(len(user_string)):
    if user_string[x]!=user_string[x-1]:
        final_word+=user_string[x]
print(final_word)
    

