#challenge1
user_word=input("please enter a word")
letters_dict={}
for index, letter in enumerate(user_word):
    if letter in letters_dict:
        letters_dict[letter].append(index)
    else:
        letters_dict[letter]=[index]
print(letters_dict)

#challenge2

   