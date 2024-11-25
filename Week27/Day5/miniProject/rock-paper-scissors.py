from game import Game

menu_options=['g', 'x']

def get_user_menu_choice():
    while True:
        print("Menu:")
        print("(g) play a new game")
        print("(x) quit and show scores")
        user_selection=input("please enter your choice").lower()
        if user_selection in menu_options:
            return user_selection
        else:
            print("Not valid, please select 'g' or 'x'")

def print_results(results):
    print(f"You won {results.user_score} times, the computer won {results.computer_score} times and {results.draw_score} were draw. Thank you for playing.")

def main():
     new_game=Game()
     while True:
         user_choice=get_user_menu_choice()
         if user_choice=="g":
             new_game.play()
         elif user_choice=='x':
             print_results(new_game)
             break

main()

   


    
