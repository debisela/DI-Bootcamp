from anagram_checker import AnagramChecker

def show_menu():
    print("Hello, this is an Anagram checker")
    while True:
        user_input=input("to play please enter a word, to exit please enter 'x'").lower()
        if user_input=='x':
            return None
        else:
            return user_input

def main():
    new_anagram=AnagramChecker("words.txt")
    while True:
        user_input=show_menu()
        if user_input is None:
            break
        is_valid, message=new_anagram.is_valid_word(user_input)
        if not is_valid:
            print(message)
            continue
        anagrams=new_anagram.get_anagrams(user_input)
        if anagrams:
            print(f"anagrams for {user_input}: {', '.join(anagrams)}")
        else:
            print("no anagrams found")

main()


    
    



        