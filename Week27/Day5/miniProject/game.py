import random
options=['r', 'p', 's']

class Game():
    
    def __init__(self):
        self.user_score=0
        self.computer_score=0
        self.draw_score=0
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
        if user_item==computer_item:
            self.draw_score+=1
            return 'draw'

        elif (user_item=='r' and computer_item == 's') or (user_item=='s' and computer_item=='p') or (user_item=='p' and computer_item=='r'):
            self.user_score+=1
            return 'win' 
        else:
            self.computer_score+=1 
            return 'loss'
            
    def play(self):
        user_move=self.get_user_item()
        computer_move=self.get_computer_item()
        result=self.get_game_result(user_move,computer_move)
        print(f"this round is a {result}")


