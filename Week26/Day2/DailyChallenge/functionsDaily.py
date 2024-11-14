#Daily challenge
my_matrix=[
     [7, 'i', 'i'],
    ['T', 's', 'x'],
    ['h', '%', '?'],
    ['i', ' ', '#'],
    ['s', 'M', ' '],
    ['$', 'a', ' '],
    ['#', 't', '%'],
    ['^', 'r', '!']
]
final_message=""

for column in range(len(my_matrix[0])):
    column_letters=[]
    for row in range(len(my_matrix)):
        item=my_matrix[row][column]
        if isinstance(item,str) and item.isalpha():
            column_letters.append(item)
        elif column_letters and not column_letters[-1].isspace():
            column_letters.append(" ")

    final_message+= "".join(column_letters)

final_message= " ".join(final_message.split())

print(final_message)