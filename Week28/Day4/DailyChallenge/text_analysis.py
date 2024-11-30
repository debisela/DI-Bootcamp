#Part1
class Text():
    def __init__(self, string):
        self.string=string
        self.words=self.string.split()

    def get_frequency(self, word):
        if word in self.words:
            return self.words.count(word)
        else:
            return None
        
    def get_common_word(self):
        word_count={}
        for word in self.words:
            if word in word_count:
                word_count[word]+=1
            else:
                word_count[word]=1
        max_frequency = max(word_count.values())
        most_common=[word for word, count in word_count.items() if count == max_frequency]
        return most_common
    def get_unique_words(self):
        word_count={}
        for word in self.words:
            if word in word_count:
                word_count[word]+=1
            else:
                word_count[word]=1
        most_common=[word for word, count in word_count.items() if count == 1]
        return most_common
    
        
text=Text("A good book would sometimes cost as much as a good house"
)
print(text.get_frequency("as"))
print(text.get_common_word())
print(text.get_unique_words())

#Part2:
