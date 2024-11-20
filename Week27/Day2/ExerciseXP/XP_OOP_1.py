#exercise1:
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

cat1=Cat("luna",12)
cat2=Cat("mizzy",7)
cat3=Cat("whiskers",2)

def find_oldest_cat(*cats):
    return max(cats, key=lambda cat:cat.age)

oldest_cat=find_oldest_cat(cat1, cat2, cat3)

print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")

#exercise2
class Dog():
    def __init__(self, name, height):
        self.name=name
        self.height=height
    
    def bark(self):
        print(f"{self.name} goes woof")
    
    def jump(self):
        print(f"{self.name} jumps {self.height*2}cm high!")

davids_dog = Dog("Rex", 50)
print(davids_dog.name)
print(davids_dog.height)
davids_dog.bark()
davids_dog.jump()

sarahs_dog = Dog("Teacup", 20)
print(sarahs_dog.name)
print(sarahs_dog.height)
sarahs_dog.bark()
sarahs_dog.jump()

if sarahs_dog.height>davids_dog.height:
    print(f"{sarahs_dog.name} is bigger")
else:
    print(f"{davids_dog.name} is bigger")

#exercise3:
class Song():
    def __init__(self, lyrics):
        self.lyrics=lyrics
    
    def sing_me_a_song(self):
        for element in self.lyrics:
            print(element)

stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])

stairway.sing_me_a_song()

#exercise4:
class Zoo():
    def __init__(self, zoo_name):
        self.name=zoo_name
        self.animals=[]
    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
    def get_animals(self):
        print(self.animals)
    def sell_animal(self, animal_sold):
            if animal_sold in self.animals:      
                self.animals.remove(animal_sold)
    def sort_animals(self):
        sorted_animals=sorted(self.animals)
        grouped_animals={}
        for animal in sorted_animals:
            first_letter=animal[0]
            if first_letter not in grouped_animals:
                grouped_animals[first_letter]=[]
            grouped_animals[first_letter].append(animal)
    #def get_groups(self):  
    #could not solve last task...
        
ramat_gan_safari=Zoo("ramat_gan")
ramat_gan_safari.add_animal("Giraffe")
#ramat_gan_safari.get_animals()
ramat_gan_safari.add_animal("Lion")
ramat_gan_safari.add_animal("Zebra")
#ramat_gan_safari.add_animal("Zebra")
ramat_gan_safari.get_animals()
ramat_gan_safari.sell_animal("Giraffe")
#ramat_gan_safari.sell_animal("Dog")
ramat_gan_safari.get_animals()
ramat_gan_safari.add_animal("Alpaca")
ramat_gan_safari.sort_animals()
ramat_gan_safari.get_animals()
        




        