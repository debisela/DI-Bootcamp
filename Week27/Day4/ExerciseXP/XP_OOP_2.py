#exercise1:
class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    
class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'
all_cats=[Bengal("bengal_cat", "miau"), Chartreux("chartreux_cat", "mieuu"), Siamese("siamese_cat", "miiiiou")]
sara_pets=Pets(all_cats)
sara_pets.walk()

#exercise2:
class Dog():
    def __init__(self, name, age, weight):
        self.name=name
        self.age=age
        self.weight=weight
        self.dogs=[]
    def bark(self):
        return f"{self.name} is barking"
    def run_speed(self):
        return (self.weight/self.age)*10
    def fight(self, other_dog):
        self_dog = self.weight*self.run_speed()
        other = other_dog.weight*other_dog.run_speed()
        if self_dog>other:
            return f"{self.name} won the fight"
        else:
            return f"{other_dog.name} won the fight"
            
dog1= Dog("Luna", 7, 25)
dog2= Dog("Maple", 2, 17)
dog3= Dog("Dyson", 5, 30)
print(dog1.bark())
print(dog2.bark())
print(dog3.bark())
print(dog1.run_speed())
print(dog2.run_speed())
print(dog3.run_speed())
print(dog1.fight(dog2))
print(dog1.fight(dog3))
print(dog2.fight(dog3))

#exercise3:
#see pet_dog.py

#exercise4:
class Family():
    def __init__(self, members, last_name):
        self.members=members
        self.last_name=last_name

    def born(self, **kwargs):
        self.members.append(kwargs)
        print("congratulations")

    def is_18(self, name):
        for member in self.members:
            if member['name']==name and member['age']>=18:
                return True
            else:
                return False
    def family_presentation(self):
        print(f"{self.last_name}")
        for member in self.members:
            print(f"{member['name']}, {member['age']}, {member['gender']}, is a child: {member['is_child']}")

members= [
        {'name':'Michael','age':35,'gender':'Male','is_child':False},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False}
    ]

sela_family=Family(members, "Sela")
sela_family.born(name='Maya',age=0,gender='Female',is_child=True)
sela_family.is_18("Sarah")
sela_family.family_presentation()

#exercise5:
class TheIncredibles(Family):
    def __init__(self, members, last_name):
        super().__init__(members, last_name)

    def use_power(self):
        for member in self.members:
            try:
                if member>18:
                    print(f"{member['power']}")
            except:
                print(f"member is under 18")
    def incredible_presentation(self):
        print("Here is our powerful family:")
        self.family_presentation()
        for member in self.members:
            print(f"power: {member['power']}, incredible_name: {member['incredible_name']}")

incredibles_members = [
        {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
    ]
incredibles_family=TheIncredibles(incredibles_members, "Incredibles")
incredibles_family.incredible_presentation()
incredibles_family.born(name='Jack',age=0,gender='Male',is_child=True, power='Unknown power', incredible_name='Incredible Baby Jack')
incredibles_family.incredible_presentation()







    
