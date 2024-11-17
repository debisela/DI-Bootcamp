#exercise1
import random
def get_random_temp(season):
    if season=="winter":
        random_number=random.randint(-10,16)
    elif season=="autumn" or season=="spring":
        random_number=random.randint(17,23)
    else:
        random_number=random.randint(24,40)
    return random_number

def main():
    season_user=input("please enter the current season")
    temp=get_random_temp(season_user)
    print(f"The temperature right now is {temp} degrees Celsius")
    if temp<0:
        print("Brrr, that’s freezing! Wear some extra layers today")
    elif temp>=0 and temp<=16:
        print("Quite chilly! Don’t forget your coat")
    elif temp>16 and temp<=23:
        print("a sweather should be enough")
    elif temp>23 and temp<=32:
        print("it is hot outside, pack some sunscreen")
    else:
        print("it is very hot outside, take some water and stay in the shadow")

main()

#exercise2:
data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]



def ask_user(data):
    correct_points=0
    wrong_points=0
    wrong_answers=[]
    for question_answer in data:
        user_answer=input(question_answer['question'])
        if user_answer==question_answer['answer']:
            correct_points+=1
        else:
            wrong_points+=1
            wrong_answers.append(user_answer)
    return (f"correct answers: {correct_points}, wrong answers: {wrong_points}, the wrong answer was: {wrong_answers}")

result=ask_user(data)
print(result)

#exercise3:
def get_age(year, month, day):
    current_year = 2024
    current_month = 11
    current_day = 17

    age = current_year-year
    if (current_month, current_day) < (month, day):
        age -=1
    return age

def can_retire(gender, date_of_birth):
    #user_age_input = int(input("Please enter your age in this format: yyyy/mm/dd format:"))
    #user_gender = input("enter you rgender, in this format: 'm' or 'f'")
    user_year, user_month, user_day = map(int, date_of_birth.split('/'))
    age = get_age(user_year, user_month, user_day)

    if gender =="m":
        return age >=67
    elif gender=="f":
        return age >=62
    else:
        return False
def ask_user():
    user_birthday_input = input("Please enter your birthday in this format: yyyy/mm/dd format:")
    user_gender = input("enter your gender, in this format: 'm' or 'f'")
    return can_retire(user_gender, user_birthday_input)

result = ask_user()
print(result)




#exercise4:
def get_parameter(a):
    if isinstance(a, int):
        result = 0
        for i in range(1, 5):
            result += int(str(a) * i)
        return result
    else:
        print("Please enter a number")
result=get_parameter(3)
print(result)







    
    
    

