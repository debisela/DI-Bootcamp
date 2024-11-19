#Challenge1: sorting
words_input=input("please enter some words separated by comma")
words_sorted=','.join([x for x in sorted(words_input.split(','))])

print(words_sorted)

#challenge2:
sentence=input("Please enter a sentence")
words=sentence.split(" ")
print(words)
def find_longest_word(words):
    longest_word=""
    for word in words:
        if len(word)>len(longest_word):
            longest_word=word
    return longest_word

print(find_longest_word(words))
