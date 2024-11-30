import random

def get_words_from_file(file):
    with open(file, 'r') as f:
        words=f.read().splitlines()
        return words

#print(get_words_from_file("words.txt"))

def get_random_sentence(length):
    words=get_words_from_file("words.txt")
    random_words=random.sample(words, length)
    sentence=" ".join(random_words)
    return sentence

#print(get_random_sentence(7))

def main():
    print("This is a random sentence generator")
    while True:
        try:
            user_length=int(input("Please enter a number between 2 and 20"))
            if user_length>=2 and user_length<=20:
                print(get_random_sentence(int(user_length)))
                break
            else:
                print("please enter a number between 2 and 20")
        except ValueError:
            print("please enter a number")

main()








