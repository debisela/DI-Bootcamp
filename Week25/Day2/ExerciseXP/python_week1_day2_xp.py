#exercise1
print("hello world "*4)

#exercise2
print((99**3)*8)

#exercise3
# 5<3 -> false
print(5<3)
# 3==3 -> true
print(3==3)
# 3 == "3" -> false
print(3 == "3")
# "3" > 3 -> error
#print("3" > 3)
# "Hello" == "hello" ->false
print("Hello" == "hello")

#exercise4
computer_brand = "dell"
print(f"I have a {computer_brand} computer")

#exercise5
name = "Debi"
age = 37
shoe_size = 38
info = f"My name is {name}, I am {age} years old and my shoe size is {38}"
print(info)

#exercise6
a = 10
b = 7
if a>b:
    print("Hello World")

#exercise7
number = input("please enter a number")
if int(number)%2==0:
    print(f"{number} is even")
else:
    print(f"{number} is odd")

#exercise8
name_user=input("enter your name")
if name==name_user:
    print(f"wow, your name is {name_user} and my name is {name}")
else:
    print(f"we do not have the same name...yours is {name_user}, mine is {name}")

#exercise9
user_height=input("What is your height (in cm)")
if int(user_height)>= 145:
    print("You are tall enough to ride")
else:
    print("you need to grom some more to ride")