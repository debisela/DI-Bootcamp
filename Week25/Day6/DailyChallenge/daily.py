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
items_purchase = {
   "Apple": "$4",
  "Honey": "$3",
  "Fan": "$14",
  "Bananas": "$4",
  "Pan": "$100",
  "Spoon": "$2"
}
wallet = "$1"
new_wallet=int(wallet[1:])
selected_items=[]
total_cost=0

for product,price in items_purchase.items():
    new_price=int(price[1:].replace(',',''))
    if total_cost+new_price<=new_wallet:
        selected_items.append(product)
        total_cost+=new_price
    if total_cost==new_wallet:
        break

if selected_items:
    print(sorted(selected_items))
else:
    print("nothing")



   