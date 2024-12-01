class AnagramChecker():
    def __init__(self, textfile):
        try:
            with open(textfile, 'r') as f:
                self.textfile=f.read().splitlines()
        except FileNotFoundError:
            print("file not found")

    def is_valid_word(self, word):
        if not word.strip():
            message="invalid word, please enter a word"
            return False, message
        if len(word.strip().split())!=1:
            message="please enter only one word"
            return False, message
        if not word.isalpha():
            message="please enter only alphabetic characters"
            return False, message
        return True, ""
    
    def get_anagrams(self, word1):
        word1=word1.lower()
        sorted_word=sorted(word1)
        char_list_in_word=list(sorted_word)
        #print(char_list_in_word)
        matching_words=[]
        for word in self.textfile:
            word=word.lower()
            if sorted(word)==char_list_in_word:
                matching_words.append(word)
        if word1 in matching_words:
            matching_words.remove(word1)
        return matching_words
        

#anagram1=AnagramChecker("words.txt")
#print(anagram1.textfile)
#anagram1.get_anagrams("meat")
        