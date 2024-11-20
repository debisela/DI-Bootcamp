class Farm:
    def __init__(self, farm_name):
        self.farm_name=farm_name
        self.animals={}
    def add_animal(self, new_animal, new_animal_amount=1):
        if new_animal in self.animals:
            self.animals[new_animal]+=new_animal_amount
        else:
            self.animals[new_animal]=new_animal_amount

    def get_info(self):
        print(f"{self.farm_name}'s farm")
        print("\n")
        for new_animal, new_animal_amount in self.animals.items():
            print(f"{new_animal} : {new_animal_amount}")
        print("\n")
        print("E-I-E-I-0!")
    
    def get_animal_types(self):
        return sorted(self.animals.items())
    
    def get_short_info(self):
        animals_types=self.get_animal_types()
        for animal, amount in animals_types:
            if amount>1:
                print(f"{self.farm_name}'s farm has {animal}s")
            else:
                print(f"{self.farm_name}'s farm has {animal}")

macdonald = Farm("McDonal")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.get_info()
macdonald.add_animal('goat', 12)
macdonald.get_info()
macdonald.get_short_info()



        