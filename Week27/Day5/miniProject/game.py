import random
options=['r', 'p', 's']
user_score=0
computer_score=0
draw_score=0

class Game():
    
    def __init__(self):
        pass
    def get_user_item(self):
        
        while True:
            user_select=input("select (r)ock, (p)aper, (s)cissors").lower()
            if user_select in options:
                print(f"You chose: {user_select}")
                return user_select
            else:
                print("Not valid, please select 'r', 'p' or 's'")
    def get_computer_item(self):
        computer_select=random.choice(options)
        print(f"The computer chose: {computer_select}")
        return computer_select
    def get_game_result(self, user_item, computer_item):
        if user_item=='r' and computer_item == 's' or user_item=='s' and computer_item=='p' or user_item=='p' and computer_item=='r':
            user_score=user_score+1
            return 'win'  
        elif user_item=='r' and computer_item == 'p' or user_item=='s' and computer_item=='r' or user_item=='p' and computer_item=='s':
            computer_score=computer_score+1
            return 'loss'
        else:
            draw_score=draw_score+1
            return 'draw'
    #def play(self):


