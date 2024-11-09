#exercise 1:
my_fav_numbers=set()
my_fav_numbers.add(2)
my_fav_numbers.add(4)
#print(my_fav_numbers)
my_fav_numbers.remove(4)
print(my_fav_numbers)

friend_fav_numbers=set()
friend_fav_numbers.add(3)
our_fav_numbers=my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)

#exercise2:
#no, tuples are immutable

#exercise3:
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")
count_apples = basket.count("Apples")
print(count_apples)
basket.clear()
print(basket)

#exercise4:
#1. float is number with decimal
float_list = []
x=1.5
while x<=5:
    float_list.append(x)
    x+=0.5

print(float_list)

#nr_list = []
#for x in frange(0.5,6,0.5):
#    nr_list.append(x)
#print(nr_list/2)

#exercise5:

for x in range(1,21):
    if (x-1)%2==0:
        print(x)

#exercise6:
active= True

while active:
    user_name = input("Please enter your name")
    if user_name=="Debi":
        active = False

#exercise7:
user_fruits=input("what are your favorite fruits?(separate with space)")

fruits_list = user_fruits.split()
#fruits_list.append(user_fruits)
print(fruits_list)
new_fruit=input("please enter a new fruit")
if new_fruit in fruits_list:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy")

#exercise8:

active = True
topping=[]

while active: 
    new_topping = input("Please enter a pizza topping (enter 'quit' when you are finished): ")
    if new_topping == 'quit':
        active = False
    else:
        topping.append(new_topping)
        print(f"{new_topping} added to the pizza")

print(f"The chossen toppings are: {', '.join(topping)}. Total price is: {10+len(topping)*2.5}")

#exercise9:
active = True
price_1=0
price_2=10
price_3=15
total_cost=[]

while active:
    age=input("please enter the age of the visitor. when finishing enter 'quit'")
    if age == 'quit':
        active = False
    else:
        if int(age)<3:
            total_cost.append(price_1)
        elif int(age)>=3 and int(age)<=12:
            total_cost.append(price_2)
        else:
            total_cost.append(price_3)
print(sum(total_cost))

teen_names = ["Alice", "Bob", "Charlie", "Daisy"]


teen_name=input("please enter name")
teen_age=input("please enter your age")

if teen_name in teen_names and int(teen_age)<16 or int(teen_age)>21:
    teen_names.remove(teen_name)

print(teen_names)

#exrcise10:
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]








