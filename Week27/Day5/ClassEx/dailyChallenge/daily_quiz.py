import random
#part1: Quiz
# What is a class?
#Classes are used to create new user-defined data structures that contain arbitrary information about something
# What is an instance?
# an instance is a copy of the class with actual values
# What is encapsulation?
# restricting variables or methods in a class from direct access (setting to private or protected), so it cannot be modified outside of the class.
# What is abstraction?
#hiding the complexity of implementation by exposing only the essential features of an object, typically using abstract classes or interfaces to define a blueprint for derived classes
# What is inheritance?
#Inheritance is the process by which one class takes on the attributes and methods of another.
# What is multiple inheritance?
#A class can inherit from two different classes; in this case, the order of the parent class in a class definition will decide what will be inherited
# What is polymorphism?
#polymorphism means different or related classes that use the same names for their functions. Polymorphism allows the ability to use a standard interface for multiple forms or data types.
# What is method resolution order or MRO?
#the order in which Python looks for a method or attribute in a hierarchy of classes. It determines the sequence in which base classes are searched when calling a method or accessing an attribute, especially in the case of multiple inheritance.

#part2: Deck
class Card():
    def __init__(self, suit, value):
        self.suit=suit
        self.value=value

class Deck():

    def __init__(self):
        self.cards=[]
    def shuffle(self):
        suits=['hearts', 'diamonds', 'clubs', 'spades']
        values=['A',2,3,4,5,6,7,8,9,10,'J','Q','K']
        self.cards=[Card(suit, value) for suit in suits for value in values]

        random.shuffle(self.cards)

    def deal(self):
        selected_card=self.cards[0]
        self.cards.pop(0)
        return selected_card
    
deck=Deck()
deck.shuffle()
dealt_card=deck.deal()
print(dealt_card.value, dealt_card.suit)
#check how many cards left
print(len(deck.cards))
dealt_card=deck.deal()
print(dealt_card.value, dealt_card.suit)
#check how many cards left
print(len(deck.cards))
