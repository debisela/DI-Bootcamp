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
    while True:
        try:
            input_player = int(input(f"Player {player}, please enter a position (1-9): "))
            if input_player < 1 or input_player > 9:
                print("Invalid position! Please enter a number between 1 and 9.")
                continue
            if my_board[input_player - 1] != ' ':
                print("Position already taken! Please choose a different position.")
                continue
            my_board[input_player - 1] = player
            break
        except ValueError:
            print("Invalid input! Please enter a number between 1 and 9.")
    print_board(my_board)

#check if won:
def check_win(board):
     possible_combinations=[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8], 
        [0, 3, 6],
        [1, 4, 7],
        [0, 4, 8],
        [2, 5, 8], 
        [2, 4, 6]
     ]
     for combination in possible_combinations:
        if (
            board[combination[0]] == board[combination[1]] == board[combination[2]]
            and board[combination[0]] != ' '
        ):
            print(f"Player {board[combination[0]]} wins!")
            return True
     return False
   

#check if empty spaces in list and switch between players:
def check_spaces(board):
    player1 = "X"
    player2 = "O"
    current_player = player1
    while " " in board:
            player_input(current_player)
            if check_win(board):
                return
            if current_player==player1:
                current_player=player2
            elif current_player==player2:
                current_player=player1 
    print("tie!!")


check_spaces(my_board)
print("Game Over!")

