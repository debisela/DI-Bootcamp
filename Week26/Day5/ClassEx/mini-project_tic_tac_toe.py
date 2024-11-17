#sample board showing possible positions
my_board_welcome = [
    1,2,3,4,5,6,7,8,9
]

def welcome_message():
    print("Welcome to TIC TAC TOE")
    print("Please see the possible positions below:")
    print_board(my_board_welcome)
    print("\n")
    print("Let's start")
    print("\n")
    

my_board = [
    ' ',' ',' ', ' ',' ',' ', ' ',' ',' '
]

def print_board(board):
    print(f"{board[0]} | {board[1]} | {board[2]}")
    print("---+---+---")
    print(f"{board[3]} | {board[4]} | {board[5]}")
    print("---+---+---")
    print(f"{board[6]} | {board[7]} | {board[8]}")

welcome_message()

#ask player for input
def player_input(player):
    input_player = int(input(f"Player {player}, please enter position (position 1-9)"))

    my_board[input_player-1]=player
    print_board(my_board)



#check if empty spaces in list and switch between players:
def check_spaces(board):
    player1 = "X"
    player2 = "O"
    current_player = player1
    while " " in board:
            player_input(current_player) 
            if current_player==player1:
                current_player=player2
            elif current_player==player2:
                current_player=player1      
print("Game over")

#switch between players



check_spaces(my_board)

