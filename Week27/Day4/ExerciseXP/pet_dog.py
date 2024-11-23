from XP_OOP_2 import Dog
import random

class PetDog(Dog):
    def __init__(self, name, age, weight,trained=False):
        super().__init__(name, age, weight)
        self.trained=trained
    def train(self):
        print(self.bark())
        self.trained=True
    def play(self, *dog_names):
        all_dogs=", ".join(dog.name for dog in dog_names)
        print(f"{self.name}, {all_dogs} all play together")
    def do_a_trick(self):
        tricks=[
            f"{self.name} does a barrel roll",
            f"{self.name} stands on his back legs",
            f"{self.name} shakes your hand",
            f"{self.name} plays dead",
        ]
        random_index=random.randint(0,3)
        if self.trained:
            print(tricks[random_index])

pet_dog1=PetDog("Bobo", 8, 15)
pet_dog2=PetDog("Johnny", 10, 23)
pet_dog3=PetDog("Lola", 1, 12)

pet_dog1.train()
pet_dog2.train()
pet_dog1.play(pet_dog2, pet_dog3)
pet_dog1.do_a_trick()
pet_dog2.do_a_trick()

