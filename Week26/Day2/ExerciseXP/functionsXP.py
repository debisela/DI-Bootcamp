#exercise1
def display_message():
    print("I am learning python")

display_message()

#exercise2
def favorite_book(title):
    print(f"One of my favorite books is {title}")
favorite_book("Harry Potter")

#exercise3
def describe_city(city, country="USA"):
    print(f"{city} is in {country}")

describe_city("Zurich","Switzerland")
describe_city("New York")

#exercise4
import random
def get_number(number):
    random_number=random.randint(1,100)
    if number==random_number:
        print("the numbers are the same!")
    else:
        print(f"the numbers are not the same, your number: {number}, random number: {random_number}")
get_number(8)

#exercise5
def make_shirt(size,message):
    print(f"The size of the shirt is {size} and the text is {message}")

make_shirt("small", "this is my t-shirt")

def make_shirt_modified(size="large",message="I love Python"):
    print(f"The size of the shirt is {size} and the text is {message}")

make_shirt_modified()
make_shirt_modified("medium")
make_shirt_modified("small","I love Javascript")
make_shirt_modified(message="I love Java", size="x-large")

#exercise6
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
def show_magicians(names):
    for name in names:
        print(name)
show_magicians(magician_names)
def make_great(names):
    for name in names:
        print(f"The Great {name}")
make_great(magician_names)

